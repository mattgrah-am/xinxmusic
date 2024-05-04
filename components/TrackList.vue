<template>
  <ul>
    <li class="mb-4">
      <h3 v-if="title" class="font-bold mb-2 mt-8">
        {{ title }}
      </h3>
      <button
        @click="$emit('selectTrack', { title: track.title, url: track.url })"
        v-for="track in tracks"
        class="py-2 flex gap-4 items-center text-left w-full hover:bg-neutral-200"
      >
        <IconPause class="size-4" v-if="track.title === currentTrackTitle" />
        <IconPlay class="size-4" v-else />
        {{ track.title }}
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
const props = defineProps<{
  title?: string;
  tracks: {
    title: string;
    url: string;
  }[];
  currentTrackTitle: string;
}>();

const emits = defineEmits<{
  selectTrack: (track: { title: string; url: string }) => void;
}>();
</script>
