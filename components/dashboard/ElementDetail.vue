<script lang="ts" setup>
	import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
	import type { InvoiceModel } from '~/model/Invoice';
	import type { TicketModel } from '~/model/Ticket'

	const props = defineProps<{
		ticket: TicketModel | null,
		invoice: InvoiceModel | null
	}>()

	const emit = defineEmits(['close'])

	async function handleSubmit(formEvent:Event) {
		formEvent.preventDefault()
        const form = formEvent.target as HTMLFormElement
        const formData = new FormData(form)
		const answerTicket = {
            'answer':formData.get('answer') as string
        }
		try {
			const res = await fetch(`http://localhost:8000/api/tickets/${props.ticket?.id}`, {
				method: 'PUT',
				headers: {
					'Authorization': `Bearer ${useCookie('auth').value}`,
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(answerTicket)
			})
			if (res.ok) {
				form.reset()
				emit('close')
			} else {
				console.error(await res.json())
			}
		} catch (err) {
			console.error(err)
		}
	}
</script>

<template>
    <Dialog :open="!!ticket || !!invoice" @update:open="open => { if (!open) emit('close') }">
        <DialogContent v-if="props.ticket" class="p-2 sm:p-6">
            <DialogHeader>
                <DialogTitle class="text-base sm:text-lg">Detalle del Ticket</DialogTitle>
                <DialogDescription class="text-xs sm:text-base">
                    Información del ticket seleccionado.
                </DialogDescription>
            </DialogHeader>
            <div class="text-xs sm:text-base">
                <p><strong>ID:</strong> {{ props.ticket.id }}</p>
                <p><strong>Título:</strong> {{ props.ticket.title }}</p>
                <p><strong>Descripción:</strong> {{ props.ticket.description }}</p>
                <p><strong>Respuesta:</strong> {{ props.ticket.answer }}</p>
                <p><strong>Fecha creación:</strong> {{ props.ticket.created_at }}</p>
                <form
                    v-if="useCookie('admin')?.value"
                    method="post"
                    class="mt-4"
                    @submit="handleSubmit"
                >
                    <textarea
                        id="ticket-answer"
                        name="answer"
                        placeholder="Respuesta..."
                        class="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 text-xs sm:text-base"
                        rows="4"
                        minlength="10"
                        maxlength="2000"
                        required />
                    <input
                        type="submit"
                        value="Responder Ticket"
                        class="cursor-pointer mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 text-xs sm:text-base">
                </form>
            </div>
            <DialogFooter>
                <button class="cursor-pointer w-full sm:w-auto" @click="emit('close')">Cerrar</button>
            </DialogFooter>
        </DialogContent>
        <DialogContent v-else-if="props.invoice !== null" class="p-2 sm:p-6">
            <DialogHeader>
                <DialogTitle class="text-base sm:text-lg">Detalle de la Factura</DialogTitle>
                <DialogDescription class="text-xs sm:text-base">
                    Información de la factura seleccionada.
                </DialogDescription>
            </DialogHeader>
            <div class="text-xs sm:text-base">
                <p><strong>ID:</strong> {{ props.invoice.id }}</p>
                <p><strong>Número:</strong> {{ props.invoice.number }}</p>
                <p><strong>Fecha:</strong> {{ props.invoice.date }}</p>
                <p><strong>Tiempo Total:</strong> {{ props.invoice.total_time }}</p>
                <p><strong>Precio Total:</strong> {{ props.invoice.total_price }}</p>
                <p><strong>Impuesto:</strong> {{ props.invoice.tax }}</p>
                <p><strong>Fecha creación:</strong> {{ props.invoice.created_at }}</p>
            </div>
            <DialogFooter>
                <button class="cursor-pointer w-full sm:w-auto" @click="emit('close')">Cerrar</button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>

<style>

</style>