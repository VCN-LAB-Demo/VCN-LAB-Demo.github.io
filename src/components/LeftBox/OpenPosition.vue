<template>
    <div class="title">
        <user-positioning theme="two-tone" size="28" :fill="['#efefef', '#00000020']" />
        <span style="padding-left:10px;"> Open Position </span>
    </div>

    <div>
        <div class="position" v-for="(position, key) in openPosition" :key="key">
            <div>
                <span class="name">{{ position.name }}</span>
            </div>
            <div class="content" >
                <li class="content-list"
                    v-for="(item, index) in position.content" :key=index
                >
                    {{ item }}
                </li>
            </div>
            <div class="education" v-if="position.education[0]">
                <span class="subtitle">Educational qualifications and skills:</span>
                <li class="education-list"
                    v-for="(item, index) in position.education" :key=index
                >
                    {{ item }}
                </li>
            </div>
            <div class="experience" v-if="position.experience[0]">
                <span class="subtitle">Years of experience:</span>
                <li class="experience-list"
                    v-for="(item, index) in position.experience" :key=index
                >
                    {{ item }}
                </li>
            </div>
        </div>
    </div>


</template>

<script setup>

import { UserPositioning } from "@icon-park/vue-next";
import openPosition from "@/assets/openPosition.json";




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

.position{
    .name{
        display: flex;
        flex-direction: row;
        align-items: center;
        font-weight: bold;
        text-decoration: underline;
        margin: 1.5rem 0 0.5rem 0;
        font-size: 24px;
        &:hover {
            font-size: 26px;
        }
    }
    .subtitle{
        display: flex;
        flex-direction: row;
        align-items: center;
        font-weight: bold;
        margin: 0.5rem 0 0.5rem 0;
        font-size: 18px;
        &:hover {
            font-size: 20px;
        }
    }
    .content-list{
        margin: 0 0 0.5rem 0;
        list-style: none;
        font-size: 18px;
        border-radius: 6px;
        animation: fade 0.5s;
        transition:
            background-color 0.2s,
            backdrop-filter 0.2s;
        &:hover {
            background-color: #00000040;
            backdrop-filter: blur(0);
        }

    }
    .education-list{
        margin: 0 0 0.5rem 0;
        font-size: 18px;
        border-radius: 6px;
        animation: fade 0.5s;
        transition:
            background-color 0.2s,
            backdrop-filter 0.2s;
        &:hover {
            background-color: #00000040;
            backdrop-filter: blur(0);
        }

    }
    .experience-list{
        margin: 0 0 0.5rem 0;
        list-style: none;
        font-size: 18px;
        border-radius: 6px;
        animation: fade 0.5s;
        transition:
            background-color 0.2s,
            backdrop-filter 0.2s;
        &:hover {
            background-color: #00000040;
            backdrop-filter: blur(0);
        }

    }
}


</style>
