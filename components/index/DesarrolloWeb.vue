<script setup lang="ts">
    const listTitle: string = "text-lime-500 text-lg sm:text-xl font-medium";
    const cardDiv: string = "w-full flex flex-col sm:flex-row gap-8";
    const cardContent: string = "w-full sm:w-1/2 flex flex-col gap-4";
    const cardTitle: string = "flex text-2xl sm:text-3xl text-lime-500 font-bold";
    const listText: string = "text-base sm:text-xl text-white";
    const cardHeaderText: string = "text-base sm:text-lg font-semibold";
    const cardImg: string = "w-full sm:w-1/2 h-48 sm:h-64 border-2 rounded-4xl flex justify-center items-center overflow-hidden";
    const cardImgItem: string = "w-full h-full object-cover rounded-4xl";
</script>

<template>
    <section id="desarrollo-web" class="w-full h-auto flex flex-col sm:flex-row">
        <!-- Left Section -->
        <div class="w-full sm:w-1/2 h-auto relative">
            <div class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 z-0 bg-[url('/pexels-luis-gomes-166706-546819.jpg')]" />
            <div class="relative z-10 w-full h-full flex flex-col items-center justify-center px-6 sm:pr-32">
                <div class="w-full flex flex-col items-center sm:items-end justify-center">
                    <hr class="w-full border-2 my-4">
                    <div class="flex flex-col items-center sm:items-end">
                        <h3 class="text-4xl sm:text-5xl text-lime-500 font-semibold">desarrollo</h3>
                        <h4 class="text-xl sm:text-2xl text-white">de <span class="text-3xl sm:text-4xl" style="color: white;">páginas</span></h4>
                        <h2 class="text-6xl sm:text-8xl text-lime-500 font-bold">WEB</h2>
                        <NuxtImg src="/icono-desarrolloweb.png" alt="pantalla con varios iconos y engranajes" class="text-white" />
                    </div>
                </div>
                <div class="w-full flex flex-col justify-center items-center sm:pl-10">
                    <h5 class="text-white text-base sm:text-lg font-semibold text-center sm:text-left">NUESTROS SERVICIOS DE DESARROLLO INCLUYEN:</h5>
                    <ul class="list-image-[url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyZW0iIGhlaWdodD0iMmVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiM3Y2NmMDAiIGQ9Ik0xNy42OSA3Ljc3NmExIDEgMCAwIDEgLjAzNCAxLjQxNGwtNy4zOSA3Ljc2bC00LjA1OC00LjI2YTEgMSAwIDAgMSAxLjQ0OC0xLjM4bDIuNjEgMi43NGw1Ljk0Mi02LjI0YTEgMSAwIDAgMSAxLjQxNC0uMDM0Ii8+PC9zdmc+)] px-8 sm:px-16 pt-8 sm:pt-12 -m-2 rounded-tl-4xl z-2">
                        <li>
                            <h6 :class="listTitle">Desarrollo web:</h6>
                            <p :class="listText">Páginas web, Tiendas online</p>
                        </li>
                        <li>
                            <h6 :class="listTitle">Desarrollos a medida:</h6>
                            <p :class="listText">Aplicaciones, Plugins, Software a medida</p>
                        </li>
                        <li>
                            <h6 :class="listTitle">Marketing digital:</h6>
                            <p :class="listText">Campañas de Google Ads, SEO, SEM, Posicionamiento</p>
                        </li>
                        <li>
                            <h6 :class="listTitle">Mantenimiento web:</h6>
                            <p :class="listText">Hosting, dominios, correo electrónico, migraciones web...</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Right Section -->
        <div class="w-full sm:w-1/2 bg-white flex flex-col justify-around gap-8 px-6 sm:px-18 py-8 sm:py-12">
            <article class="h-auto">
                <div :class="cardDiv">
                    <div :class="cardContent">
                        <div :class="cardTitle">
                            <Icon icon="stash:chevron-right-solid" width="24" height="24" style="color: #7CCF00" />
                            <h4>WEB NEGOCIO</h4>
                        </div>
                        <h5 :class="cardHeaderText">HAZ QUE TU EMPRESA TENGA PRESENCIA ONLINE CON UNA WEB PROFESIONAL Y A MEDIDA</h5>
                        <p>Diseñamos sitios corporativos que reflejan la identidad de tu negocio, con información clara sobre tus servicios, formularios de contacto y funcionalidades personalizadas. La mejor carta de presentación para captar clientes y generar confianza.</p>
                    </div>
                    <div :class="cardImg">
                        <NuxtImg src="/pexels-monoar-rahman-22660-109371.jpg" alt="imagen web negocio" :class="cardImgItem" />
                    </div>
                </div>
            </article>
            <article class="h-auto">
                <div :class="cardDiv">
                    <div :class="cardImg">
                        <NuxtImg src="/pexels-djordje-petrovic-590080-2102416.jpg" alt="imagen desarrollo a medida" :class="cardImgItem" />
                    </div>
                    <div :class="cardContent">
                        <div :class="cardTitle">
                            <Icon icon="stash:chevron-right-solid" width="24" height="24" style="color: #7CCF00" />
                            <h4>DESARROLLO A MEDIDA</h4>
                        </div>
                        <h5 :class="cardHeaderText">¿TU EMPRESA NECESITA ALGO MÁS QUE UNA WEB ESTÁNDAR?</h5>
                        <p>Creamos soluciones personalizadas adaptadas a las necesidades de tu negocio. Desde aplicaciones web hasta sistemas de gestión internos, desarrollamos software a medida para optimizar tu operativa diaria. Tú nos cuentas tu idea, nosotros la hacemos.</p>
                    </div>
                </div>
            </article>
            <article class="h-auto">
                <div :class="cardDiv">
                    <div :class="cardContent">
                        <div :class="cardTitle">
                            <Icon icon="stash:chevron-right-solid" width="24" height="24" style="color: #7CCF00" />
                            <h4>E-COMMERCE</h4>
                        </div>
                        <h5 :class="cardHeaderText">CONVIERTE TU NEGOCIO EN UNA TIENDA ABIERTA 24/7</h5>
                        <p>Con una tienda online, puedes vender tus productos o servicios en cualquier momento y desde cualquier lugar, ampliando tu alcance y aumentando tus oportunidades de venta.</p>
                        <p>Diseñamos e-commerce intuitivos, seguros y adaptados a cualquier dispositivo, con opciones de pago y gestión de stock para que tu negocio crezca sin límites.</p>
                    </div>
                    <div :class="cardImg">
                        <NuxtImg src="/pexels-asphotograpy-230544.jpg" alt="imagen e-commerce" :class="cardImgItem" />
                    </div>
                </div>
            </article>
        </div>
    </section>
</template>