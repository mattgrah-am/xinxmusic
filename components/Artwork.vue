<template>
  <div
    class="fixed top-0 left-0 grid place-items-center bg-black/80 w-screen h-screen"
    @click.self="$emit('close')"
  >
    <div class="h-2/3 lg:h-fit bg-neutral-50 p-4 rounded-2xl overflow-auto">
      <div
        v-if="!currentImage"
        class="grid gap-1"
        :class="
          currentImage
            ? 'grid-cols-1'
            : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5 '
        "
      >
        <img
          v-for="img in files"
          :src="img"
          class="w-40 h-40 rounded-lg border border-neutral-300"
          @click="currentImage = img"
        />
      </div>

      <div v-if="currentImage">
        <img :src="currentImage" class="rounded-lg border border-neutral-300" />
      </div>
      <div class="w-full flex gap-8 items-center mt-4">
        <button
          v-if="currentImage"
          @click="currentImage = ''"
          class="transition duration-200 hover:blur-[1px] text-lg ml-2"
        >
          <- Back
        </button>
        <button
          @click="$emit('close')"
          class="transition duration-200 hover:blur-[1px] text-lg bg-neutral-900 text-green-50 px-3 py-1.5 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const emits = defineEmits(["close"]);

const currentImage = ref("");

const files = [
  "/artwork/air-raid.webp",
  "/artwork/balkansky-loop-stepwalker.webp",
  "/artwork/brain-storm.webp",
  "/artwork/bronsonstep.webp",
  "/artwork/close-your-eyes-and-listen.webp",
  "/artwork/crazy-clown-factory.webp",
  "/artwork/end-of-time.webp",
  "/artwork/hurt.webp",
  "/artwork/in-a-world-of-shit.webp",
  "/artwork/insecticide.webp",
  "/artwork/khakis.webp",
  "/artwork/lions-roar.webp",
  "/artwork/lollipop.webp",
  "/artwork/metal-vs-machine.webp",
  "/artwork/nemeisis.webp",
  "/artwork/no-hope-for-the-human-race.webp",
  "/artwork/orchestrated-mess.webp",
  "/artwork/oxymoron.webp",
  "/artwork/requiem-for-a-dream.webp",
  "/artwork/rise-up.webp",
  "/artwork/vengeance.webp",
  "/artwork/why-so-serious.webp",
  "/artwork/wtf-boom.webp",
  "/artwork/xinxmusic.webp",
  "/artwork/yum-yum.webp",
];
</script>
