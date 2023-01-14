<template>
  <LMap
    ref="map"
    :minZoom="3"
    :maxZoom="18"
    v-model:zoom="zoomData"
    :center="props.center"
    :useGlobalLeaflet="false"
  >
    <LTileLayer :url="props.url" :attribution="props.attribution"></LTileLayer>
    <LMarker :lat-lng="props.markerLatLng"></LMarker>
  </LMap>
</template>

<script lang="ts" setup>
import 'leaflet/dist/leaflet.css';
import { LMap, LTileLayer, LMarker } from '@vue-leaflet/vue-leaflet';

interface Map {
  url?: string;
  attribution?: string;
  zoom?: number;
  center?: [number, number];
  markerLatLng?: [number, number];
}
const props = withDefaults(defineProps<Map>(), {
  url: '',
  attribution: '',
  zoom: 16,
  center: () => [0, 0],
  markerLatLng: () => [0, 0],
});

const zoomData = ref(props.zoom);
</script>
<style lang="scss"></style>
