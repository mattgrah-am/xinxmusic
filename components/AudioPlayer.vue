<template>
  <audio ref="player" :id="trackId" controls class="hidden">
    <source :src="trackUrl" type="audio/mpeg" />
    Your browser does not support the audio element.
  </audio>

  <div
    class="flex items-center justify-between px-4 py-2 bg-neutral-100 border border-neutral-300 rounded-2xl"
  >
    <div class="flex gap-8 item-center">
      <button @click="toggleAudio">
        <IconPlay v-if="playStatus" />
        <IconPause v-if="!playStatus" />
      </button>
      <span class="hidden sm:block">{{ trackTitle }}</span>
    </div>
    <div class="flex items-center">
      <button @click="muteAudio" class="pr-2">
        <IconSpeaker v-if="volumeStatus" />
        <IconMute v-if="!volumeStatus" />
      </button>
      <input
        class="m-2 h-1 w-24 appearance-none rounded-full bg-neutral-900"
        type="range"
        min="1"
        max="100"
        v-model="volume"
        @change="volumeAdjust"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  trackTitle: string | null;
  trackUrl: string | null;
  trackId: string | null;
  music: Music;
}>();

const playStatus = ref(true);
const volumeStatus = ref(true);
const volume = ref(80);
const player = ref<HTMLAudioElement | null>(null);
let currentVolume = 0;

const toggleAudio = () => {
  player.value?.paused ? player.value?.play() : player.value?.pause();
  player.value?.paused ? (playStatus.value = true) : (playStatus.value = false);
};

const volumeAdjust = () => {
  const audio = document.getElementById(props.trackId) as HTMLAudioElement;
  audio.volume = volume.value / 100;
};

const muteAudio = () => {
  volumeStatus.value = !volumeStatus.value;
  if (volume.value > 0) {
    currentVolume = volume.value;
  }
  const audio = document.getElementById(props.trackId) as HTMLAudioElement;
  audio.muted = !volumeStatus.value;
  !volumeStatus.value ? (volume.value = 0) : (volume.value = currentVolume);
};

const trackUrl = computed(() => props.trackUrl);
watch(trackUrl, (newVal) => {
  if (newVal) {
    player.value?.load();
    toggleAudio();
  }
});
</script>

<style scoped>
input[type="range"]::-webkit-slider-thumb,
input[type="range"]::-moz-range-thumb {
  width: 12px;
  height: 12px;
  background-color: rgb(245 245 244);
  border: rgb(115 115 115) 1px solid;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
}
</style>
