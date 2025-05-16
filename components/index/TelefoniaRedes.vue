<script setup lang="ts">

</script>

<template>
    <section id="telefonia-redes" class="w-full h-auto sm:h-screen flex flex-col sm:flex-row">
        <div class="relative w-full sm:w-1/2 h-auto sm:h-full py-8 pr-8 sm:pr-0 sm:py-4">
            <div class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 z-0 bg-[url('/pexels-vlad-1445510816-31862953.jpg')]" />
            <div class="h-1/3" />
            <div class="relative z-10 h-auto sm:h-2/3 w-full sm:w-5/6 bg-white rounded-r-4xl px-6 sm:pl-24 sm:pr-18 py-12 sm:py-24 opacity-90">
                <div class="flex flex-col justify-center gap-4 -mt-12">
                    <NuxtImg src="/icono-telefonia.png" alt="icono movil con redes" class="w-24 h-24 sm:w-32 sm:h-32 -m-4" />
                    <h2 class="text-lime-500 text-4xl sm:text-6xl font-bold">TELEFONÍA</h2>
                    <div class="flex items-end text-lime-500 text-4xl sm:text-6xl font-bold">
                        <h3>&</h3>
                        <h2>REDES</h2>
                    </div>
                    <h4 class="text-2xl sm:text-4xl font-medium text-center sm:text-left">
                        En <b>ARRATEK INFORMÁTICA</b> también ofrecemos soluciones de telefonía y redes para empresas
                    </h4>
                    <p class="text-lg sm:text-3xl font-light text-center sm:text-left">
                        Trabajamos con diversos proveedores para ofrecerte las mejores opciones en centralitas y redes WiFi.
                    </p>
                </div>
            </div>
        </div>

        <div class="w-full sm:w-1/2 h-auto sm:h-full flex flex-col sm:gap-4 pl-12 sm:pl-12 sm:pt-12">
            <div class="w-full h-auto sm:h-1/6 px-4 sm:pl-8 py-4 sm:py-8">
                <hr class="w-full border-3 mb-4">
                <h2 class="text-4xl sm:text-6xl text-lime-500 font-bold">SUMINISTRO</h2>
                <div class="flex gap-2 sm:gap-4">
                    <h3 class="text-2xl sm:text-3xl text-white">de</h3>
                    <h2 class="text-4xl sm:text-6xl text-white font-bold">MATERIAL</h2>
                </div>
            </div>
            <div class="h-auto sm:h-full flex flex-col sm:flex-row gap-8 pt-4 sm:pt-12">
                <div class="w-full sm:w-1/2 flex flex-col items-center">
                    <NuxtImg src="/icono-discoduro.png" alt="icono disco duro" class="w-20 sm:w-auto" />
                    <h3 class="text-2xl sm:text-4xl text-white font-medium text-center sm:text-left">
                        Proveemos de una amplia gama de equipos y consumibles para tu oficina
                    </h3>
                </div>
                <div class="w-full sm:w-1/2 h-auto sm:h-full">
                    <div class="h-2/6">
                        <div class="h-1/2" />
                        <div class="h-1/2 bg-white rounded-bl-4xl clip-diagonal" />
                    </div>
                    <div class="h-auto sm:h-4/6 bg-white flex flex-col justify-center items-center rounded-l-4xl -mt-2 mb-4 px-4 sm:px-0">
                        <ul class="text-base sm:text-xl font-semibold list-disc leading-8 sm:leading-10">
                            <li>Equipos de oficina</li>
                            <li>TPVs</li>
                            <li>Servidores</li>
                            <li class="leading-6">
                                <p>Consumibles</p>
                                <p class="italic">(tinta, periféricos, papel…)</p>
                            </li>
                            <li>Pantallas</li>
                            <li>Teclados</li>
                            <li>Portátiles</li>
                            <li>Impresoras y tinta</li>
                            <li>Móviles / Tablets</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>