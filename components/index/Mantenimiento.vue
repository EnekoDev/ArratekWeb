<script setup lang="ts">
    const notaFooter: string = "text-lg text-white text-center";
</script>

<template>
    <section id="mantenimiento-web" class="w-full h-auto sm:h-screen flex flex-col sm:flex-row">
        <!-- Left Section -->
        <div class="h-auto sm:h-full w-full sm:w-2/6 bg-white flex flex-col justify-center gap-8 px-6 sm:px-18 py-8 sm:py-0">
            <div>
                <NuxtImg src="/icono-mantenimiento.png" alt="icono de pantalla web con iconos" class="h-32 w-32 sm:h-42 sm:w-42 -m-4 sm:-m-8" />
                <h5 class="text-3xl sm:text-4xl font-light">mantenimiento</h5>
                <h5 class="text-3xl sm:text-4xl font-light">INFÓRMATICO</h5>
                <h2 class="text-6xl sm:text-8xl font-bold text-lime-500">INTEGRAL</h2>
            </div>
            <h6 class="text-xl sm:text-2xl font-medium text-center sm:text-left">Nuestro servicio de mantenimiento informático es mucho más que una simple revisión</h6>
            <p class="text-base sm:text-lg text-center sm:text-left">
                Nos encargamos de realizar <span>copias de seguridad periódicas</span>, <span>actualizar y gestionar los sistemas</span>, y proporcionar <span>soporte técnico</span> para asegurar que tu empresa funcione siempre de manera óptima.
            </p>
            <p class="text-base sm:text-lg text-center sm:text-left">
                Sabemos que el <b>mantenimiento continuo</b> es crucial para prevenir problemas y mantener la seguridad y eficiencia de tu lugar de trabajo.
            </p>
        </div>

        <!-- Right Section -->
        <div class="relative h-auto sm:h-full w-full">
            <div class="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/pexels-brett-sayles-2881229.jpg')] opacity-30 z-0" />
            <div class="relative h-full w-full flex flex-col justify-between px-6 sm:px-18 py-8 sm:py-12 z-10">
                <div class="flex flex-col justify-center">
                    <div class="flex justify-center gap-2">
                        <hr class="w-1/4 sm:w-1/8 mt-3 border-3" style="color: white;" />
                        <h3 class="text-xl sm:text-2xl text-white font-semibold">PLANES DE</h3>
                    </div>
                    <h2 class="text-2xl sm:text-3xl text-lime-500 font-semibold text-center">MANTENIMIENTO</h2>
                </div>
                <div class="text-white flex justify-center">
                    <NuxtImg src="/planes-mantenimeinto.png" alt="banner con planes de mantenimiento con sus caracteristicas y precios" class="w-full sm:w-auto" />
                </div>
                <div class="mt-4 sm:mt-0">
                    <p :class="notaFooter">Estos planes son orientativos. Analizaremos cada caso de forma personalizada para ofrecer la mejor solución.</p>
                    <p :class="notaFooter">También podemos diseñar un plan totalmente a medida.</p>
                </div>
            </div>
        </div>
    </section>
</template>