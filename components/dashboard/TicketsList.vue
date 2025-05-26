<script lang="ts" setup>
    import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
    import { Pagination, PaginationContent, PaginationItem } from '@/components/ui/pagination'
	import { ref, watch } from 'vue'
	import { TicketModel } from '~/model/Ticket'

	onBeforeMount(() => {
		fetchData()
	})

	const router = useRouter()
	const loading = ref<boolean>(true)
	const tickets = ref<TicketModel[]>([])
	const perPage = ref<number>(10)
	const currentPage = ref<number>(0)
	const totalTickets = ref<number>(0)
	const customer = useCookie('customer')
	const query = ref<string>(`http://localhost:8000/api/customers/${customer.value}/tickets?perPage=${perPage.value}&page=${currentPage.value}`)

	watch(currentPage, (newPage) => {
		loading.value = true
		query.value = `http://localhost:8000/api/customers/${customer.value}/tickets?perPage=${perPage.value}&page=${newPage}`
		fetchData()
	})

	async function fetchData() {
		await fetch(query.value)
			.then((res) => res.json())
			.then((items) => {
				tickets.value = []
				for (const ticket of items.data) {
					tickets.value.push(new TicketModel(
						ticket.id,
						ticket.title,
						ticket.description,
						ticket.resolved_on,
						ticket.created_at,
						ticket.updated_at,
						ticket.invoice_id,
						ticket.customer_id
					))
				}
				perPage.value = items.meta.perPage
				currentPage.value = items.meta.page
				totalTickets.value = items.meta.total
			})
			.catch((err) => {
				console.error(err)
			})
			.finally(() => {
				loading.value = false
			})
	}

	function goToTicket(ticket:TicketModel) {
		console.log(ticket)
		router.push({
			name: 'ticket',
			params: { id: ticket.id },
		})
	}

	const tableHeaders:string = "text-zinc-900 font-semibold"
</script>

<template>
	<article class="w-full flex flex-col items-center justify-center">
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead :class="tableHeaders">Nº Ticket</TableHead>
					<TableHead :class="tableHeaders">Titulo</TableHead>
					<TableHead :class="tableHeaders">Descripción</TableHead>
					<TableHead :class="tableHeaders">Fecha creacion</TableHead>
					<TableHead :class="tableHeaders">Ver Factura</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody v-if="tickets.length > 0 && !loading">
				<TableRow
					v-for="ticket in tickets"
					:key="ticket.id"
					as="tr"
					class="cursor-pointer hover:bg-zinc-200 transition-colors duration-300"
					@click="() => goToTicket(ticket)"
				>
					<TableCell>{{ticket.id}}</TableCell>
					<TableCell>{{ticket.title}}</TableCell>
					<TableCell class="max-w-lg truncate">{{ticket.description}}</TableCell>
					<TableCell>{{ticket.created_at}}</TableCell>
					<TableCell>{{ticket.invoice}}</TableCell>
				</TableRow>
			</TableBody>
			<TableBody v-if="loading">
				<TableCell :colspan="5" class="text-center p-24">Cargando...</TableCell>
			</TableBody>
			<TableBody v-if="tickets.length === 0 && !loading">
				<TableCell :colspan="5" class="text-center p-24">No hay datos para mostrar</TableCell>
			</TableBody>
		</Table>
		<Pagination v-slot="{ page }" :items-per-page="perPage" :total="totalTickets" :default-page="1">
			<PaginationContent v-slot="{ items }">
				<template v-for="(item, index) in items" :key="index">
					<PaginationItem v-if="item.type === 'page'" :value="item.value" :is-active="item.value === page" @click="currentPage = item.value - 1">
						{{ item.value }}
					</PaginationItem>
				</template>
			</PaginationContent>
		</Pagination>
	</article>
</template>

<style></style>