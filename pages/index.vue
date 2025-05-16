<script setup lang="ts">
    import AsesoramientoInformatico from '../components/index/AsesoramientoInformatico.vue'
    import Mantenimiento from '../components/index/Mantenimiento.vue'
    import DesarrolloWeb from '../components/index/DesarrolloWeb.vue'
    import TelefoniaRedes from '../components/index/TelefoniaRedes.vue'
    import Contacto from '../components/index/Contacto.vue'

    const listCard:string = "flex gap-2 flex-col sm:flex-row"
    const listText:string = "text-lg sm:text-xl align-middle leading-relaxed"
</script>

<template>
    <div class="w-full flex items-center flex-col">
        <section class="w-full h-auto xl:h-screen flex flex-col xl:flex-row">
            <div class="w-full xl:w-1/2 flex content-between pl-4 sm:pl-12 bg-cover bg-center bg-no-repeat bg-[url('/pexels-athena-2582932.jpg')]">
                <article class="flex flex-col justify-between items-center py-8 px-4 text-white bg-gradient-to-t from-black/80 to-transparent">
                    <NuxtImg src="/arratek-logo.png" alt="Arratek logo" class="h-40 w-40 sm:h-60 sm:w-60" />
                    <div class="flex flex-col gap-4 text-center sm:text-left">
                        <div>
                            <h3 class="text-3xl sm:text-5xl">Somos tu</h3>
                            <h3 class="text-3xl sm:text-5xl">departamento</h3>
                            <h3 class="text-4xl sm:text-6xl font-bold text-lime-500">TECNOLÓGICO</h3>
                        </div>
                        <hr class="w-1/2 sm:w-1/4 border-3 mx-auto sm:mx-0">
                        <h4 class="text-2xl sm:text-4xl font-semibold">Es <span>normal</span> no seguirle el ritmo a un mundo cada vez más <span>tecnológico</span></h4>
                        <h4 class="text-xl sm:text-3xl">Te <span>acompañamos</span> en el proceso de adaptar tu <span>negocio</span> a las <span>necesidades</span> actuales</h4>
                        <h4 class="text-2xl sm:text-4xl font-semibold text-center pt-4">¿Nos sentamos a <span>hablar</span>?</h4>
                    </div>
                    <NuxtImg src="/arratekinformatica-logo.png" alt="Arratek logo" class="h-40 w-60 sm:h-60 sm:w-100" />
                    <p class="text-lg sm:text-xl text-center">páginas web | servicio técnico | subvenciones | software | telefonía</p>
                </article>
            </div>
            <div class="w-full xl:w-1/2 bg-white flex flex-col xl:flex-row items-center gap-8 sm:gap-12 px-4 sm:pl-12 m-0">
                <article class="w-full xl:w-1/3 h-full flex flex-col justify-center text-center xl:text-left">
                    <h6 class="text-xl sm:text-2xl"><span>En ARRATEK somos tu <i>partner</i> de confianza</span></h6>
                    <hr class="w-1/2 sm:w-5/8 border-1 my-4 mx-auto xl:mx-0">
                    <h4 class="text-2xl sm:text-4xl font-medium">Ofrecemos un <b>servicio integral <span>y de alta calidad</span></b> para cubrir todas tus necesidades tecnológicas</h4>
                </article>
                <article class="w-full xl:w-2/3 h-full flex flex-col justify-center text-white">
                    <div class="relative h-16 sm:h-2/7 bg-white z-1 -mb-2 mt-2">
                        <div class="h-1/3" />
                        <div class="h-2/3 inset-0 bg-lime-500 rounded-bl-4xl clip-diagonal" />
                    </div>
                    <div class="h-auto sm:h-5/7 bg-lime-500 px-8 sm:px-16 rounded-tl-4xl z-2">
                        <div class="px-4 sm:px-12 pt-8 -m-2 rounded-tl-4xl z-2">
                            <div :class="listCard">
                                <Icon icon="mingcute:right-fill" width="2rem" sm:width="10rem" height="1.5em" sm:height="2em" style="color: #fff" />
                                <h5 :class="listText">Nuestro catálogo de servicios abarca desde el <b>desarrollo y mantenimiento de páginas web</b> hasta la <b>implementación de soluciones tecnológicas</b> adaptadas a tu empresa.</h5>
                            </div>
                            <div :class="listCard">
                                <Icon icon="mingcute:right-fill" width="2rem" sm:width="10rem" height="1.5em" sm:height="2em" style="color: #fff" />
                                <h5 :class="listText">Buscamos <b>soluciones personalizadas</b>, en los ámbitos de <b>páginas web</b>, implementación de <b>soluciones software</b>, <b>soporte técnico</b> de sistemas y redes, y ofertas en el ámbito de la <b>telefonía empresarial</b>.</h5>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>

        <AsesoramientoInformatico lazy />

        <Mantenimiento lazy />

        <DesarrolloWeb lazy />

        <TelefoniaRedes lazy />

        <Contacto lazy />
    </div>
</template>

<style>
    .clip-diagonal {
        clip-path: polygon(0% 100%, 100% 0%, 100% 100%);
        margin-bottom: -200px;
    }
</style>