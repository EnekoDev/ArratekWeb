<script lang="ts" setup>
    import { ref, watch, onBeforeMount } from 'vue'
    import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
    import { Pagination, PaginationContent, PaginationItem } from '@/components/ui/pagination'
    import { TicketModel } from '~/model/Ticket'
    import ElementDetail from '~/components/dashboard/ElementDetail.vue'

    const props = defineProps({
        query: {
            type: String,
            required: true,
        }
    })

    const loading = ref(true)
    const tickets = ref<TicketModel[]>([])
    const perPage = ref(10)
    const currentPage = ref(0)
    const totalTickets = ref(0)

    const showDetail = ref(false)
    const selectedTicket = ref<TicketModel | null>(null)

    function openDetail(ticket: TicketModel) {
        selectedTicket.value = ticket
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
                tickets.value = []
                for (const ticket of items.data) {
                    tickets.value.push(new TicketModel(
                        ticket.id,
                        ticket.title,
                        ticket.description,
                        ticket.answer ?? '',
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

    onBeforeMount(() => {
        fetchData()
    })

    const tableHeaders = "text-zinc-900 font-semibold"
</script>

<template>
    <article class="w-full flex flex-col items-center justify-center px-2 sm:px-0">
        <div class="w-full overflow-x-auto">
            <Table class="min-w-[600px] sm:min-w-0 w-full">
                <TableHeader>
                    <TableRow>
                        <TableHead :class="tableHeaders + ' text-xs sm:text-base'">Nº Ticket</TableHead>
                        <TableHead :class="tableHeaders + ' text-xs sm:text-base'">Titulo</TableHead>
                        <TableHead :class="tableHeaders + ' text-xs sm:text-base'">Descripción</TableHead>
                        <TableHead :class="tableHeaders + ' text-xs sm:text-base'">Respuesta</TableHead>
                        <TableHead :class="tableHeaders + ' text-xs sm:text-base'">Fecha creacion</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody v-if="tickets.length > 0 && !loading">
                    <TableRow
                        v-for="ticket in tickets"
                        :key="ticket.id"
                        as="tr"
                        class="cursor-pointer hover:bg-zinc-200 transition-colors duration-300"
                        @click="openDetail(ticket)"
                    >
                        <TableCell class="truncate max-w-[100px] text-xs sm:text-base">{{ticket.id}}</TableCell>
                        <TableCell class="truncate max-w-[120px] text-xs sm:text-base">{{ticket.title}}</TableCell>
                        <TableCell class="truncate max-w-[140px] text-xs sm:text-base">{{ticket.description}}</TableCell>
                        <TableCell class="truncate max-w-[140px] text-xs sm:text-base">{{ticket.answer}}</TableCell>
                        <TableCell class="truncate max-w-[100px] text-xs sm:text-base">{{ticket.created_at}}</TableCell>
                    </TableRow>
                </TableBody>
                <TableBody v-if="loading">
                    <TableCell :colspan="6" class="text-center p-16 sm:p-32 text-xs sm:text-base">Cargando...</TableCell>
                </TableBody>
                <TableBody v-if="tickets.length === 0 && !loading">
                    <TableCell :colspan="6" class="text-center p-16 sm:p-32 text-xs sm:text-base">No hay datos para mostrar</TableCell>
                </TableBody>
            </Table>
        </div>

        <Pagination v-if="totalTickets > 0" v-slot="{ page }" :items-per-page="perPage" :total="totalTickets" :default-page="1" class="mt-2">
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
            :ticket="selectedTicket"
            :invoice="null"
            @close="showDetail = false"
        />
    </article>
</template>

<style></style>