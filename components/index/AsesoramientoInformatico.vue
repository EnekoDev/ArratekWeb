<script setup lang="ts">
    const listStyle = "flex items-start gap-4 text-xl leading-tight mt-6";
    const listTitle = "text-lime-500 font-bold uppercase";
    const listText = "text-stone-300 mt-2 ml-10 text-base";
</script>

<template>
    <section id="asesoramiento-informatico" class="w-full h-screen flex">
        <div class="h-full w-4/5 text-white">
            <div class="relative h-full w-full">
                <div class="absolute inset-0 h-full bg-cover bg-center bg-no-repeat bg-[url('/pexels-athena-2582936.jpg')] z-0 opacity-30"></div>
                <div class="relative h-full z-10">
                    <div class="h-full flex">
                        <div class="w-4/7 flex flex-col justify-center gap-8 px-12">
                            <div>
                                <div class="flex items-center gap-2">
                                    <h5 class="text-5xl">asesoramiento</h5>
                                    <img src="/icono-bocadillo.png" alt="icono bocadillo con exclamacion">
                                </div>
                                <h4 class="text-lime-500 text-6xl font-semibold pb-4 -mt-12">INFORMÁTICO</h4>
                                <h5 class="text-3xl font-medium pt-4">Que la <span>tecnología</span></h5>
                                <h5 class="text-3xl font-medium">no frene tu <span>negocio</span></h5>
                            </div>
                        </div>
                        <div class="w-3/7 flex flex-col justify-center px-12 gap-8">
                            <h4 class="text-xl font-bold text-lime-500">
                                SOMOS REFERENCIA EN EL ACOMPAÑAMIENTO Y DESARROLLO DE NUEV@S EMPRENDEDOR@S OFRECIENDO EL APOYO TECNOLÓGICO QUE NECESITAN
                            </h4>
                            <p class="text-lg">
                                Haber recorrido un camino similar, nos hace conocer muy de cerca los <span>retos</span> a los que te enfrentas y tener <span>experiencia</span> en cómo superarlos
                            </p>
                            <h4 class="text-2xl font-bold">¡NOS ENCANTA <span>ESCUCHAR</span> NUEVAS IDEAS DE <span>NEGOCIO</span>!</h4>
                            <NuxtLink to="/#contacto"><button class="px-14 py-4 bg-lime-500 text-2xl text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out cursor-pointer hover:bg-white hover:text-lime-500 hover:shadow-lg hover:border-lime-500 hover:animate-pulse">Contacto</button></NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-2/6 bg-neutral-900 py-12 px-10 z-10">
            <div class="flex flex-col">
                <div :class="listStyle">
                <Icon icon="mingcute:right-fill" width="1.2em" height="1.2em" style="color: #84cc16" />
                <h4 :class="listTitle">Normativa, Regulaciones e Innovaciones Tecnológicas</h4>
                </div>
                <p :class="listText">Informamos acerca de la normativa vigente y transición tecnológica.</p>

                <div :class="listStyle">
                <Icon icon="mingcute:right-fill" width="1.2em" height="1.2em" style="color: #84cc16" />
                <h4 :class="listTitle">Asistencia en la Solicitud de Subvenciones</h4>
                </div>
                <p :class="listText">Te ayudamos y apoyamos en la tramitación de todas las ayudas disponibles.</p>

                <div :class="listStyle">
                <Icon icon="mingcute:right-fill" width="1.2em" height="1.2em" style="color: #84cc16" />
                <h4 :class="listTitle">Compromiso con Soluciones Personalizadas</h4>
                </div>
                <p :class="listText">Nos implicamos y buscamos soluciones ad-hoc para cada cliente.</p>

                <div :class="listStyle">
                <Icon icon="mingcute:right-fill" width="1.2em" height="1.2em" style="color: #84cc16" />
                <h4 :class="listTitle">Alianzas con Partners Estratégicos</h4>
                </div>
                <p :class="listText">Contamos con socios y colaboradores de servicios adyacentes para completar los servicios que ofrecemos.</p>
            </div>
        </div>
    </section>
</template>