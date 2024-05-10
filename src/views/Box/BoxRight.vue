<template>
  <div class="box cards" @mouseenter="closeShow = true" @mouseleave="closeShow = false">
    <transition name="el-fade-in-linear">
      <close-one
        class="close"
        theme="filled"
        size="28"
        fill="#ffffff60"
        v-show="closeShow"
        @click="closeRightBox"
      />
    </transition>
    <transition name="el-fade-in-linear">
      <setting-two
        class="setting"
        theme="filled"
        size="28"
        fill="#ffffff60"
        v-show="closeShow"
        @click="store.setOpenState = true"
      />
    </transition>
    <div class="content">

      <LabIntro v-if="store.boxRightDisplayId==BOX_CONTROL.Right.LabIntro" />
      <PpIntro v-if="store.boxRightDisplayId==BOX_CONTROL.Right.PpIntro" />

    </div>
  </div>
</template>

<script setup>
import { CloseOne, SettingTwo } from "@icon-park/vue-next";
import { mainStore, BOX_CONTROL } from "@/store";
import LabIntro from "@/components/RightBox/LabIntro.vue";
import PpIntro from "@/components/RightBox/PpIntro.vue";

const store = mainStore();
const closeShow = ref(false);

const closeRightBox = () =>{
  store.boxRightDisplayId = BOX_CONTROL.Right.Closed;
};



</script>

<style lang="scss" scoped>
.box {
  flex: 1 0 0%;
  margin-right: -60px;
  margin-bottom: 200px;
  height: 80%;
  max-width: 55%;
  position: relative;
  animation: fade 0.5s;

  &:hover {
    transform: scale(1);
  }

  .close,
  .setting {
    position: absolute;
    top: 14px;
    right: 14px;
    width: 28px;
    height: 28px;
    transition:
      transform 0.3s,
      opacity 0.3s;

    &:hover {
      transform: scale(1.2);
    }

    &:active {
      transform: scale(1);
    }
  }

  .setting {
    right: 56px;
  }

  .content {
    overflow: hidden;
    animation: slide 5s linear infinite;
    padding: 30px;
    width: 100%;
    height: 100%;
    overflow-y:auto;
  }
}
</style>
