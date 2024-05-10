<template>
  <div class="title">
      <map-draw theme="two-tone" size="28" :fill="['#efefef', '#00000020']" />
      <span style="padding-left:10px;"> News </span>
  </div>
  <div class="map">
      <div id="container"></div>
  </div>


</template>

<script setup>

import { MapDraw } from "@icon-park/vue-next";

window._AMapSecurityConfig = {
securityJsCode: '0e15851f64b64f4f13c3d4bdc7398a62', 
}



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

.map{
  height: 20%;
  width: 80%;
  padding: 0px;
  margin: 0px;
  position: relative;
}

</style>
