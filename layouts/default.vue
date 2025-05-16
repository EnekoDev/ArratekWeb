<script setup lang="ts">
    import { ref } from 'vue';

    const isMenuOpen = ref(false);

    const primaryNavBtn:string = "px-4 py-2 bg-lime-500 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out cursor-pointer hover:bg-white hover:text-lime-500 hover:shadow-lg hover:border-lime-500 hover:animate-pulse"

    function toggleMenu() {
        isMenuOpen.value = !isMenuOpen.value;
    }
</script>

<template>
    <div class="min-h-screen w-full flex flex-col">
        <header class="w-full flex justify-around items-center py-4 px-8 z-99 bg-zinc-400 shadow-md">
        <NuxtLink to="/"><NuxtImg src="/arratek-logo.png" alt="Arratek logo" class="h-20" /></NuxtLink>
            <div>
                <button class="md:hidden" @click="toggleMenu">Mobile menu</button>
                <nav :class="{'hidden md:flex': !isMenuOpen, 'flex flex-col items-center absolute top-16 left-0 w-full bg-zinc-400 shadow-md md:relative md:w-auto md:bg-transparent md:shadow-none': isMenuOpen}">
                    <ul class="flex gap-4">
                        <li><NuxtLink to="/#contacto"><button :class="primaryNavBtn">Contacto</button></NuxtLink></li>
                        <li><NuxtLink to="/#asesoramiento-informatico"><button :class="primaryNavBtn">Asesoramiento Informático</button></NuxtLink></li>
                        <li><NuxtLink to="/#mantenimiento-web"><button :class="primaryNavBtn">Mantenimiento Web</button></NuxtLink></li>
                        <li><NuxtLink to="/#desarrollo-web"><button :class="primaryNavBtn">Desarrollo Web</button></NuxtLink></li>
                        <li><NuxtLink to="/#telefonia-redes"><button :class="primaryNavBtn">Telefonía & Redes</button></NuxtLink></li>
                        <li><NuxtLink to="/login"><button :class="primaryNavBtn">Area Clientes</button></NuxtLink></li>
                    </ul>
                </nav>
            </div>
        </header>

        <main id="main-content" class="flex-1 flex justify-center items-center" >
            <slot />
        </main>

        <ToTopBtn />

        <LayoutFooter />
    </div>
</template>

<style>
    #main-content {
        background-color: #2c2e35;
    }

    span, hr {
        color: #81c546;
    }
</style>