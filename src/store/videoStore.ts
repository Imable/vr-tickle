import { computed, ref, watch } from "vue"
import { Video } from "../models/video"
import useScrollStore from "../store/scrollStore"

const FADE_DURATION = 0.5; 

export default function useVideoStore() {

    // Get the scroll offset
    const { x, y } = useScrollStore()

    // Object to keep track of the camera position inside of the 360 video
    const _camRotation = computed(() => {
      return {
        x: 0,
        y: y.value * 0.2,
        z: 0
      }
    })
    const camRotation = computed(() => `${_camRotation.value.x} ${_camRotation.value.y} ${_camRotation.value.z}`)

    // Keep track of the video currently being displayed
    const _activeVideo = computed(() => Math.floor(y.value / window.innerHeight))
    const activeVideo = ref(0)
    const activeVideoId = computed(() => `video${activeVideo.value}`)
    // When the current video changes, play the fade animation
    watch(_activeVideo, (o, n) => {
      setDelayedActive()
      triggerFadeAnimation();
    })
    const setDelayedActive = () => {
      setTimeout(() => {
        activeVideo.value = _activeVideo.value
      }, FADE_DURATION * 1000 * 0.5); 
    }
    const triggerFadeAnimation = () => {
      const item = document.getElementsByClassName('a-canvas')[0]
      item.classList.remove("animate");
      setTimeout(() => item.classList.add("animate"), 10);
    }

    // Play video with id
    const playVideo = (id?: number) => {
      document.getElementById(`video${id}` ?? activeVideoId.value)?.play()
    }
    const playAllVideos = (videos: Video[]) => {
        for (let i = 0; i < videos.length; i++) {
            playVideo(i)
        }
      }

    return {
      FADE_DURATION,
      playVideo,
      playAllVideos,
      cameraRotation: camRotation,
      activeVideoId
    }
}
