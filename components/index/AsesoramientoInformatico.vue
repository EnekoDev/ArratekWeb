<script setup lang="ts">
    const listStyle:string = "text-xl mr-10 leading-relaxed"
    const listTitle:string = "text-lime-500 font-semibold"
    const listText:string = "text-stone-300 mt-2"
</script>

<template>
    <section id="asesoramiento-informatico" class="w-full h-screen flex gap-20">
        <div class="w-4/5 bg-white">
            <div class="h-3/6 bg-white" /> <!-- TODO: this div will have a background img -->
            <div class="h-2/6 flex">
                <div class="w-5/7 flex flex-col justify-center gap-8 px-12 -mt-18">
                    <div>
                        <div class="flex items-center gap-4">
                            <h5 class="text-5xl">asesoramiento</h5>
                            <img src="#" alt="icono bocadillo con exclamacion">
                        </div>
                        <h4 class="text-lime-500 text-6xl font-semibold pb-4">INFORMÁTICO</h4>
                        <h5 class="text-3xl font-medium pt-4">Que la <span>tecnología</span> no frene tu <span>negocio</span></h5>
                    </div>
                </div>
                <div class="w-2/7 flex flex-col px-12 -mt-18 gap-8">
                    <h4 class="text-xl font-semibold text-lime-500">SOMOS REFERENCIA EN EL ACOMPAÑAMIENTO Y DESARROLLO DE NUEV@S EMPRENDEDOR@S OFRECIENDO EL APOYO TECNOLÓGICO QUE NECESITAN</h4>
                    <p class="text-lg">Haber recorrido un camino similar, nos hace conocer muy de cerca los <span>retos</span> a los que te enfrentas y tener <span>experiencia</span> en cómo superarlos</p>
                    <h4 class="text-2xl font-bold">¡NOS ENCANTA <span>ESCUCHAR</span> NUEVAS IDEAS DE <span>NEGOCIO</span>!</h4>
                </div>
            </div>
        </div>
        <div class="w-2/6">
            <ul class="list-image-[url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzZW0iIGhlaWdodD0iM2VtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiM3Q0NGMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTkuMTE2IDcuMTE2YTEuMjUgMS4yNSAwIDAgMSAxLjc2OCAwTDE1Ljc2OCAxMmwtNC44ODQgNC44ODRhMS4yNSAxLjI1IDAgMCAxLTEuNzY4LTEuNzY4TDEyLjIzMiAxMkw5LjExNiA4Ljg4NGExLjI1IDEuMjUgMCAwIDEgMC0xLjc2OCIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+)] px-16 pt-12 -m-2 rounded-tl-4xl z-2">
                <li :class="listStyle">
                    <h4 :class="listTitle">NORMATIVA, REGULACIONES E INNOVACIONES TECNOLÓGICAS</h4>
                </li>
                <p :class="listText">Informamos acerca de la normativa vigente y transición tecnológica.</p>
                <li :class="listStyle">
                    <h4 :class="listTitle">ASISTENCIA EN LA SOLICITUD DE SUBVENCIONES</h4>
                </li>
                <p :class="listText">Te ayudamos y apoyamos en la tramitación de todas las ayudas disponibles.</p>
                <li :class="listStyle">
                    <h4 :class="listTitle">COMPROMISO CON SOLUCIONES PERSONALIZADAS</h4>
                </li>
                <p :class="listText">Nos implicamos y buscamos soluciones ad-hoc para cada cliente.</p>
                <li :class="listStyle">
                    <h4 :class="listTitle">ALIANZAS CON PARTNERS ESTRATÉGICOS</h4>
                </li>
                <p :class="listText">Contamos con socios y colaboradores de servicios adyacentes para completar los servicios que ofrecemos.</p>
            </ul>
        </div>
    </section>
</template>