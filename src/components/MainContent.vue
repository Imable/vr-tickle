<script setup lang="ts">
import { isMobile } from 'mobile-device-detect';

import NYCSkyline from "./articles/NYCSkyline.vue"
import YourStory from "./articles/YourStory.vue";

import videos from "../assets/videos.json"
</script>

<template>
    <main :class="{ 'desktop': !isMobile }">
        <NYCSkyline/>
        <YourStory/>
        <YourStory/>
        <YourStory/>
    </main>
</template>

<style>
main {
    position: absolute;
    /* Show the content on top of the 360 video */
    z-index: 1;
    width: 100%;
}

/* On mobile, the background is not interactive, because we cannot scroll using touch 
   When on desktop, we can use the scrollwheel to scroll, so then we can actually pan around in the 360 video */
main.desktop {
    pointer-events: none;
}

article {
    position: relative;
    height: 100vh; width: 100%;
}
</style>