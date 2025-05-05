<script setup lang="ts">
    const notaFooter:string = "text-lg text-white text-center"
</script>

<template>
    <section id="mantenimiento-web" class="w-full h-screen flex">
        <div class="h-full w-2/6 bg-white flex flex-col justify-center gap-8 px-18">
            <div>
                <img src="/icono-mantenimiento.png" alt="icono de pantalla web con iconos" class="h-42 w-42 -m-8">
                <h5 class="text-4xl font-light">mantenimiento</h5>
                <h5 class="text-4xl font-light">INFÓRMATICO</h5>
                <h2 class="text-8xl font-bold text-lime-500">INTEGRAL</h2>
            </div>
            <h6 class="text-2xl font-medium">Nuestro servicio de mantenimiento informático es mucho más que una simple revisión</h6>
            <p>Nos encargamos de realizar <span>copias de seguridad periódicas</span>, <span>actualizar y gestionar los sistemas</span>, y proporcionar <span>soporte técnico</span> para asegurar que tu empresa funcione siempre de manera óptima.</p>
            <p class="text-lg">Sabemos que el <b>mantenimiento continuo</b> es crucial para prevenir problemas y mantener la seguridad y eficiencia de tu lugar de trabajo.</p>
        </div>
        <div class="relative h-full w-full">
            <div class="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/pexels-brett-sayles-2881229.jpg')] opacity-30 z-0"></div>
            <div class="relative h-full w-full flex flex-col justify-between px-18 py-12 z-10">
                <div class="flex flex-col justify-center">
                    <div class="flex justify-center gap-2">
                        <hr class="w-1/8 mt-3 border-3" style="color: white;">
                        <h3 class="text-2xl text-white font-semibold">PLANES DE</h3>
                    </div>
                    <h2 class="text-3xl text-lime-500 font-semibold text-center">MANTENIMIENTO</h2>
                </div>
                <div class="text-white flex justify-center">
                    <img src="/planes-mantenimeinto.png" alt="banner con planes de mantenimiento con sus caracteristicas y precios">
                </div>
                <div>
                    <p :class="notaFooter">Estos planes son orientativos. Analizaremos cada caso de forma personalizada para ofrecer la mejor solución.</p>
                    <p :class="notaFooter">También podemos diseñar un plan totalmente a medida.</p>
                </div>
            </div>
        </div>
    </section>
</template>