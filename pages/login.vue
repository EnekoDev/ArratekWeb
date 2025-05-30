<script setup lang="ts">
    definePageMeta({
        middleware: 'auth'
    })

    async function handleSubmit(formEvent: Event) {
        formEvent.preventDefault()
        const form = formEvent.target as HTMLFormElement
        const formData = new FormData(form)
        console.log(Object.fromEntries(formData.entries()))
        // TODO: add endpoint url to .env
        const res = await fetch('http://localhost:8000/api/login', {
            method: 'POST',
            body: JSON.stringify(Object.fromEntries(formData.entries())),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        // TODO: add error messages
        if (res.ok) {
            const data = await res.json()
            const maxAge = formData.get('remember-me') ? (60 * 60 * 24 * 15) : (60 * 60 * 24)
            const cookieOptions = {
                secure: false,
                sameSite: 'strict' as const,
                maxAge: maxAge
            }

            const authCookie = useCookie('auth', cookieOptions)
            authCookie.value = data.token

            if (data.admin) {
                const adminCookie = useCookie('admin', cookieOptions)
                adminCookie.value = data.admin
            } else {
                const customerCookie = useCookie('customer', cookieOptions)
                customerCookie.value = data.customer_id
            }

            return navigateTo('/dashboard')
        } else {
            console.error('Fallo')
        }
    }
</script>

<template>
    <div>
        <section class="flex flex-col items-center justify-center h-auto p-6">
            <form
                method="POST"
                class="w-full max-w-md bg-white shadow-md rounded-lg p-8"
                @submit="handleSubmit">
                <h3 class="mb-4 px-3 text-lg font-semibold">Iniciar Sesión</h3>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    class="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                    required>
                <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    class="w-full mb-6 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                    required>
                <input
                    id="remember-me"
                    type="checkbox"
                    name="remember-me"
                    class="mb-6 ml-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500">
                <label for="remember-me" class="ml-4 text-gray-700">Recuerdame</label>
                <button
                    type="submit"
                    class="w-full bg-lime-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-lime-600 hover:cursor-pointer transition duration-300">
                    Entrar
                </button>
            </form>
            <NuxtLink to="/register"><button class="bg-lime-500 px-4 py-2 border border-gray-300 rounded-lg text-white text-xl cursor-pointer mt-4 hover:text-lime-500 hover:bg-white hover:animate-pulse">Registrate</button></NuxtLink>
            <NuxtLink to="/remember-pass"><button class="text-white text-xl cursor-pointer mt-4 hover:text-lime-500">Recordar Contraseña</button></NuxtLink>
        </section>
    </div>
</template>