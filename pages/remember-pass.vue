<script setup lang="ts">
    definePageMeta({
        middleware: 'auth'
    })

    async function handleSubmit(formEvent: Event) {
        formEvent.preventDefault()
        const form = formEvent.target as HTMLFormElement
        const formData = new FormData(form)
        console.log(Object.fromEntries(formData.entries()))
        // TODO: finish function to send form as an email
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
                    id="user-email"
                    type="email"
                    name="user-email"
                    placeholder="Email"
                    class="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                    required>
                <button
                    type="submit"
                    class="w-full bg-lime-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-lime-600 hover:cursor-pointer transition duration-300">
                    Enviar
                </button>
            </form>
            <NuxtLink to="/login"><button class="text-white text-xl cursor-pointer mt-4 hover:text-lime-500">Volver al Login</button></NuxtLink>
        </section>
    </div>
</template>

<style>

</style>