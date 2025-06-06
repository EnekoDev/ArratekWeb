<script setup lang="ts">
    import { ref } from 'vue';

    const isMenuOpen = ref(false);

    const primaryNavBtn:string = "px-4 py-2 bg-lime-500 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out cursor-pointer hover:bg-white hover:text-lime-500 hover:shadow-lg hover:border-lime-500 hover:animate-pulse"

    function toggleMenu() {
        isMenuOpen.value = !isMenuOpen.value;
    }
</script>

<template>
    <div class="min-h-screen flex flex-col">
        <header class="w-full flex justify-between items-center py-4 px-12 md:px-8 bg-zinc-400 shadow-md">
        <NuxtLink to="/"><NuxtImg src="/arratek-logo.png" alt="Arratek logo" class="h-20" /></NuxtLink>
            <div>
                <button class="md:hidden text-white bg-lime-500 px-3 py-2 rounded-lg" @click="toggleMenu">
                    {{ isMenuOpen ? 'Cerrar' : 'Menú' }}
                </button>
                <nav :class="{'hidden md:flex': !isMenuOpen, 'flex flex-col items-center absolute top-16 left-0 w-full bg-zinc-400 shadow-md md:relative md:w-auto md:bg-transparent md:shadow-none mt-10 pb-4': isMenuOpen}">
                    <ul class="flex gap-4 flex-col md:flex-row md:items-center">
                        <li>
                            <NuxtLink to="/#contacto">
                                <button class="px-4 py-2 bg-white text-lime-500 font-semibold rounded-lg shadow-md transition duration-300 ease-in-out cursor-pointer hover:bg-lime-500 hover:text-white hover:shadow-lg hover:border-lime-500 hover:animate-pulse">Contacto</button>
                            </NuxtLink>
                        </li>
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