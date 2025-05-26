<script lang="ts" setup>
    import { ref } from 'vue'

    const btnSending= ref(false)
    const btnClass = "w-full bg-lime-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-lime-600 hover:cursor-pointer transition duration-300"
    const sendingClass = "w-full bg-lime-600 text-white font-bold py-2 px-4 rounded-lg hover:cursor-wait opacity-90"

    async function handleSubmit(formEvent: Event) {
        formEvent.preventDefault()
        btnSending.value = !btnSending.value
        const form = formEvent.target as HTMLFormElement
        const formData = new FormData(form)

        try {
            const res = await fetch('http://localhost:8000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(Object.fromEntries(formData.entries()))
            })

            if (res.ok) {
                const data = await res.json()
                console.log(data)
                form.reset()
            } else {
                const errorData = await res.json()
                console.error(errorData)
                alert('Error al enviar el mensaje')
            }

        } catch (err:unknown) {
            console.error(err)
        }

        btnSending.value = !btnSending.value
    }
</script>

<template>
	<div>
        <section class="w-full h-full flex flex-col items-center justify-center">
            <form
                action=""
                method="POST"
                class="h-full w-full max-w-md bg-white shadow-md rounded-lg p-8"
                @submit="handleSubmit">
				<input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Nombre*"
                    class="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                    required>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email*"
                    class="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                    required>
                <input
                    id="phone"
                    type="telephone"
                    name="phone"
                    placeholder="Telefono"
                    class="w-full mb-6 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                    >
                <textarea
                    id="message"
                    name="message"
                    placeholder="Mensaje*"
                    class="w-full mb-6 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                    required />
                <button
                    :class="btnSending ? sendingClass : btnClass"
                    type="submit">
                        {{ btnSending ? 'Enviando...' : 'Enviar' }}
                </button>
            </form>
        </section>
    </div>
</template>


<style>

</style>