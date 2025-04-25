<script setup lang="ts">
    definePageMeta({
        layout: 'customer'
    })
</script>

<template>
    <div>
        <section class="flex flex-col items-center justify-center h-auto p-6">
            <form action="" method="POST" class="w-full max-w-md bg-white shadow-md rounded-lg p-8">
                <input
                    id="user-email"
                    type="email"
                    name="user-email"
                    placeholder="Email"
                    class="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                    required>
                <input
                    id="user-password"
                    type="password"
                    name="user-password"
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
            <NuxtLink to="/login"><button class="text-white text-xl cursor-pointer mt-4 hover:text-lime-500">Recordar Contraseña</button></NuxtLink>
        </section>
    </div>
</template>