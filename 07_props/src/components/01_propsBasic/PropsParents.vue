<!-- vbase-3-setup -->
<template>
    <div :class="{container:true, dark: darkState}">
        props 입력: <input v-model="message" />
        <PropsChild :message="message" />

        <!-- @(커스텀 이벤트 이름) = emit -->
        <DarkMode @toggle="toggleDarkMode" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import PropsChild from './PropsChild.vue';
import DarkMode from './DarkMode.vue';

const message = ref('hello');
const darkState = ref(false);

function toggleDarkMode() {
    darkState.value = !darkState.value;

}
</script>

<style scoped>
.container {
    border: 1px solid;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.dark {
    background-color: black;
    color: white;
}
</style>