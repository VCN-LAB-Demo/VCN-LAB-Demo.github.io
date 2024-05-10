import { defineStore } from "pinia";

export const mainStore = defineStore("main", {
  state: () => {
    return {
      imgLoadStatus: false, // 壁纸加载状态
      innerWidth: null, // 当前窗口宽度
      coverType: "0", // 壁纸种类
      siteStartShow: false, // 建站日期显示
      musicClick: false, // 音乐链接是否跳转
      musicIsOk: false, // 音乐是否加载完成
      musicVolume: 0, // 音乐音量;
      musicOpenState: false, // 音乐面板开启状态
      backgroundShow: false, // 壁纸展示状态
      boxId: 0, //监听鼠标在盒子的位置
      boxRightDisplayId: 0, // 右侧盒子展示内容id
      boxLeftDisplayId: 0, // 左侧盒子展示内容id
      mobileOpenState: false, // 移动端开启状态
      mobileFuncState: false, // 移动端功能区开启状态
      setOpenState: false, // 设置页面开启状态
      playerState: false, // 当前播放状态
      playerTitle: null, // 当前播放歌曲名
      playerArtist: null, // 当前播放歌手名
      playerLrc: "歌词加载中", // 当前播放歌词
      playerLrcShow: true, // 是否显示底栏歌词
      footerBlur: true, // 底栏模糊
      headerBlur: true, // 顶栏模糊
      playerAutoplay: false, // 是否自动播放
      playerLoop: "all", // 循环播放 "all", "one", "none"
      playerOrder: "list", // 循环顺序 "list", "random"
      memberId: 0, //当前显示的成员id
    };
  },
  getters: {
    // 获取歌词
    getPlayerLrc(state) {
      return state.playerLrc;
    },
    // 获取歌曲信息
    getPlayerData(state) {
      return {
        name: state.playerTitle,
        artist: state.playerArtist,
      };
    },
    // 获取页面宽度
    getInnerWidth(state) {
      return state.innerWidth;
    },
  },
  actions: {
    // 更改当前页面宽度
    setInnerWidth(value) {
      this.innerWidth = value;
      if (value >= 720) {
        this.mobileOpenState = false;
        this.mobileFuncState = false;
      }
    },
    // 更改播放状态
    setPlayerState(value) {
      if (value) {
        this.playerState = false;
      } else {
        this.playerState = true;
      }
    },
    // 更改歌词
    setPlayerLrc(value) {
      this.playerLrc = value;
    },
    // 更改歌曲数据
    setPlayerData(title, artist) {
      this.playerTitle = title;
      this.playerArtist = artist;
    },
    // 更改壁纸加载状态
    setImgLoadStatus(value) {
      this.imgLoadStatus = value;
    },
  },
  persist: {
    key: "data",
    storage: window.localStorage,
    paths: [
      "coverType",
      "musicVolume",
      "siteStartShow",
      "musicClick",
      "playerLrcShow",
      "footerBlur",
      "headerBlur",
      "playerAutoplay",
      "playerLoop",
      "playerOrder",
    ],
  },
});


export const BOX_CONTROL = {
  Id: {
    Null: 0,
    Left: 1,
    Right: 2
  },
  Right: {
    Closed: 0,
    LabIntro: 1,
    PpIntro: 2
  },
  Left: {
      Closed: 0,
      Members: 1,
      News: 2,
      Publications: 3,
      OpenPosition: 4,
      Album: 5,
      ContactUs: 6,
  }
};

