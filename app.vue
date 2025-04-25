<script setup lang="ts">
    import { useHead } from '#imports'
    useHead({
        title: 'Arratek Informática',
        meta: [
            { name: 'description', content: 'Arratek - Haz destacar tu negocio en internet' },
            { name: 'keywords', content: 'arratek, negocio, internet, informatica, mantenimiento, web' },
            { name: 'author', content: 'Arratek' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
        ],
        link: [
            { rel: 'icon', type: 'image/png', href: '/arratek-logo.png' }
        ]
    })
</script>


<template>
    <div>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>


<style>

</style>