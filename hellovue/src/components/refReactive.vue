<template>
    <div>ref:{{ refName }},refobjname:{{ refObj.name }},refobjage:{{ refObj.age }}</div>
    <button @click="refChangeName">refChangeName</button>
    <br />
    <div>reactivename:{{ reactiveobj.name }},age:{{ reactiveobj.age }}</div>
    <button @click="reactiveChange">reactiveChange</button>
</template>

<script setup lang="ts" name="RefReactive">
//引入响应式对象。
import { ref, reactive } from 'vue'

//这样是响应式的，用ref对象包裹了一下，但是修改时需要使用对象的value属性进行修改。
//ref定义基本类型数据。和对象类型数据，但是必须用.value获取源对象进行修改。
let refName = ref("ref张三");
let refObj = ref({ "name": "reactiveName", "age": 2 });
//下划线的属性可以认为是私有的，不用
console.log(refName);//{dep: Dep, __v_isRef: true, __v_isShallow: false, _rawValue: 'ref张三', _value: 'ref张三'} value: "ref张三"
function refChangeName() {
    refName.value = 'refNameChange';
    refObj.value = { "name": 'refchangeobj', age: 32452 }
}

//reactive 只能定义对象类型数据，可以不用.value进行修改，但是如果对整个对象进行替换时，会使响应式失效。可以使用Object.assign()对源对象属性进行替换
let reactiveobj = reactive({ "name": "reactiveName", "age": 2 });

function reactiveChange() {
    //这样是不对的
    // reactiveobj = {"name":'aa',age:23};
    //这样是对的
    reactiveobj.age = 233;
    Object.assign(reactiveobj, { "name": "dsfgasg" });
}


</script>

<style></style>