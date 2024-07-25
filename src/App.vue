<template>
    <h1 id="title">
        幼女code
    </h1>
    <div id="input-wrapper">
        <textarea id="input" type='text' placeholder='输入你的字' v-model="input" />
    </div>
    <p id="tip">
        转换结果
    </p>
    <div id="output-wrapper">
        <div id="output" v-html='output'></div>
    </div>
    <div id="bottom">
        <p>
            如果你觉得幼女Code对你的工作或学习有所帮助，欢迎给作者送一些幼女过来
        </p>
        <p>
            <a href='https://github.com/RimoChan/unvcode' target='_blank'>Link</a> | MPL-2.0
        </p>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import map from './assets/map.json'

const input = ref('')
const output = computed(() => {
    let s = ''
    for (const c of input.value) {
        if (c in map)
            s += `<span style="color:blue">${map[c as keyof typeof map]}</span>`
        else
            s += c
    }
    return s
})
</script>

<style>
@import url(./assets/reset.css);

p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

h1 {
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
</style>

<style>
@charset "UTF-8";

body {
    text-align: center;
    padding-top: 4vh;
    font-size: 3.6vh;
    text-shadow: 0 0 .5vh #fff
}

body input {
    font-size: 3.6vh
}

#title,
#tip,
#bottom {
    user-select: none;
}

#input {
    width: 70vw;
    height: 25vh;
    font-size: 2vh;
    resize: none;
}

#output-wrapper {
    display: flex;
    justify-content: center;
}

#output {
    width: 70vw;
    height: 25vh;
    font-size: 3vh;
    word-break: normal;
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow-y: auto;
    overflow-x: hidden;
}

#bottom {
    position: absolute;
    left: 0;
    right: 0;
    bottom: .2rem;
    margin: auto;
    width: 100%;
    text-align: center;
    font-size: 1rem
}

#bottom p {
    padding: 0 1rem
}
</style>
