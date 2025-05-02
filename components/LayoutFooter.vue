<script lang="ts" setup>
	const navBtn:string = "text-lg text-stone-50 transition hover:text-lime-400 cursor-pointer hover:animate-pulse";
</script>

<template>
	<footer class="w-full flex flex-wrap justify-between items-center py-5 px-8 bg-zinc-400 shadow-md gap-4 md:flex-nowrap">
		<div>
			<h6 class="text-xl font-bold text-stone-50">© {{ new Date().getFullYear() }} Arratek. Todos los derechos reservados.</h6>
		</div>

		<nav>
			<ul class="flex gap-4">
			<li><NuxtLink to="/"><button :class="navBtn">Información legal</button></NuxtLink></li>
			<li><NuxtLink to="/"><button :class="navBtn">Política de Privacidad</button></NuxtLink></li>
			<li><NuxtLink to="/"><button :class="navBtn">Política de Cookies</button></NuxtLink></li>
			</ul>
		</nav>

		<nav>
			<ul class="flex gap-4">
				<li><NuxtLink to="https://www.instagram.com/arratekinformatika/"><button :class="navBtn"><Icon name="mdi:instagram" /></button></NuxtLink></li>
			</ul>
		</nav>
	</footer>
</template>

<style>

</style>