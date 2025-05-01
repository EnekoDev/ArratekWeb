<script lang="ts" setup>
    import { ref } from 'vue'

    const btnText = ref('Enviar')
    const btnClass = "w-full bg-lime-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-lime-600 hover:cursor-pointer transition duration-300"
    const sendingClass = "w-full bg-lime-600 text-white font-bold py-2 px-4 rounded-lg hover:cursor-wait opacity-90"

    function handleSubmit(formEvent: HTMLFormElement) {
        formEvent.preventDefault()
        btnText.value = 'Enviando...'
        const formData = {}
        // TODO: finish function
    }
</script>

<template>
	<div>
        <section class="flex flex-col items-center justify-center h-auto p-6">
            <form action="" method="POST" class="w-full max-w-md bg-white shadow-md rounded-lg p-8">
				<input
                    id="contact-name"
                    type="email"
                    name="contact-name"
                    placeholder="Nombre*"
                    class="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                    required>
                <input
                    id="contact-email"
                    type="email"
                    name="contact-email"
                    placeholder="Email*"
                    class="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                    required>
                <input
                    id="contact-phone"
                    type="telephone"
                    name="contact-phone"
                    placeholder="Telefono"
                    class="w-full mb-6 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                    >
                <textarea
                    id="contact-message"
                    name="contact-message"
                    placeholder="Mensaje*"
                    class="w-full mb-6 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                    required />
                <button
                    :class="btnText === 'Enviar' ? btnClass : sendingClass"
                    type="submit"
                    @click="handleSubmit">
                        {{ btnText }}
                </button>
            </form>
        </section>
    </div>
</template>


<style>

</style>