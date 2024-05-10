<template>
    <div class="title">
        <peoples-two theme="two-tone" size="28" :fill="['#efefef', '#00000020']" />
        <span style="padding-left:10px;"> Team Members </span>
    </div>

    <div class="PhD">
        <div class="subtitle">
            <p>Phd Students</p>
        </div>
        <div >
            <el-row class="list" :gutter="20">
                <el-col class="column" v-for="(item, index) in filterList(labMember,'PhD')" :span="8" :key="index">
                    <div class="Avatar" @click="changePeople(item.id)">
                        <img class="avatar" :src="item.avatar" alt="PhD" />
                        <div class="text">
                            <!-- <p>{{ item.role }}</p> -->
                            <p class="name">{{ item.name }}</p>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>


    <div class="Master">
        <div class="subtitle">
            <p>Master's Students</p>
        </div>
        <div >
            <el-row class="list" :gutter="20">
                <el-col class="column" v-for="(item, index) in filterList(labMember,'Master')" :span="8" :key="index">
                    <div class="Avatar" @click="changePeople(item.id)">
                        <img class="avatar" :src="item.avatar" alt="Master" />
                        <div class="text">
                            <!-- <p>{{ item.role }}</p> -->
                            <p class="name">{{ item.name }}</p>
                        </div>
                    </div>

                </el-col>
            </el-row>
        </div>
    </div>

    <div class="Researchers">
        <div class="subtitle">
            <p>Research Staff</p>
        </div>
        <div >
            <el-row class="list" :gutter="20">
                <el-col class="column" v-for="(item, index) in filterList(labMember,'Researchers')" :span="8" :key="index">
                    <div class="Avatar" @click="changePeople(item.id)">
                        <img class="avatar" :src="item.avatar" alt="Researchers" />
                        <div class="text">
                            <!-- <p>{{ item.role }}</p> -->
                            <p class="name">{{ item.name }}</p>
                        </div>
                    </div>

                </el-col>
            </el-row>
        </div>
    </div>


</template>
  
<script setup>
import { PeoplesTwo } from "@icon-park/vue-next";
import labMember from "@/assets/labMember.json";
import { mainStore, BOX_CONTROL } from "@/store";


const store = mainStore();

const changePeople = (id) => {
    if (store.getInnerWidth >= 990) {
    if(store.boxRightDisplayId == BOX_CONTROL.Right.PpIntro){
        if(store.memberId==id){
            store.boxRightDisplayId = BOX_CONTROL.Right.Closed;
        }else{
            store.memberId=id;
        }
    }
    else{
        store.boxRightDisplayId = BOX_CONTROL.Right.PpIntro;
        store.memberId=id;
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

const filterList = (List, category) => {
    return List.filter(function(element,){
    if (element.category == category){
        return true;
    }
    else{
        return false;
    }
})
}


</script>

<style lang="scss" scoped>

.title{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin: 0.2rem 0 0.2rem;
    font-size: 28px;
    font-weight: bold;
}

.icon{
    padding-right: 10px;
}

.subtitle{
    float: left;
    align-content: center;
    margin: 1.5rem 0 0.5rem 0;
    font-size: 24px;
    font-weight: bold;

    flex: 1;
}

.list{
    display: flex;
    flex-wrap: wrap;
    float: left;
    width: 100%;
}

.column{
    justify-items: start;
    border: 1px solid transparent;
}

.avatar{
    display: flex;
    flex-direction: row;
    align-items: center;
    animation: fade 0.5s;
    border-radius: 50%;
    max-width: 460px;
    height: 100px;
    width: 100px;
    margin-right: 12px;
    margin: 0.6rem 0 0 0;
    object-fit: cover;
    &:hover {
        transform: scale(1.1);
    }
}

.text{
    float: left;
    align-content: center;
    margin: 1.2rem 0.5rem 0.5rem 0;
    font-size: 19px;
    flex: 1;
    .name{
        font-size: 20px;
        font-weight: bold;
    }
}

</style>
