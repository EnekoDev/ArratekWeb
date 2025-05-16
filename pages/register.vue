<script setup lang="ts">
    async function handleSubmit(formEvent: Event) {
        formEvent.preventDefault()
        const form = formEvent.target as HTMLFormElement
        const formData = new FormData(form)
        console.log(Object.fromEntries(formData.entries()))
        const res = await fetch('http://localhost:8000/api/register', {
            method: 'POST',
            body: JSON.stringify(Object.fromEntries(formData.entries())),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        // TODO: add error messages
        if (res.ok) {
            console.log('Entra')
        } else {
            console.error('Fallo')
            console.log(res)
        }
    }
</script>

<template>
    <div>
        <section class="flex flex-col items-center justify-center h-auto p-6">
            <form
                action=""
                method="POST"
                class="w-full max-w-md bg-white shadow-md rounded-lg p-8"
                @submit="handleSubmit">
                <input
                    id="name"
                    type="name"
                    name="name"
                    placeholder="Nombre"
                    class="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                    required>
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
                <button
                    type="submit"
                    class="w-full bg-lime-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-lime-600 hover:cursor-pointer transition duration-300">
                    Entrar
                </button>
            </form>
            <NuxtLink to="/login"><button class="bg-lime-500 px-4 py-2 border border-gray-300 rounded-lg text-white text-xl cursor-pointer mt-4 hover:text-lime-500 hover:bg-white hover:animate-pulse">Volver al Login</button></NuxtLink>
        </section>
    </div>
</template>