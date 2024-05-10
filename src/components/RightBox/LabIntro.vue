<template>
    <div class="title">
        <engineering-brand theme="two-tone" size="28" :fill="['#efefef', '#00000020']" />
        <span style="padding-left:10px;">About Us</span>
    </div>
    <div class="lab-intro" v-for="item in labProjects" :key="item.title">
        <div class="project">
            <video v-if="item.video" class="project-video" controls autoplay="muted" preload="auto" :src="item.video" />
            <img v-if="item.image" class="project-image" :src="item.image" />
            <span class="subtitle">{{ item.title }}</span>
            <span class="text">{{ item.text }}</span>
        </div>          
    </div>
</template>

<script setup>

import { EngineeringBrand } from "@icon-park/vue-next";
import labProjects from "@/assets/labProjects.json";

</script>

<style lang="scss" scoped>
.title{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0.2rem 0 1.5rem;
    font-size: 28px;
    font-weight: bold;
}
.lab-intro {
    width: 100%;
    display: flex;
    margin: 0 0 2.5rem 0;
    &:hover {
        transform: scale(1.05);
    }
    .project-video{
        margin: 0.6rem 0 0 1.5rem;
        float: right;
        height: 180px;
    }
    .project-image{
        margin: 0.6rem 0 0 1.5rem;
        float: right;
        height: 180px;
        &:hover {
        transform: scale(1.05);
    }
    }
    .subtitle {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-weight: bold;
        margin: 0.2rem 0 0.2rem;
        font-size: 1.1rem;
    }
    .text {
        display: block;
        margin: 0.2rem 0rem 1.8rem 0rem;
        font-size: 0.95rem;
    }
}
</style>
