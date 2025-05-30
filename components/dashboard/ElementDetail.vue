<script lang="ts" setup>
	import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
	import type { InvoiceModel } from '~/model/Invoice';
	import type { TicketModel } from '~/model/Ticket'

	const props = defineProps<{
		ticket: TicketModel | null,
		invoice: InvoiceModel | null
	}>()

	const emit = defineEmits(['close'])
</script>

<template>
	<Dialog :open="!!ticket" @update:open="open => { if (!open) emit('close') }">
		<DialogContent @if="props.ticket">
			<DialogHeader>
				<DialogTitle>Detalle del Ticket</DialogTitle>
				<DialogDescription>
					Información del ticket seleccionado.
				</DialogDescription>
			</DialogHeader>
			<div v-if="props.ticket">
				<p><strong>ID:</strong> {{ props.ticket.id }}</p>
				<p><strong>Título:</strong> {{ props.ticket.title }}</p>
				<p><strong>Descripción:</strong> {{ props.ticket.description }}</p>
				<p><strong>Respuesta:</strong> {{ props.ticket.answer }}</p>
				<p><strong>Fecha creación:</strong> {{ props.ticket.created_at }}</p>
			</div>
			<DialogFooter>
				<button class="cursor-pointer" @click="emit('close')">Cerrar</button>
			</DialogFooter>
		</DialogContent>
		<DialogContent @elseif="props.invoice">
			<DialogHeader>
				<DialogTitle>Detalle de la Factura</DialogTitle>
				<DialogDescription>
					Información de la factura seleccionada.
				</DialogDescription>
			</DialogHeader>
			<div v-if="props.invoice">
				<p><strong>ID:</strong> {{ props.invoice.id }}</p>
				<p><strong>Número:</strong> {{ props.invoice.number }}</p>
				<p><strong>Fecha:</strong> {{ props.invoice.date }}</p>
				<p><strong>Tiempo Total:</strong> {{ props.invoice.total_time }}</p>
				<p><strong>Precio Total:</strong> {{ props.invoice.total_price }}</p>
				<p><strong>Impuesto:</strong> {{ props.invoice.tax }}</p>
				<p><strong>Fecha creación:</strong> {{ props.invoice.created_at }}</p>
			</div>
			<DialogFooter>
				<button class="cursor-pointer" @click="emit('close')">Cerrar</button>
			</DialogFooter>
		</DialogContent>
	</Dialog>
</template>

<style>

</style>