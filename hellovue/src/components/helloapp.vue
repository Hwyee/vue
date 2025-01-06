<template>
    <span id="testsp1">模版语法：{{ temMsg }}</span>
    <br/>
    <optionalTest></optionalTest>
    <setupTest></setupTest>
    <br>
    <RefReactive></RefReactive>
    <br>
    <br> 
    <!-- 跳转并携带params参数（to的字符串写法） -->
     <RouterLink :to="`/opt`">kkk</RouterLink>
    <br>
    <router-view></router-view>
    <!-- <video width="640" height="480" controls autoplay
         src="http://localhost:8080/live/obs/hls.m3u8">
  </video> -->
    <h1>OBS RTMP推流</h1>

    <div id="vs" ref="RefPlayer"></div>
    <DroneNestDialog @click="showDialog"></DroneNestDialog>

  <RouterLink :to="`/obs`">obs</RouterLink>


</template>
<!-- /**
通过组合式 API，我们可以使用导入的 API 函数来描述组件逻辑。在单文件组件中，
组合式 API 通常会与 <script setup> 搭配使用。这个 setup attribute 是一个标识，
告诉 Vue 需要在编译时进行一些处理，让我们可以更简洁地使用组合式 API。比如,<script setup> 中的导入和顶层变量/函数都能够在模板中直接使用。
*/ -->
<!-- 安装 vite-plugin-vue-setup-extend 可以使用name标签更改组件名字 -->
<script setup language="ts" name="Hello">
import optionalTest from "./optionaltest.vue";
import setupTest from "./setupTest.vue";
import RefReactive from './refReactive.vue';
import DroneNestDialog from './dialog/airline.vue';

const temMsg = "模版语法";


import Player from 'xgplayer'
import 'xgplayer/dist/index.min.css'
import HlsJsPlugin from 'xgplayer-hls.js'
const RefPlayer = ref();
onMounted(()=>{
    RefPlayer.value = new Player({
    id: 'vs',
    url: 'http://127.0.0.1:8080/live/obs/hls.m3u8',
    plugins: [HlsJsPlugin],
    hlsJsPlugin: {} // config for plugin HlsJsPlugin
    // If use CDN loading,you can Get the plugin through window.HlsJsPlugin
})
})
function showDialog(params) {
    dialogVisible.value = true;
}

</script>

<style>
#testsp1 {
    box-shadow: 0 0 10px;
}
</style>