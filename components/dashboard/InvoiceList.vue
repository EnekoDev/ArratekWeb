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
    <article class="w-full flex flex-col items-center justify-center px-2 sm:px-0">
        <div class="w-full overflow-x-auto">
            <Table class="min-w-[700px] sm:min-w-0 w-full">
                <TableHeader>
                    <TableRow>
                        <TableHead :class="tableHeaders + ' text-xs sm:text-base'">Nº Factura</TableHead>
                        <TableHead :class="tableHeaders + ' text-xs sm:text-base'">Número</TableHead>
                        <TableHead :class="tableHeaders + ' text-xs sm:text-base'">Fecha</TableHead>
                        <TableHead :class="tableHeaders + ' text-xs sm:text-base'">Tiempo Total</TableHead>
                        <TableHead :class="tableHeaders + ' text-xs sm:text-base'">Precio Total</TableHead>
                        <TableHead :class="tableHeaders + ' text-xs sm:text-base'">IVA</TableHead>
                        <TableHead :class="tableHeaders + ' text-xs sm:text-base'">Cliente</TableHead>
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
                        <TableCell class="truncate max-w-[80px] text-xs sm:text-base">{{invoice.id}}</TableCell>
                        <TableCell class="truncate max-w-[100px] text-xs sm:text-base">{{invoice.number}}</TableCell>
                        <TableCell class="truncate max-w-[100px] text-xs sm:text-base">{{invoice.date}}</TableCell>
                        <TableCell class="truncate max-w-[100px] text-xs sm:text-base">{{invoice.total_time}}</TableCell>
                        <TableCell class="truncate max-w-[100px] text-xs sm:text-base">{{invoice.total_price}}</TableCell>
                        <TableCell class="truncate max-w-[80px] text-xs sm:text-base">{{invoice.tax}}</TableCell>
                        <TableCell class="truncate max-w-[80px] text-xs sm:text-base">{{invoice.customer_id}}</TableCell>
                    </TableRow>
                </TableBody>
                <TableBody v-if="loading">
                    <TableCell :colspan="7" class="text-center p-16 sm:p-32 text-xs sm:text-base">Cargando...</TableCell>
                </TableBody>
                <TableBody v-if="invoices.length === 0 && !loading">
                    <TableCell :colspan="7" class="text-center p-16 sm:p-32 text-xs sm:text-base">No hay datos para mostrar</TableCell>
                </TableBody>
            </Table>
        </div>

        <Pagination v-if="totalInvoices > 0" v-slot="{ page }" :items-per-page="perPage" :total="totalInvoices" :default-page="1" class="mt-2">
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