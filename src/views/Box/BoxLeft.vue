<template>
  <div class="box cards" @mouseenter="closeShow = true" @mouseleave="closeShow = false">
    <transition name="el-fade-in-linear">
      <close-one
        class="close"
        theme="filled"
        size="28"
        fill="#ffffff60"
        v-show="closeShow"
        @click="closeLeftBox"
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

      <Members v-if="store.boxLeftDisplayId==BOX_CONTROL.Left.Members"/>
      <News v-if="store.boxLeftDisplayId==BOX_CONTROL.Left.News"/>
      <Publications v-if="store.boxLeftDisplayId==BOX_CONTROL.Left.Publications"/>
      <OpenPosition v-if="store.boxLeftDisplayId==BOX_CONTROL.Left.OpenPosition"/>
      <Album v-if="store.boxLeftDisplayId==BOX_CONTROL.Left.Album"/>
      <ContactUs v-if="store.boxLeftDisplayId==BOX_CONTROL.Left.ContactUs"/>
      <TimeCapsule v-if="store.boxLeftDisplayId==BOX_CONTROL.Left.TimeCapsule"/>
    </div>
  </div>
</template>
  
<script setup>
import { CloseOne, SettingTwo } from "@icon-park/vue-next";
import { mainStore, BOX_CONTROL } from "@/store";
import Members from "@/components/LeftBox/Members.vue";
import News from "@/components/LeftBox/News.vue";
import Publications from "@/components/LeftBox/Publications.vue";
import OpenPosition from "@/components/LeftBox/OpenPosition.vue";
import Album from "@/components/LeftBox/Album.vue";
import ContactUs from "@/components/LeftBox/ContactUs.vue";
import TimeCapsule from "@/components/LeftBox/TimeCapsule.vue";



  
const store = mainStore();
const closeShow = ref(false);

const closeLeftBox = () =>{
  store.boxLeftDisplayId = BOX_CONTROL.Left.Closed;
}


</script>

<style lang="scss" scoped>
.box {
  flex: 1 0 0%;
  margin-left: -100px;
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
  