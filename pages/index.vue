<script setup lang="ts">
    import AsesoramientoInformatico from '../components/index/AsesoramientoInformatico.vue'
    import Mantenimiento from '../components/index/Mantenimiento.vue'
    import DesarrolloWeb from '../components/index/DesarrolloWeb.vue'
    import TelefoniaRedes from '../components/index/TelefoniaRedes.vue'
    import Contacto from '../components/index/Contacto.vue'

    const listCard:string = "flex gap-2"
    const listText:string = "text-xl align-middle leading-relaxed"
</script>

<template>
    <div class="w-full flex item-center flex-col">
        <section class="w-full h-screen flex">
            <div class="w-1/2 flex content-between pl-12 bg-cover bg-center bg-no-repeat bg-[url('/pexels-athena-2582932.jpg')]">
                <article class="flex flex-col justify-between items-center py-8 pl-32 pr-18 text-white bg-gradient-to-t from-black/80 to-transparent">
                    <img src="/arratek-logo.png" alt="Arratek logo" class="h-60 w-60">
                    <div class="flex flex-col gap-4">
                        <div>
                            <h3 class="text-5xl">Somos tu</h3>
                            <h3 class="text-5xl">departamento</h3>
                            <h3 class="text-6xl font-bold text-lime-500">TECNOLÓGICO</h3>
                        </div>
                        <hr class="w-1/4 border-3">
                        <h4 class="text-4xl font-semibold">Es <span>normal</span> no seguirle el ritmo a un mundo cada vez más <span>tecnológico</span></h4>
                        <h4 class="text-3xl">Te <span>acompañamos</span> en el proceso de adaptar tu <span>negocio</span> a las <span>necesidades</span> actuales</h4>
                        <h4 class="text-4xl font-semibold text-center pt-4">¿Nos sentamos a <span>hablar</span>?</h4>
                    </div>
                    <img src="/arratekinformatica-logo.png" alt="Arratek logo" class="h-60 w-100">
                    <p class="text-xl text-center">páginas web | servicio técnico | subvenciones | software | telefonía</p>
                </article>
            </div>
            <div class="w-1/2 bg-white flex items-center gap-20 pl-12 m-0">
                <article class="w-3/8 h-full flex flex-col justify-center">
                    <h6 class="text-2xl"><span>En ARRATEK somos tu <i>partner</i> de confianza</span></h6>
                    <hr class="w-5/8 border-1 my-4">
                    <h4 class="text-4xl font-medium">Ofrecemos un <b>servicio integral <span>y de alta calidad</span></b> para cubrir todas tus necesidades tecnológicas</h4>
                </article>
                <article class="w-2/3 h-full flex flex-col justify-center text-white">
                    <div class="relative h-2/7 bg-white z-1">
                        <div class="h-1/3" />
                        <div class="h-2/3 inset-0 bg-lime-500 rounded-bl-4xl clip-diagonal" />
                    </div>
                    <div class="h-5/7 bg-lime-500 px-16 -m-2 rounded-tl-4xl z-2">
                        <div class="px-12 pt-8 -m-2 rounded-tl-4xl z-2">
                            <div :class="listCard">
                                <Icon icon="mingcute:right-fill" width="10rem" height="2em" style="color: #fff" />
                                <h5 :class="listText">Nuestro catálogo de servicios abarca desde el <b>desarrollo y mantenimiento de páginas web</b> hasta la <b>implementación de soluciones tecnológicas</b> adaptadas a tu empresa.</h5>
                            </div>
                            <div :class="listCard">
                                <Icon icon="mingcute:right-fill" width="10rem" height="2em" style="color: #fff" />
                                <h5 :class="listText">Buscamos <b>soluciones personalizadas</b>, en los ámbitos de <b>páginas web</b>, implementación de <b>soluciones software</b>, <b>soporte técnico</b> de sistemas y redes, y ofertas en el ámbito de la <b>telefonía empresarial</b>.</h5>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>

        <AsesoramientoInformatico />

        <Mantenimiento />

        <DesarrolloWeb />

        <TelefoniaRedes />

        <Contacto />
    </div>
</template>

<style>
    .clip-diagonal {
        clip-path: polygon(0% 100%, 100% 0%, 100% 100%);
        margin-bottom: -200px;
    }
</style>