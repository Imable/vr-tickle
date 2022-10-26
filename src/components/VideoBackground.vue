<script setup lang="ts">
import { onMounted } from "vue"

import useVideoStore from "../store/videoStore"

import videos from "../assets/videos.json"

const { FADE_DURATION,
        playAllVideos,
        cameraRotation, 
        activeVideoId } = useVideoStore()

// Play fadeIn animation when the page launches
const entryAnimation = () => {
    const item = document.getElementsByClassName('scene')[0]
    setTimeout(() => item.classList.remove("entry"), 2000);
}

// Start all video's automatically when the program starts
onMounted(() => {
    playAllVideos(videos)
    setTimeout(() => entryAnimation(), 50)
})
</script>

<template>
    <a-scene
        class="entry scene"
        loading-screen="backgroundColor: black;"
        aria-hidden>
        <a-assets>
            <video autoplay muted loop crossorigin="anonymous" v-for="video, index in videos" :key="video.name" :id="`video${index}`">
                <source :src="video.fname" type="video/mp4">
            </video> 
        </a-assets>

        <a-entity :rotation="cameraRotation" position="0 1.8 5">
        <a-entity ref="cam"  camera look-controls></a-entity>
        </a-entity>

        <a-videosphere id="currentVideo" ref="video" :src="'#' + activeVideoId"></a-videosphere>
    </a-scene>
</template>

<style>
.a-loader-title {
  display: none;
  color: transparent;
  opacity: 0;
}

.a-enter-vr {
    position: fixed;
    z-index: 1;
}

.a-canvas.animate {
    animation: fadeOutIn;
    animation-duration: v-bind(FADE_DURATION + 's');
    animation-timing-function: ease-in-out;    
}

.scene.entry .a-canvas {
    animation: fadeIn;
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: both;
    opacity: 0%;
}

@keyframes fadeIn {
    from {
        opacity: 0%
    }

    to {
        opacity: 100%;
    }
}

@keyframes fadeOutIn {
    0% {
        opacity: 100%;
    }

    50% {
        opacity: 0%;
    }

    100% {
        opacity: 100%;
    }
}
</style>