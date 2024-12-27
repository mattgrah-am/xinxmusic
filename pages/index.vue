<template>
  <div class="max-w-screen-md mx-auto px-4 md:px-8">
    <h1 class="sr-only">Xinx - The Music Archive</h1>
    <img
      src="/logo-alt.webp"
      alt="Xinx - The Music Archive"
      width="1024"
      height="532"
      class="w-full py-4" />
    <nav>
      <ul
        class="flex gap-4 md:gap-6 uppercase tracking-widest justify-center sm:justify-end text-sm sm:text-base mb-8">
        <li class="transition duration-200 hover:blur-[1px]">
          <NuxtLink to="/">Music</NuxtLink>
        </li>
        <li class="transition duration-200 hover:blur-[1px]">
          <button class="uppercase" @click="showModal">Art</button>
        </li>
        <li class="transition duration-200 hover:blur-[1px]">
          <NuxtLink
            to="mailto:%6d%61%69%6c%40%78%69%6e%78%6d%75%73%69%63%2e%63%6f%6d?subject=Enquiry from Xinxmusic website"
            target="_blank"
            rel="noopener noreferrer">
            Enquire
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <section id="audio-player" class="mb-8 md:mb-16">
      <AudioPlayer
        :track-title="currentTrackTitle"
        :track-url="currentTrackUrl"
        :track-id="currentTrackId"
        :music="music" />
    </section>
    <section id="ep" class="mb-16">
      <h2 class="font-bold text-xl mb-8">EP</h2>
      <TrackList
        v-for="ep in music.ep"
        :title="ep.title"
        :tracks="ep.tracks"
        :current-track-title="currentTrackTitle"
        @select-track="(payload) => selectTrack(payload)" />
    </section>
    <section id="single" class="mb-16">
      <h2 class="font-bold text-xl">Single</h2>
      <TrackList
        title=""
        :tracks="music.single"
        :current-track-title="currentTrackTitle"
        @select-track="(payload) => selectTrack(payload)" />
    </section>
    <section id="remix" class="mb-16">
      <h2 class="font-bold text-xl mb-8">Remix</h2>
      <TrackList
        title=""
        :tracks="music.remix"
        :current-track-title="currentTrackTitle"
        @select-track="(payload) => selectTrack(payload)" />
    </section>
    <footer>
      <div class="mt-2 flex items-center justify-center text-xs pb-4">
        Created with 🖤 by&nbsp;
        <a
          href="https://www.matg.dev/"
          target="_blank"
          rel="noreferrer"
          class="text-neutral-500 hover:underline hover:underline-offset-2">
          matg.dev
        </a>
      </div>
    </footer>
    <Transition>
      <Artwork v-if="showArtwork" @close="showModal" />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { music } from "../utils/music";

const currentTrackTitle = ref("");
const currentTrackUrl = ref("");
const currentTrackId = ref("");

const showArtwork = ref(false);

const showModal = () => {
  if (showArtwork.value) {
    showArtwork.value = false;
    document.body.classList.remove("overflow-hidden");
  } else {
    showArtwork.value = true;
    document.body.classList.add("overflow-hidden");
  }
};

const selectTrack = (track: { title: string; url: string }) => {
  currentTrackTitle.value = track.title;
  currentTrackUrl.value = track.url;
  currentTrackId.value =
    track.title && track.title.split(" ").join("-").toLowerCase();
};

onMounted(() => {
  const trackList = [
    ...music.ep.map((track) => track.tracks),
    ...music.single,
    ...music.remix,
  ].flat();

  const randomTrack = trackList[Math.floor(Math.random() * trackList.length)];
  currentTrackTitle.value = randomTrack.title;
  currentTrackUrl.value = randomTrack.url;
  currentTrackId.value = randomTrack.title.split(" ").join("-").toLowerCase();
});

useServerSeoMeta({
  title: "Xinx - The Music Archive",
  description: "Xinx - The Music Archive",
  ogImage: "https://xinxmusic.com/logo-alt.webp",
});
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
