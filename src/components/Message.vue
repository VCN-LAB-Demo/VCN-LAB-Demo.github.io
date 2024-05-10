<template>
  <!-- 基本信息 -->
  <div class="message">
    <!-- Logo -->
    <div class="logo">
      <img class="logo-img" :src="siteLogo" alt="logo" />
      <div :class="{ name: true, 'text-hidden': true, long: siteUrl[0].length >= 6 }">
        <span class="bg">{{ siteUrl[0] }}</span>
        <span class="sm">.{{ siteUrl[1] }}</span>
      </div>
    </div>
    <!-- 简介 -->
    <div class="description cards" @click="changeBox(BOX_CONTROL.Right.LabIntro)">
      <div class="content">
        <Icon size="16">
          <QuoteLeft v-if="store.boxRightDisplayId!=BOX_CONTROL.Right.LabIntro"/>
        </Icon>
        <div class="text">
          <p>{{ descriptionText.hello }}</p>
          <li class="text-content" v-for="(item, index) in descriptionText.text" :key=index> {{ item }}</li>
          <p class="click-reminder" v-if="store.boxRightDisplayId!=BOX_CONTROL.Right.LabIntro">{{ clickReminder }}</p>
        </div>
        <Icon size="16">
          <QuoteRight v-if="store.boxRightDisplayId!=BOX_CONTROL.Right.LabIntro"/>
        </Icon>
      </div>
    </div>

    <div class="description cards" @click="changeBox(BOX_CONTROL.Right.PpIntro)">
      <div class="content">
        <img v-if="store.boxRightDisplayId!=BOX_CONTROL.Right.PpIntro" class="prof-img" :src="imgProf" alt="profxu" />
        <div class="text">
          <p>{{ profIntroText.title }}</p>
          <p class="prof-name" v-if="store.boxRightDisplayId!=BOX_CONTROL.Right.PpIntro">{{ profIntroText.name }}</p>
          <li class="text-content" v-for="(item, index) in profIntroText.brief" :key=index> {{ item }}</li>
          <p class="click-reminder" v-if="store.boxRightDisplayId!=BOX_CONTROL.Right.PpIntro">{{ clickReminder }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@vicons/utils";
import { QuoteLeft, QuoteRight } from "@vicons/fa";
import { Error } from "@icon-park/vue-next";
import { mainStore, BOX_CONTROL } from "@/store";

const store = mainStore();

const imgProf = import.meta.env.VITE_PROF_IMG;

// 主页站点logo
const siteLogo = import.meta.env.VITE_SITE_MAIN_LOGO;
// 站点链接
const siteUrl = computed(() => {
  const url = import.meta.env.VITE_SITE_NAME;
  if (!url) return "VCN LAB".split(".");
  // 判断协议前缀
  if (url.startsWith("http://") || url.startsWith("https://")) {
    const urlFormat = url.replace(/^(https?:\/\/)/, "");
    return urlFormat.split(".");
  }
  return url.split(".");
});

// 简介区域文字
const descriptionText = reactive({
  hello: import.meta.env.VITE_DESC_HELLO,
  text: import.meta.env.VITE_DESC_TEXT.split("//"),
});

const profIntroText = reactive({
  title: import.meta.env.VITE_PROF_TITLE,
  name: import.meta.env.VITE_PROF_NAME,
  brief: import.meta.env.VITE_PROF_BRIEF.split("//"),
});

const clickReminder = reactive(import.meta.env.VITE_BOX_OPEN_REMINDER);

// 切换右侧功能区
const changeBox = (id) => {
  store.memberId = 0;
  if (store.getInnerWidth >= 990) {
    if(store.boxRightDisplayId == BOX_CONTROL.Right.Closed){
      store.boxRightDisplayId = id;
    }
    else if(store.boxRightDisplayId == id){
      store.boxRightDisplayId = BOX_CONTROL.Right.Closed;
    }
    else{
      store.boxRightDisplayId = id;
    }
  } else {
    ElMessage({
      message: "The current page width is not enough to open the box",
      grouping: true,
      icon: h(Error, {
        theme: "filled",
        fill: "#efefef",
      }),
    });
  }
};



// 监听状态变化
watch(
  () => store.boxRightDisplayId,
  (value) => {
    if (value == BOX_CONTROL.Right.LabIntro) {
      descriptionText.hello = import.meta.env.VITE_DESC_HELLO_OTHER;
      descriptionText.text = import.meta.env.VITE_DESC_TEXT_OTHER.split("//");
      profIntroText.title = import.meta.env.VITE_PROF_TITLE;
      profIntroText.brief = import.meta.env.VITE_PROF_BRIEF.split("//");
    } else if (value == BOX_CONTROL.Right.PpIntro){
      profIntroText.title = import.meta.env.VITE_PROF_TITLE_OTHER;
      profIntroText.brief = import.meta.env.VITE_PROF_BRIEF_OTHER.split("//");
      descriptionText.hello = import.meta.env.VITE_DESC_HELLO;
      descriptionText.text = import.meta.env.VITE_DESC_TEXT.split("//");
    }
    else{
      descriptionText.hello = import.meta.env.VITE_DESC_HELLO;
      descriptionText.text = import.meta.env.VITE_DESC_TEXT.split("//");
      profIntroText.title = import.meta.env.VITE_PROF_TITLE;
      profIntroText.brief = import.meta.env.VITE_PROF_BRIEF.split("//");
    }
  },
);



</script>

<style lang="scss" scoped>
.message {
  .logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    animation: fade 0.5s;
    max-width: 600px;
    .logo-img {
      border-radius: 50%;
      width: 120px;
    }
    .name {
      width: 100%;
      padding-left: 22px;
      transform: translateY(-8px);
      font-family: "Pacifico-Regular";

      .bg {
        font-size: 4em;
      }

      .sm {
        margin-left: 6px;
        font-size: 2rem;
        @media (min-width: 720px) and (max-width: 789px) {
          display: none;
        }
      }
    }
    @media (max-width: 768px) {
      .logo-img {
        width: 100px;
      }
      .name {
        height: 128px;
        .bg {
          font-size: 4.5rem;
        }
      }
    }

    @media (max-width: 720px) {
      max-width: 100%;
    }
  }
  .prof-img{
    display: flex;
    flex-direction: row;
    align-items: center;
    animation: fade 0.5s;
    max-width: 460px;
    width: 28%;
    height: 28%;
    border-radius: 50%;
    &:hover {
      transform: scale(1.05);
    }
  }

  .description {
    padding: 1rem;
    margin-top: 3.5rem;
    max-width: 550px;
    animation: fade 0.5s;

    .content {
      display: flex;
      justify-content: space-between;

      .text {
        margin: 0.75rem 1rem;
        line-height: 2rem;
        margin-right: auto;
        p {
          &:nth-of-type(1) {
            font-size: 24px;
            font-Weight: bold;
            line-height: 40px;
            margin-bottom: 10px;
          }
        }
        .prof-name{
          font-size: 24px;
          font-Weight: bold;
        }
        .text-content{
          list-style: none;
          font-size: 17px;
          &:hover {
            font-size: 18px;
          }
        }
        .click-reminder{
          margin-top: 5px;
          font-size: 11px;
          &:hover {
            font-size: 12px;
          }
        }
        
      }

      .xicon:nth-of-type(2) {
        align-self: flex-end;
      }
    }
    @media (max-width: 720px) {
      max-width: 100%;
      pointer-events: none;
    }
  }
  @media (max-width: 390px) {
    .logo {
      flex-direction: column;
      .logo-img {
        display: none;
      }
      .name {
        margin-left: 0;
        height: auto;
        transform: none;
        text-align: center;
        .bg {
          font-size: 3.5rem;
        }
        .sm {
          font-size: 1.4rem;
        }
      }
    }
    .description {
      margin-top: 2.5rem;
    }
  }
}
</style>
