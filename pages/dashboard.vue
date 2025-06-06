<script setup lang="ts">
    import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
    import { ref } from 'vue'
    import TicketsList from '~/components/dashboard/TicketsList.vue'
    import InvoiceList from '~/components/dashboard/InvoiceList.vue'
    import NewTicket from '~/components/dashboard/NewTicket.vue'
    import NewInvoice from '~/components/dashboard/NewInvoice.vue'

    const userAdmin = ref<boolean>(false)
    const customerId = ref<number>(0)

    definePageMeta({
        layout: 'customer',
        middleware: 'auth'
    })

    onBeforeMount(() => {
        userAdmin.value = useCookie('admin')?.value ? true : false
        const customerCookie = useCookie('customer')?.value
        customerId.value = customerCookie ? Number(customerCookie) : 0
    })

    const tabsTrigger = 'cursor-pointer'
</script>

<template>
    <div class="w-full h-full flex flex-col items-center justify-center">
        <section class="w-9/10 flex flex-col items-center justify-center bg-gray-100">
            <!-- Admin Grid -->
            <Tabs v-if="userAdmin" default-value="revisarNewTickets" class="w-full h-full items-center justify-center">
                <TabsList class="w-1/2">
                    <TabsTrigger value="nuevaFactura" :class="tabsTrigger">Nueva Factura</TabsTrigger>
                    <TabsTrigger value="revisarNewTickets" :class="tabsTrigger">Tickets Sin Responer</TabsTrigger>
                    <TabsTrigger value="revisarTickets" :class="tabsTrigger">Revisar Todos Tickets</TabsTrigger>
                    <TabsTrigger value="revisarFacturas" :class="tabsTrigger">Revisar Facturas</TabsTrigger>
                </TabsList>
                <TabsContent value="nuevaFactura" class="w-full">
                    <NewInvoice />
                </TabsContent>
                <TabsContent value="revisarNewTickets" class="w-full">
                    <TicketsList :query="'tickets/newTickets'"/>
                </TabsContent>
                <TabsContent value="revisarTickets" class="w-full">
                    <TicketsList query="tickets"/>
                </TabsContent>
                <TabsContent value="revisarFacturas" class="w-full">
                    <InvoiceList :query="'invoices'"/>
                </TabsContent>
            </Tabs>
            <!-- Customers Grid -->
            <Tabs v-else default-value="revisarTickets" class="w-full h-full items-center justify-center">
                <TabsList class="w-1/2">
                    <TabsTrigger value="nuevoTicket" :class="tabsTrigger">Nuevo Ticket</TabsTrigger>
                    <TabsTrigger value="revisarTickets" :class="tabsTrigger">Revisar Tickets</TabsTrigger>
                    <TabsTrigger value="revisarFacturas" :class="tabsTrigger">Revisar Facturas</TabsTrigger>
                </TabsList>
                <TabsContent value="nuevoTicket" class="w-full">
                    <NewTicket />
                </TabsContent>
                <TabsContent value="revisarTickets" class="w-full">
                    <TicketsList :query="`customers/${customerId}/tickets`" />
                </TabsContent>
                <TabsContent value="revisarFacturas" class="w-full">
                    <InvoiceList :query="`customers/${customerId}/invoices`"/>
                </TabsContent>
            </Tabs>
        </section>
    </div>
</template>