<template>
 <div id="vs" ref="RefPlayer"></div>

</template>

<script setup lang="ts">
import {ref,onMounted} from 'vue';

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
</script>

<style type="text/css">

</style>