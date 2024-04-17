<template>
  <div class="max-w-screen-md mx-auto px-4 md:px-8">
    <h1 class="sr-only">Xinx - The Music Archive</h1>
    <img
      src="/logo-alt.webp"
      alt="Xinx - The Music Archive"
      width="1024"
      height="532"
      class="w-full py-4"
    />
    <ul
      class="flex gap-4 md:gap-6 uppercase tracking-widest justify-center sm:justify-end text-sm sm:text-base mb-8"
    >
      <li>Music</li>
      <li>Art</li>
      <li>Enquire</li>
    </ul>
    <section id="ep" class="mb-8">
      <h2 class="font-bold text-xl">EP</h2>
      <ul>
        <li v-for="ep in music.ep" class="mb-4">
          <h3 class="font-bold">{{ ep.title }}</h3>
          <div v-for="track in ep.tracks">
            <NuxtLink :to="track.url" target="_blank" rel="noopener noreferrer">
              {{ track.title }}
            </NuxtLink>
          </div>
        </li>
      </ul>
    </section>
    <section id="single" class="mb-8">
      <h2 class="font-bold text-xl">Single</h2>
      <ul>
        <li v-for="track in music.single">
          <NuxtLink :to="track.url" target="_blank" rel="noopener noreferrer">
            {{ track.title }}
          </NuxtLink>
        </li>
      </ul>
    </section>
    <section id="remix" class="mb-8">
      <h2 class="font-bold text-xl">Remix</h2>
      <ul>
        <li v-for="track in music.remix">
          <NuxtLink :to="track.url" target="_blank" rel="noopener noreferrer">
            {{ track.title }}
          </NuxtLink>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import { music } from "./utils/music";
</script>
