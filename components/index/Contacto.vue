<script lang="ts" setup>
    import ContactForm from '../ContactForm.vue';
    const contactElement: string = "flex flex-col sm:flex-row gap-4 items-start sm:items-center text-lg sm:text-2xl text-white";
</script>

<template>
    <section id="contacto" class="relative w-full h-auto">
        <div class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 z-0 bg-[url('/pexels-field-engineer-147254-442150.jpg')]" />
        <article class="relative w-full flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-0 py-8 sm:py-0">
            <!-- Contact Information -->
            <div class="w-full sm:w-1/2 flex flex-col justify-center items-center gap-8 p-6 sm:p-12">
                <h2 class="text-2xl sm:text-4xl text-white text-center">Si necesitas algo, estamos a tu disposición</h2>
                <div :class="contactElement">
                    <Icon icon="solar:phone-linear" width="1.5em" sm:width="2em" height="1.5em" sm:height="2em" style="color: #7ccf00" />
                    <h3 class="font-semibold">Teléfono:</h3>
                    <div class="flex flex-col">
                        <a href="tel:946011772" target="_blank" class="hover:underline">946 011 772</a>
                        <a href="tel:688842407" target="_blank" class="hover:underline">688 842 407</a>
                    </div>
                </div>
                <div :class="contactElement">
                    <Icon icon="solar:phone-linear" width="1.5em" sm:width="2em" height="1.5em" sm:height="2em" style="color: #7ccf00" />
                    <h3 class="font-semibold">Email:</h3>
                    <a href="mailto:arratek@arratek.com" target="_blank" class="hover:underline">arratek@arratek.com</a>
                </div>
                <div :class="contactElement">
                    <Icon icon="stash:clock" width="1.5em" sm:width="2em" height="1.5em" sm:height="2em" style="color: #7ccf00" />
                    <h3 class="font-semibold">Horario:</h3>
                    <div>
                        <p>Lunes a Viernes</p>
                        <p>10:00-14:00 16:30-19:30</p>
                    </div>
                </div>
                <div :class="contactElement">
                    <Icon icon="material-symbols-light:map-outline" width="1.5em" sm:width="2em" height="1.5em" sm:height="2em" style="color: #7ccf00" />
                    <h3 class="font-semibold">Dirección:</h3>
                    <a href="https://maps.app.goo.gl/uk5XXbYUizgaAtEi7" target="_blank" class="hover:underline">
                        <p>Calle Elexalde, 2</p>
                        <p>48140 Igorre Bizkaia</p>
                    </a>
                </div>
            </div>

            <!-- Contact Form -->
            <div class="w-full sm:w-1/2 flex flex-col justify-center items-center gap-8 p-6 sm:p-12">
                <h2 class="text-2xl sm:text-4xl text-white text-center">Si tienes alguna sugerencia, no dudes en ponerte en contacto con nosotros</h2>
                <ContactForm />
            </div>
        </article>

        <!-- Map Section -->
        <article class="relative w-full h-64 sm:h-1/3 flex justify-center items-center my-5">
            <LeafletMap />
        </article>
    </section>
</template>

<style>
/* Add any additional styles here if needed */
</style>