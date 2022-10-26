<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

import mainContent from "./components/mainContent.vue"
import videoBackground from "./components/videoBackground.vue"
</script>

<template>
  <mainContent/>
  <videoBackground/>
</template>

<style>
#app {
  width: 100%; height: 100%;
}

html.a-fullscreen {
  background: black;
  position: absolute;
}

html.a-fullscreen body {
  overflow: visible;
}
</style>
