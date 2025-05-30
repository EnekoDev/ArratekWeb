<script lang="ts" setup>
	const customer = useCookie('customer')

	async function handleSubmit(formEvent: Event) {
		formEvent.preventDefault()
		const form = formEvent.target as HTMLFormElement
		const formData = new FormData(form)
		const newInvoice = {
			number: formData.get('number') as string,
			date: formData.get('date') as string,
			total_time: Number(formData.get('total_time')),
			total_price: Number(formData.get('total_price')),
			tax: Number(formData.get('tax')),
			customer_id: parseInt(customer?.value as string)
		}
		try {
			const res = await fetch('http://localhost:8000/api/invoices', {
				method: 'POST',
				headers: {
					'Authorization': `Bearer ${useCookie('auth').value}`,
					'content-type': 'application/json'
				},
				body: JSON.stringify(newInvoice)
			})

			if (res.ok) {
				form.reset()
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
	<div class="h-full w-full flex flex-col justify-center items-center">
		<form
			method="post"
			class="w-full h-full flex flex-col justify-center items-center bg-white shadow-md rounded-lg p-8"
			@submit="handleSubmit"
		>
			<input
				id="invoice-number"
				type="text"
				name="number"
				placeholder="Número de factura..."
				class="w-lg mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
				required>
			<input
				id="invoice-date"
				type="date"
				name="date"
				class="w-lg mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
				required>
			<input
				id="invoice-total-time"
				type="number"
				name="total_time"
				placeholder="Tiempo total (horas)..."
				class="w-lg mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
				required>
			<input
				id="invoice-total-price"
				type="number"
				name="total_price"
				placeholder="Precio total..."
				step="0.01"
				class="w-lg mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
				required>
			<input
				id="invoice-tax"
				type="number"
				name="tax"
				placeholder="Impuesto..."
				step="0.01"
				class="w-lg mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
				required>
			<input
				type="submit"
				value="Crear factura"
				class="w-1/3 bg-lime-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-lime-600 transition-colors duration-200 cursor-pointer">
		</form>
	</div>
</template>

<style>

</style>