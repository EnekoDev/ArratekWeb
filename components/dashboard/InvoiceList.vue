<script lang="ts" setup>
	import { ref, watch, onBeforeMount } from 'vue'
	import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
	import { Pagination, PaginationContent, PaginationItem } from '@/components/ui/pagination'
	import { InvoiceModel } from '~/model/Invoice'
	import ElementDetail from '~/components/dashboard/ElementDetail.vue'

	const props = defineProps({
		query: {
			type: String,
			required: true,
		}
	})

	const loading = ref(true)
	const invoices = ref<InvoiceModel[]>([])
	const perPage = ref(10)
	const currentPage = ref(0)
	const totalInvoices = ref(0)

	const showDetail = ref(false)
	const selectedInvoice = ref<InvoiceModel | null>(null)

	function openDetail(invoice: InvoiceModel) {
		selectedInvoice.value = invoice
		showDetail.value = true
	}

	watch(currentPage, (newPage) => {
		loading.value = true
		currentPage.value = newPage
		fetchData()
	})

	async function fetchData() {
		await fetch(`http://localhost:8000/api/${props.query}?perPage=${perPage.value}&page=${currentPage.value}`,
			{
				method: 'GET',
				headers: {
					'Authorization': `Bearer ${useCookie('auth').value}`,
					'Content-Type': 'application/json'
				}
			}).then((res) => res.json())
			.then((items) => {
				invoices.value = []
				for (const invoice of items.data) {
					invoices.value.push(new InvoiceModel(
						invoice.id,
						invoice.number,
						invoice.date,
						invoice.total_time,
						invoice.total_price,
						invoice.tax,
						invoice.created_at,
						invoice.updated_at,
						invoice.customer_id
					))
				}
				perPage.value = items.meta.perPage
				currentPage.value = items.meta.page
				totalInvoices.value = items.meta.total
			})
			.catch((err) => {
				console.error(err)
			})
			.finally(() => {
				loading.value = false
			})
	}

	onBeforeMount(() => {
		fetchData()
	})

	const tableHeaders = "text-zinc-900 font-semibold"
</script>

<template>
    <article class="w-full flex flex-col items-center justify-center">
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead :class="tableHeaders">Nº Factura</TableHead>
                    <TableHead :class="tableHeaders">Número</TableHead>
                    <TableHead :class="tableHeaders">Fecha</TableHead>
                    <TableHead :class="tableHeaders">Tiempo Total</TableHead>
                    <TableHead :class="tableHeaders">Precio Total</TableHead>
                    <TableHead :class="tableHeaders">IVA</TableHead>
                    <TableHead :class="tableHeaders">Cliente</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody v-if="invoices.length > 0 && !loading">
                <TableRow
                    v-for="invoice in invoices"
                    :key="invoice.id"
                    as="tr"
                    class="cursor-pointer hover:bg-zinc-200 transition-colors duration-300"
                    @click="openDetail(invoice)"
                >
                    <TableCell>{{invoice.id}}</TableCell>
                    <TableCell>{{invoice.number}}</TableCell>
                    <TableCell>{{invoice.date}}</TableCell>
                    <TableCell>{{invoice.total_time}}</TableCell>
                    <TableCell>{{invoice.total_price}}</TableCell>
                    <TableCell>{{invoice.tax}}</TableCell>
                    <TableCell>{{invoice.customer_id}}</TableCell>
                </TableRow>
            </TableBody>
            <TableBody v-if="loading">
                <TableCell :colspan="7" class="text-center p-32">Cargando...</TableCell>
            </TableBody>
            <TableBody v-if="invoices.length === 0 && !loading">
                <TableCell :colspan="7" class="text-center p-32">No hay datos para mostrar</TableCell>
            </TableBody>
        </Table>

        <Pagination v-if="totalInvoices > 0" v-slot="{ page }" :items-per-page="perPage" :total="totalInvoices" :default-page="1">
			<PaginationContent v-slot="{ items }">
				<template v-for="(item, index) in items" :key="index">
					<PaginationItem
						v-if="item.type === 'page'" :value="item.value" :is-active="item.value === page"
						class="cursor-pointer"
						@click="currentPage = item.value - 1">
						{{ item.value }}
					</PaginationItem>
				</template>
			</PaginationContent>
		</Pagination>

        <ElementDetail
            v-if="showDetail"
            :ticket="null"
            :invoice="selectedInvoice"
            @close="showDetail = false"
        />
    </article>
</template>

<style></style>