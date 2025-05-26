<script lang="ts" setup>
	import { LMap, LTileLayer, LMarker } from '@vue-leaflet/vue-leaflet'
	import 'leaflet/dist/leaflet.css'
	import * as L from 'leaflet'

	console.info(L)
</script>

<template>
	<client-only>
		<LMap
			style="height: 50vh; width: 80vw;"
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
	</client-only>
</template>

<style>

</style>