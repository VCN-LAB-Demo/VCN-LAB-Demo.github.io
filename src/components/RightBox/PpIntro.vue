<template>
    <div class="title">
        <people theme="two-tone" size="28" :fill="['#efefef', '#00000020']" />
        <span style="padding-left:10px;">{{ member.title }}</span>
        <span style="padding-left:10px;">{{ member.name }}</span>
    </div>

    <div class="bio">
        <span>{{ member.bio }}</span>

        <img class="photo" :src="member.photo" />
    </div>

    <div class="contact" >
        <div class="link">
            <a v-for="(value, key) in member.contact"
            :key="key"
            :href="value"
            target="_blank"
            @mouseenter="socialTip = getTip(key)"
            @mouseleave="socialTip = 'Contact Me'"
            >
                <img class="icon" v-if="value" :src="getIcon(key)" height="24" />
            </a>
        </div>
        <span class="tip">{{ socialTip }}</span>
    </div>

    <div class="education" v-if="member.education[0]">
        <span class="subtitle">Education</span>
        <li class="education-list"
            v-for="(item, index) in member.education" :key=index
            >
            {{ item }}
        </li>
    </div>

    <div class="interest" v-if="member.interest[0]">
        <span class="subtitle">Research Interest</span>
        <li class="interest-list" 
            v-for="(item, index) in member.interest" :key=index
            >
            {{ item }}
        </li>
    </div>

    <div class="grants" v-if="member.grants[0]">
        <span class="subtitle">Current Grants</span>
        <li class="grants-list" 
            v-for="(item, index) in member.grants" :key=index
            >
            {{ item }}
        </li>
    </div>

    <div class="publications" v-if="member.publications[0]">
        <span class="subtitle">Selected Publications</span>
        <li class="publications-list" 
            v-for="(item, index) in member.publications" :key=index
            >
            <a :href="item.href">{{ item.citation }}</a>
        </li>
    </div>

</template>

<script setup>

import { People } from "@icon-park/vue-next";
import { mainStore } from "@/store";
import labMember from "@/assets/labMember.json";
import icons from "@/assets/icons.json";

const store = mainStore();
const member = ref(labMember[store.memberId]);
const socialTip = ref("Contact Me");


const getIcon = (key) => {
    return icons[key].icon;
};

const getTip = (key) => {
    return icons[key].tip;
};
watch(
    () => store.memberId,
    (value) => {
        member.value = labMember[value];
    }
)

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

.bio{ 
    display: flex;
    justify-content: space-between;
    span {
        float: left;
        align-content: center;
        margin: 0 0.5rem 0.5rem 0;
        font-size: 19px;
        flex: 1;
    }
    .photo {
        float: right;
        height: 160px;
        width: auto;
        margin-right: 12px;
        object-fit: cover;
        margin: 0.6rem 0 0 0;
        &:hover {
          transform: scale(1.1);
        }
    }
}

.contact {
  margin: 0 0.5rem 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 550px;
  width: 100%;
  height: 42px;
  background-color: transparent;
  border-radius: 6px;
  animation: fade 0.5s;
  transition:
    background-color 0.2s,
    backdrop-filter 0.2s;
  @media (max-width: 840px) {
    max-width: 100%;
    justify-content: center;
    .link {
      justify-content: space-evenly !important;
      width: 90%;
    }
    .tip {
      display: none !important;
    }
  }

  .link {
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      display: inherit;
      .icon {
        margin: 0 12px;
        transition: transform 0.3s;
        &:hover {
          transform: scale(1.1);
        }
        &:active {
          transform: scale(1);
        }
      }
    }
  }
  .tip {
    display: none;
    margin-right: 12px;
    animation: fade 0.5s;
  }
  @media (min-width: 768px) {
    &:hover {
      background-color: #00000040;
      backdrop-filter: blur(0);
      .tip {
        display: block;
      }
    }
  }
}
.education{
    .subtitle{
        display: flex;
        flex-direction: row;
        align-items: center;
        font-weight: bold;
        margin: 1.5rem 0 0.5rem 0;
        font-size: 20px;
        &:hover {
            font-size: 22px;
        }
    }
    .education-list{
        margin: 0 0 0.5rem 0;
        list-style: none;
        padding-left: 20px;
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

.interest{
    .subtitle{
        display: flex;
        flex-direction: row;
        align-items: center;
        font-weight: bold;
        margin: 1.5rem 0 0.5rem 0;
        font-size: 20px;
        &:hover {
            font-size: 22px;
        }
    }
    .interest-list{
        margin: 0 0 0.5rem 0;
        list-style: none;
        padding-left: 20px;
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

.grants{
    .subtitle{
        display: flex;
        flex-direction: row;
        align-items: center;
        font-weight: bold;
        margin: 1.5rem 0 0.5rem 0;
        font-size: 20px;
        &:hover {
            font-size: 22px;
        }
    }
    .grants-list{
        margin: 0 0 0.5rem 0;
        padding-left: 20px;
        font-size: 16px;
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

.publications{
    .subtitle{
        display: flex;
        flex-direction: row;
        align-items: center;
        font-weight: bold;
        margin: 1.5rem 0 0.5rem 0;
        font-size: 20px;
        &:hover {
            font-size: 22px;
        }
    }
    .publications-list{
        margin: 0 0 0.5rem 0;
        padding-left: 20px;
        font-size: 16px;
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
