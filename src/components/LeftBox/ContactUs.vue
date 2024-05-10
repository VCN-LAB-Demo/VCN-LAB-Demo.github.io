<template>
    <div class="title">
        <map-draw theme="two-tone" size="28" :fill="['#efefef', '#00000020']" />
        <span style="padding-left:10px;"> Contact Us </span>
    </div>
    <div>
        <GoogleMap class="map"
            :api-key="apikey"
            :center="center"
            :zoom="17"
            >
            <Marker :options="{ position: center }" />
        </GoogleMap>


    </div>


</template>

<script setup>

import { MapDraw } from "@icon-park/vue-next";
import { GoogleMap, Marker } from 'vue3-google-map';

const apikey = import.meta.env.GOOGLE_MAP_API;
// const center = import.meta.env.LAB_LOCATION;
const center = { lat: 1.3435946694143137,  lng: 103.68305139083337 };




</script>

<style lang="scss" scoped>
.title{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin: 0.2rem 0 1.5rem;
    font-size: 28px;
    font-weight: bold;
}

.map{
    height: 300px;
    width: 100%;
    border-radius: 50px;
    position: relative;
}

</style>
