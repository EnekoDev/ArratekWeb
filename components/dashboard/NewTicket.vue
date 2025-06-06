<script lang="ts" setup>
	const customer = useCookie('customer')

	async function handleSubmit(formEvent: Event) {
		formEvent.preventDefault()
        const form = formEvent.target as HTMLFormElement
        const formData = new FormData(form)
		const newTicket = {
            'title':formData.get('title') as string,
			'description':formData.get('description') as string,
			'customer_id':parseInt(customer?.value as string)
        }
		try {
			const res = await fetch('http://localhost:8000/api/tickets', {
				method: 'POST',
				headers: {
                    'Authorization':`Bearer ${useCookie('auth').value}`,
                    'content-type':'application/json'
                },
				body: JSON.stringify(newTicket)
			})

			if (res.ok) {
				form.reset();
                return navigateTo('/dashboard')
			} else {
				console.error(await res.json())
			}
		} catch (err) {
			console.error(err)
		}
	}
</script>

<template>
    <div class="h-full w-full flex flex-col justify-center items-center px-2 sm:px-0">
        <form
            method="post"
            class="w-full max-w-sm sm:max-w-md flex flex-col justify-center items-center bg-white shadow-md rounded-lg p-4 sm:p-8"
            @submit="handleSubmit"
        >
            <input
                id="ticket-title"
                type="text"
                name="title"
                placeholder="Título..."
                class="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 text-sm"
                minlength="3"
                maxlength="255"
                required>
            <textarea
                id="ticket-description"
                name="description"
                placeholder="Descripción..."
                class="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 text-sm"
                rows="6"
                minlength="10"
                maxlength="2000"
                required/>
            <input
                type="submit"
                value="Crear ticket"
                class="w-full sm:w-2/3 bg-lime-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-lime-600 transition-colors duration-200 cursor-pointer text-sm">
        </form>
    </div>
</template>

<style>
</style>