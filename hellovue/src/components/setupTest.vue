<template>
    <div>setup:{{ name }}</div>
    <button @click="changeName">changeName</button>

</template>

<script language="ts">

export default {
    //组件名，首字母大写，但是导入使用时可以更改名字，毕竟是默认导入
    name: "test",
    setup() {
        console.log(this);//undifined setup函数没有this，vue3弱化了this.
        //这样声明的变量不是响应式的，如果进行修改，则不会直接渲染到页面上
        let name = '张三';


        function changeName() {
            name = 'nnnaaaaammmmmeee';
            console.log(name)
        }

        return { name, changeName }
        //setup 也可以直接返回一个函数，如果返回函数，则函数的返回值会直接渲染到页面上，不会使用template模版。
        // return ()=> 'setup'  
    }
}

</script>



<style></style>