<script setup lang="ts">
    import AsesoramientoInformatico from '../components/index/AsesoramientoInformatico.vue'
    import Mantenimiento from '../components/index/Mantenimiento.vue'
    import DesarrolloWeb from '../components/index/DesarrolloWeb.vue'
    import TelefoniaRedes from '../components/index/TelefoniaRedes.vue'
    import Contacto from '../components/index/Contacto.vue'
</script>

<template>
    <div class="w-full flex item-center flex-col">
        <section class="w-full h-screen flex gap-20">
            <div class="w-1/2 flex content-between pl-12">
                <article class="flex flex-col justify-between pl-42 pr-12 py-10 text-white">
                    <img src="/arratek-logo.png" alt="Arratek logo" class="h-60 w-60"> <!-- TODO: change logo to new one -->
                    <div class="flex flex-col gap-4">
                        <h3 class="text-6xl">servicios</h3>
                        <h3 class="text-7xl font-bold text-lime-500">INFORMÁTICOS</h3>
                        <hr class="w-1/4 border-3">
                        <h4 class="text-4xl font-medium">Ofrecemos <span><b>soluciones de desarrollo web</b></span> diseñadas para hacer <span><b>destacar tu negocio</b></span> en el competitivo mundo digital</h4>
                    </div>
                    <p>Nuestro catálogo de servicios informáticos abarca desde el <span><b>desarrollo y mantenimiento de páginas web</b></span> hasta la <span><b>implementación de soluciones de software personalizadas</b></span>, <span><b>el soporte técnico</b></span> y la instalación de <span><b>sistemas de telefonía empresarial.</b></span></p>
                    <p>web | software | mantenimiento | telefonía</p>
                </article>
            </div>
            <div class="w-1/2 bg-white flex items-center gap-20 pl-12 m-0">
                <article class="w-3/8 h-full flex flex-col justify-center">
                    <h6 class="text-2xl"><span>En ARRATEK somos tu partner de confianza</span></h6>
                    <hr class="w-5/8 border-1 my-4">
                    <h4 class="text-4xl font-medium">Ofrecemos un <span>servicio integral y de alta calidad</span> para cubrir todas tus necesidades tecnológicas</h4>
                </article>
                <article class="w-2/3 h-full flex flex-col justify-center text-white">
                    <div class="relative h-2/7 bg-white z-1">
                        <div class="h-1/3" />
                        <div class="h-2/3 inset-0 bg-lime-500 rounded-bl-4xl clip-diagonal" />
                    </div>
                    <div class="h-5/7 bg-lime-500 px-16 -m-2 rounded-tl-4xl z-2"> <!-- TODO: fix list-icon position -->
                        <ul class="list-image-[url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyZW0iIGhlaWdodD0iMmVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTkuMjkzIDcuMjkzYTEgMSAwIDAgMSAxLjQxNCAwTDE1LjQxNCAxMmwtNC43MDcgNC43MDdhMSAxIDAgMCAxLTEuNDE0LTEuNDE0TDEyLjU4NiAxMkw5LjI5MyA4LjcwN2ExIDEgMCAwIDEgMC0xLjQxNCIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+)] px-12 pt-4 -m-2 rounded-tl-4xl z-2">
                            <li class="text-xl align-middle leading-relaxed">Nos especializamos en crear <b>páginas web atractivas, funcionales y optimizadas para motores de búsqueda</b>, utilizando las últimas tecnologías como WordPress, HTML y CSS.</li>
                        </ul>
                        <ul class="list-image-[url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyZW0iIGhlaWdodD0iMmVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTkuMjkzIDcuMjkzYTEgMSAwIDAgMSAxLjQxNCAwTDE1LjQxNCAxMmwtNC43MDcgNC43MDdhMSAxIDAgMCAxLTEuNDE0LTEuNDE0TDEyLjU4NiAxMkw5LjI5MyA4LjcwN2ExIDEgMCAwIDEgMC0xLjQxNCIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+)] px-12 pt-4 -m-2 rounded-tl-4xl z-2">
                            <li class="text-xl align-middle leading-relaxed">Nuestro objetivo es proporcionarte una <b>presencia online robusta y profesional</b> que refleje la identidad de tu marca y atraiga a tu público objetivo.</li>
                        </ul>
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