
<script setup lang="ts">

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
                            <h5 class="text-3xl font-medium pt-4"><span>Ayudamos</span> a tu negocio impulsando tu <span>futuro digital</span></h5>
                        </div>
                    </div>
                    <div class="w-2/7 flex flex-col px-12 -mt-18 gap-8">
                        <h4 class="text-3xl font-semibold text-pink-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                        <p class="text-xl text-pink-500">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                </div>
            </div>
            <div class="w-2/6">
                <ul class="list-image-[url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzZW0iIGhlaWdodD0iM2VtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiM3Q0NGMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTkuMTE2IDcuMTE2YTEuMjUgMS4yNSAwIDAgMSAxLjc2OCAwTDE1Ljc2OCAxMmwtNC44ODQgNC44ODRhMS4yNSAxLjI1IDAgMCAxLTEuNzY4LTEuNzY4TDEyLjIzMiAxMkw5LjExNiA4Ljg4NGExLjI1IDEuMjUgMCAwIDEgMC0xLjc2OCIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+)] px-16 pt-12 -m-2 rounded-tl-4xl z-2">
                    <li class="text-xl mr-10 leading-relaxed">
                        <h4 class="text-lime-500 font-semibold">NORMATIVA, REGULACIONES E INNOVACIONES TECNOLÓGICAS</h4>
                    </li>
                    <p class="text-stone-300 mt-2">Informamos acerca de la normativa vigente y transición tecnológica.</p>
                    <li class="text-xl mr-10 leading-relaxed">
                        <h4 class="text-lime-500 font-semibold">ASISTENCIA EN LA SOLICITUD DE SUBVENCIONES</h4>
                    </li>
                    <p class="text-stone-300 mt-2">Te ayudamos y apoyamos en la tramitación de todas las ayudas disponibles.</p>
                    <li class="text-xl mr-10 leading-relaxed">
                        <h4 class="text-lime-500 font-semibold">COMPROMISO CON SOLUCIONES PERSONALIZADAS</h4>
                    </li>
                    <p class="text-stone-300 mt-2">Nos implicamos y buscamos soluciones ad-hoc para cada cliente.</p>
                    <li class="text-xl mr-10 leading-relaxed">
                        <h4 class="text-lime-500 font-semibold">ALIANZAS CON PARTNERS ESTRATÉGICOS</h4>
                    </li>
                    <p class="text-stone-300 mt-2">Contamos con socios y colaboradores de servicios adyacentes para completar los servicios que ofrecemos.</p>
                </ul>
            </div>
        </section>

        <section id="mantenimiento-web" class="w-full h-screen flex gap-20">
            <div class="h-full w-2/6 bg-white flex flex-col justify-center gap-8 px-18">
                <div>
                    <img src="#" alt="icono de pantalla web con iconos">
                    <h5 class="text-4xl font-light">mantenimiento</h5>
                    <h2 class="text-8xl font-bold text-lime-500">WEB</h2>
                </div>
                <h6 class="text-2xl font-medium">Nuestro servicio de mantenimiento web incluye mucho más que el simple alojamiento</h6>
                <p>Nos encargamos de realizar <span>copias de seguridad periódicas</span>, <span>actualizar y gestionar los contenidos</span>, <span>y proporcionar soporte técnico</span> para asegurar que tu sitio web funcione siempre de manera óptima.</p>
                <p class="text-lg">Sabemos que el <b>mantenimiento continuo</b> es crucial para prevenir problemas y mantener la seguridad y eficiencia de tu sitio.</p>
            </div>
            <div class="h-full w-4/6 flex flex-col justify-center gap-8 px-18 pl-50"> <!-- TODO: background img -->
                <hr class="w-1/6 border-3">
                <h3 class="text-5xl text-lime-500 font-semibold">planes a medida de mantenimiento <span class="text-6xl font-bold">WEB</span></h3>
                <h6 class="text-xl text-white text-center"><b>Diseñamos planes de mantenimiento informático a medida para cada cliente</b>, cubriendo todas las necesidades tecnológicas de tu empresa. Nuestros servicios incluyen copias de seguridad, prevención de riesgos informáticos y monitorización continua.</h6>
                <div class="text-white flex gap-4">
                    <!-- TODO: add banners with features and prices -->
                    <img src="#" alt="banner 1 con planes de mantenimiento con sus caracteristicas y precios">
                    <img src="#" alt="banner 2 con planes de mantenimiento con sus caracteristicas y precios">
                    <img src="#" alt="banner 3 con planes de mantenimiento con sus caracteristicas y precios">
                </div>
                <p class="text-white text-center">Ofrecemos diversas opciones de planes que se adaptan a diferentes presupuestos y requisitos, consultenos</p>
            </div>
        </section>

        <section id="desarrollo-web" class="w-full h-screen flex">
            <div class="h-full w-1/2 flex">
                <div class="h-full w-1/2 flex flex-col justify-center items-end pl-12 pr-20">
                    <hr class="w-full border-2 my-4">
                    <h3 class="text-5xl text-lime-500 font-semibold">desarrollo</h3>
                    <h4 class="text-2xl text-white">de <span class="text-4xl" style="color: white;">páginas</span></h4>
                    <h2 class="text-8xl text-lime-500 font-bold">WEB</h2>
                    <img src="#" alt="pantalla con varios iconos y engranajes" class="text-white">
                </div>
                <div class="h-full w-1/2 flex flex-col">
                    <div class="h-2/7 opacity-100">
                        <div class="h-1/3" />
                        <div class="h-2/3 inset-0 rounded-bl-4xl bg-white clip-diagonal" />
                    </div>
                    <div class="h-3/7 bg-white p-16">
                        <h5 class="text-xl font-bold">NUESTROS SERVICIOS DE DESARROLLO INCLUYEN:</h5>
                        <ul class="list-image-[url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyZW0iIGhlaWdodD0iMmVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiM3Y2NmMDAiIGQ9Ik0xNy42OSA3Ljc3NmExIDEgMCAwIDEgLjAzNCAxLjQxNGwtNy4zOSA3Ljc2bC00LjA1OC00LjI2YTEgMSAwIDAgMSAxLjQ0OC0xLjM4bDIuNjEgMi43NGw1Ljk0Mi02LjI0YTEgMSAwIDAgMSAxLjQxNC0uMDM0Ii8+PC9zdmc+)] px-16 pt-12 -m-2 rounded-tl-4xl z-2">
                            <li>
                                <h6 class="text-lime-500 text-lg font-medium">Desarrollo web:</h6>
                                <p>One-page, eCommerce</p>
                            </li>
                            <li>
                                <h6 class="text-lime-500 text-lg font-medium">Desarrollos a medida:</h6>
                                <p>Software personalizado</p>
                            </li>
                            <li>
                                <h6 class="text-lime-500 text-lg font-medium">Marketing digital:</h6>
                                <p>Campañas de Google Ads, SEO, SEM, Posicionamiento</p>
                            </li>
                            <li>
                                <h6 class="text-lime-500 text-lg font-medium">Mantenimiento web:</h6>
                                <p>Hosting, dominios</p>
                            </li>
                        </ul>
                    </div>
                    <div class="h-2/7 opacity-100">
                        <div class="h-2/3 inset-0 rounded-bl-4xl bg-white clip-diagonal rotate-180 scale-x-[-1]" />
                        <div class="h-1/3" />
                    </div>
                </div>
            </div>
            <div class="h-full w-1/2 bg-white">
                <article>
                    <div>
                        <div>
                            <div>
                                <Icon icon="stash:chevron-right-solid" width="24" height="24"  style="color: #7CCF00" />
                                <h4>ONE-PAGE</h4>
                            </div>
                            <h5>HAZ DESTACAR TU IDEA CON UN DISEÑO SENCILLO Y ÚNICO</h5>
                            <p>Ideales para promocionar un producto o servicio concreto. Este tipo de webs se caracterizan por un diseño sin pestañas ni pantallas de carga, que hacen su navegación muy fluida e intuitiva.</p>
                        </div>
                        <div>
                            <img src="#" alt="imagen referencia one-page">
                        </div>
                    </div>
                </article>
                <article>
                    <div>
                        <div>
                            <div>
                                <img src="#" alt="imagen referencia one-page">
                            </div>
                            <div>
                                <Icon icon="stash:chevron-right-solid" width="24" height="24"  style="color: #7CCF00" />
                                <h4>CORPORATE</h4>
                            </div>
                            <h5>HAZTE UN HUECO EN INTERNET Y PROMOCIONA TU EMPRESA, TUS SERVICIOS O TUS PRODUCTOS</h5>
                            <p>Hazte un hueco en Internet y promociona tu empresa, tus servicios o tus productos. Este tipo de web es más amplio y robusto, con una estructura tradicional basada en un menú y distintas páginas. Ideal para empresas que necesitan un sitio completo y detallado para comunicar su oferta al mercado.</p>
                        </div>
                    </div>
                </article>
                <article>
                    <div>
                        <div>
                            <div>
                                <Icon icon="stash:chevron-right-solid" width="24" height="24"  style="color: #7CCF00" />
                                <h4>E-COMMERCE</h4>
                            </div>
                            <h5>EL FUTURO DE LOS NEGOCIOS ESTÁ EN INTERNET</h5>
                            <p>Pon tus productos online y vende 24 horas al día, 7 días a la semana de forma continua. Abre nuevas vías de venta, totalmente compatibles con las tradicionales, y llega a clientes que de otra manera no sería posible.</p>
                        </div>
                        <div>
                            <img src="#" alt="imagen referencia one-page">
                        </div>
                    </div>
                </article>
            </div>
        </section>

        <section id="telefonia-redes" class="w-full h-screen flex gap-20">

        </section>
    </div>
</template>

<style>
    .clip-diagonal {
        clip-path: polygon(0% 100%, 100% 0%, 100% 100%);
        margin-bottom: -200px;
    }
</style>