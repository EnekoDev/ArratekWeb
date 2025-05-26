<script setup lang="ts">
    import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
    import TicketsList from '../components/dashboard/TicketsList.vue'
    import NewTicket from '~/components/dashboard/NewTicket.vue'

    definePageMeta({
        layout: 'customer',
        middleware: 'auth'
    })

    const tabsTrigger = 'cursor-pointer'
</script>

<template>
    <div class="w-3/4 h-full flex flex-col items-center justify-center">
        <section class="w-full flex flex-col items-center justify-center bg-gray-100">
            <Tabs default-value="revisarTickets" class="w-full items-center justify-center">
                <TabsList class="w-1/2">
                    <TabsTrigger value="revisarTickets" :class="tabsTrigger">Revisar Tickets</TabsTrigger>
                    <TabsTrigger value="nuevoTicket" :class="tabsTrigger">Nuevo Ticket</TabsTrigger>
                </TabsList>
                <TabsContent value="revisarTickets" class="w-full">
                    <TicketsList />
                </TabsContent>
                <TabsContent value="nuevoTicket">
                    <NewTicket />
                </TabsContent>
            </Tabs>
        </section>
    </div>
</template>