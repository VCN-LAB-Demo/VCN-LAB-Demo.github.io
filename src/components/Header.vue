<template>
  <header id="header" :class="store.footerBlur ? 'blur' : null">
    <Transition name="fade" mode="out-in">
      <div v-if="!store.playerState || !store.playerLrcShow" class="power">
        <span>
          <a :href="externalLink">
            <img 
            :src="ntuLogo" 
            alt="ntu" 
            height="80px"
            /> 
          </a>
          <h1 class="headtext">School of Social Sciences</h1>
        </span>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { mainStore } from "@/store";

const store = mainStore();
const externalLink = 'https://www.ntu.edu.sg/'

const ntuLogo = import.meta.env.VITE_NTU_LOGO;

</script>

<style lang="scss" scoped>
#heater {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 0;
  line-height: 46px;
  text-align: center;
  z-index: 0;
  font-size: 14px;
  display: flex;
  .power {
    animation: fade 0.3s;
  }

  &.blur {
    backdrop-filter: blur(10px);
    background: rgb(0 0 0 / 25%);
    font-size: 16px;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.15s ease-in-out;
  }
  @media (max-width: 720px) {
    font-size: 0.85rem;
    &.blur {
      font-size: 0.85rem;
    }
  }
  @media (max-width: 480px) {
    .hidden {
      display: none;
    }
  }
}

.headtext {
  position: absolute;
  font-size: 28px; /* 文字大小 */
  display: inline-block;
  top: 20px;
}
</style>
