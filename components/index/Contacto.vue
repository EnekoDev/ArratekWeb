<script lang="ts" setup>
	import ContactForm from '../ContactForm.vue';

	const contactElement:string = "flex gap-4 items-center text-2xl text-white"
</script>

<template>
	<section id="contacto" class="w-full h-screen">
		<article class="w-full h-full flex justify-center items-center gap-12">
			<div class="w-1/2 flex flex-col justify-center items-center gap-12 p-12">
				<h2 class="text-4xl text-white text-center">Si necesita algo, estamos a su disposición</h2>
				<div :class="contactElement">
					<Icon icon="solar:phone-linear" width="2em" height="2em"  style="color: #7ccf00" />
					<h3>Teléfono:</h3>
					<div class="flex flex-col">
						<a href="tel:946011772" target="_blank">946 011 772</a>
						<a href="tel:688842407" target="_blank">688 842 407</a>
					</div>
				</div>
				<div :class="contactElement">
					<Icon icon="solar:phone-linear" width="2em" height="2em"  style="color: #7ccf00" />
					<h3>Email:</h3>
					<a href="mailto:arratek@arratek.com" target="_blank">arratek@arratek.com</a>
				</div>
				<div :class="contactElement">
					<Icon icon="stash:clock" width="2em" height="2em"  style="color: #7ccf00" />					<h3>Horario:</h3>
					<div>
						<p >Lunes a Viernes</p>
						<p>10:00-14:00 16:30-19:30</p>
					</div>
				</div>
				<div :class="contactElement">
					<Icon icon="material-symbols-light:map-outline" width="2em" height="2em"  style="color: #7ccf00" />
					<h3>Dirección:</h3>
					<a href="https://maps.app.goo.gl/uk5XXbYUizgaAtEi7" target="_blank">
						<p>Calle Elexalde, 2</p>
						<p>48140 Igorre Bizkaia</p>
					</a>
				</div>
			</div>
			<div class="w-1/2 h-full flex flex-col justify-center items-center gap-12 p-12">
				<h2 class="text-4xl text-white text-center">Si tiene alguna sugerencia, no dude en ponerse en contacto con nosotros</h2>
				<ContactForm />
			</div>
		</article>
		<article>
			<!-- TODO: Google Maps widget with the location of the store -->
		</article>
	</section>
</template>

<style>

</style>