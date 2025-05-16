<script lang="ts" setup>
    const footerItem:string = "w-full md:w-1/3 flex justify-center items-center";
    const navBtn:string = "text-lg text-stone-50 transition hover:text-lime-400 cursor-pointer hover:animate-pulse";
</script>

<template>
    <footer class="w-full flex flex-col md:flex-row py-5 px-4 md:px-8 bg-zinc-400 shadow-md gap-4">
        <nav :class="footerItem">
            <ul class="flex flex-col md:flex-row gap-2 md:gap-4">
                <li><NuxtLink to="/"><button :class="navBtn">Información legal</button></NuxtLink></li>
                <li><NuxtLink to="/"><button :class="navBtn">Política de Privacidad</button></NuxtLink></li>
                <li><NuxtLink to="/"><button :class="navBtn">Política de Cookies</button></NuxtLink></li>
            </ul>
        </nav>
        <div :class="footerItem">
            <h6 class="text-center md:text-left text-xl font-bold text-stone-50">© {{ new Date().getFullYear() }} Arratek. Todos los derechos reservados.</h6>
        </div>
        <nav :class="footerItem">
            <ul class="flex justify-center md:justify-start gap-2 md:gap-4">
                <li><NuxtLink to="https://www.instagram.com/arratekinformatika/"><button :class="navBtn"><Icon name="mdi:instagram" /></button></NuxtLink></li>
            </ul>
        </nav>
    </footer>
</template>

<style>

</style>