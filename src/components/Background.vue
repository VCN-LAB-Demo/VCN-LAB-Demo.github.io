<template>
  <div :class="store.backgroundShow ? 'cover show' : 'cover'">
    <img
      v-show="store.imgLoadStatus"
      class="bg"
      alt="cover"
      :src="bgUrl"
      @load="imgLoadComplete"
      @error.once="imgLoadError"
      @animationend="imgAnimationEnd"
      @click="displayBg"
    />
    <div :class="store.backgroundShow ? 'gray hidden' : 'gray'" />
    <Transition name="fade" mode="out-in">
      <a
        v-if="store.backgroundShow && store.coverType != '3'"
        class="down"
        :href="bgUrl"
        target="_blank"
      >
        Download
      </a>
    </Transition>

    <Transition name="fade" mode="out-in">
      <a
        v-if="store.backgroundShow && store.coverType != '3'"
        class="next"
        @click=nextBg
      >
        Next
      </a>
    </Transition>

    <Transition name="fade" mode="out-in">
      <a
        v-if="store.backgroundShow && store.coverType != '3'"
        class="prev"
        @click=prevBg
      >
        Previous
      </a>
    </Transition>
    
  </div>
</template>

<script setup>
import { mainStore } from "@/store";
import { Error } from "@icon-park/vue-next";

const store = mainStore();
const bgUrl = ref(null);
const bgindex = ref(null);

const imgTimeout = ref(null);
const emit = defineEmits(["loadComplete"]);

// 壁纸随机数
// 请依据文件夹内的图片个数修改 Math.random() 后面的第一个数字
const bgtotal = 11

// 更换壁纸链接
const changeBg = () => {
  bgUrl.value = `/images/bg/background${bgindex.value}.jpg`;

};

const nextBg = () =>{
  bgindex.value++;
  if (bgindex.value > bgtotal){
    bgindex.value = 1;
  }
  bgUrl.value = `/images/bg/background${bgindex}.jpg`;
  changeBg();
}

const prevBg = () =>{
  bgindex.value--;
  if (bgindex.value == 0){
    bgindex.value = bgtotal;
  }
  bgUrl.value = `/images/bg/background${bgindex}.jpg`;
  changeBg();
}

// 图片加载完成
const imgLoadComplete = () => {
  imgTimeout.value = setTimeout(
    () => {
      store.setImgLoadStatus(true);
    },
    Math.floor(Math.random() * (600 - 300 + 1)) + 300,
  );
};

// 图片动画完成
const imgAnimationEnd = () => {
  console.log("壁纸加载且动画完成");
  // 加载完成事件
  emit("loadComplete");
};

// 图片显示失败
const imgLoadError = () => {
  console.error("壁纸加载失败：", bgUrl.value);
  ElMessage({
    message: "壁纸加载失败，已临时切换回默认",
    icon: h(Error, {
      theme: "filled",
      fill: "#efefef",
    }),
  });
  bgUrl.value = `/images/bg/background${bgindex}.jpg`;
};


onMounted(() => {
  // 加载壁纸
  bgindex.value = Math.floor(Math.random() * bgtotal + 1);
  changeBg();
});

onBeforeUnmount(() => {
  clearTimeout(imgTimeout.value);
});
</script>

<style lang="scss" scoped>
.cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 0.25s;
  z-index: -1;
  &.show {
    z-index: 1;
  }
  .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    backface-visibility: hidden;
    filter: blur(20px) brightness(0.3);
    transition:
      filter 0.3s,
      transform 0.3s;
    animation: fade-blur-in 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    animation-delay: 0.45s;
  }
  .gray {
    opacity: 1;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.5) 100%),
      radial-gradient(rgba(0, 0, 0, 0) 33%, rgba(0, 0, 0, 0.3) 166%);

    transition: 1.5s;
    &.hidden {
      opacity: 0;
      transition: 1.5s;
    }
  }
  .down {
    font-size: 16px;
    color: white;
    position: absolute;
    bottom: 30px;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: block;
    padding: 20px 26px;
    border-radius: 8px;
    background-color: #00000030;
    width: 120px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      transform: scale(1.05);
      background-color: #00000060;
    }
    &:active {
      transform: scale(1);
    }
  }
  .prev {
    font-size: 16px;
    color: white;
    position: absolute;
    bottom: 30px;
    left: 0;
    right: 300px;
    margin: 0 auto;
    display: block;
    padding: 20px 26px;
    border-radius: 8px;
    background-color: #00000030;
    width: 120px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      transform: scale(1.05);
      background-color: #00000060;
    }
    &:active {
      transform: scale(1);
    }
  }
  .next {
    font-size: 16px;
    color: white;
    position: absolute;
    bottom: 30px;
    left: 300px;
    right: 0;
    margin: 0 auto;
    display: block;
    padding: 20px 26px;
    border-radius: 8px;
    background-color: #00000030;
    width: 120px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      transform: scale(1.05);
      background-color: #00000060;
    }
    &:active {
      transform: scale(1);
    }
  }
}
</style>
