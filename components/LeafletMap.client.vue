<script lang="ts" setup>
	import L from 'leaflet'
	import { onMounted } from 'vue'

	onMounted(() => {
		console.log(L)
	})
</script>

<template>
	<LMap
		style="height: 50vh; width: 60vw"
		:zoom="18"
		:center="[43.164118862229095, -2.7781245314141976]"
		:use-global-leaflet="true"
	>
		<LTileLayer
		url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
		attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
		layer-type="base"
		name="OpenStreetMap"
		/>
		<LMarker :lat-lng="[43.163980, -2.778306]" />
	</LMap>
</template>

<style>
	html,
	body,
	#app {
		height: 100%;
		margin: 0;
		padding: 0;
	}
</style>