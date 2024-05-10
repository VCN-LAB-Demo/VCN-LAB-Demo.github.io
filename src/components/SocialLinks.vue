<template>
  <!-- 社交链接 -->
  <div class="social">
    <div class="link">
      <a
        v-for="(value, key) in labMember[0].contact"
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
</template>

<script setup>
import labMember from "@/assets/labMember.json";
import icons from "@/assets/icons.json";

console.log(labMember[0].contact)
// 社交链接提示
const socialTip = ref("Contact Me");

const getIcon = (key) => {
  console.log(key)
    return icons[key].icon;
};

const getTip = (key) => {
    return icons[key].tip;
};

</script>

<style lang="scss" scoped>
.social {
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 550px;
  width: 100%;
  height: 42px;
  background-color: transparent;
  border-radius: 6px;
  backdrop-filter: blur(0);
  animation: fade 0.5s;
  transition:
    background-color 0.3s,
    backdrop-filter 0.3s;
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
      backdrop-filter: blur(5px);
      .tip {
        display: block;
      }
    }
  }
}
</style>
