<template>
  <section id="project" class="flex flex-col items-center gap-10 px-5 md:px-10">
    <h2
      class="w-fit bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 px-20 font-squada-one text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl"
    >
      MY WORKS
    </h2>
    <div class="group grid w-full gap-2 sm:grid-cols-2 md:grid-cols-3">
      <div
        v-for="({ image, url }, index) in projectData"
        :key="index"
        class="aspect-video overflow-hidden rounded-lg bg-slate-900"
      >
        <NuxtLink :to="url ?? ''" target="_blank">
          <NuxtImg
            :src="image"
            draggable="false"
            class="aspect-video object-cover transition-all duration-150 hover:scale-105 hover:!brightness-100 group-hover:brightness-50"
            :class="!url && 'cursor-not-allowed'"
          />
        </NuxtLink>
      </div>
    </div>
    <!-- <NuxtLink to="/projects">
      <Button
        class="group relative z-0 flex items-center gap-1 rounded-lg !bg-amber-500 px-5 py-2 font-bold text-slate-950 transition-colors duration-300 hover:border-amber-600"
      >
        <div
          class="absolute -left-full -z-10 h-full w-full bg-amber-600 transition-all duration-300 group-hover:left-0"
        ></div>
        <span>See All</span>
      </Button>
    </NuxtLink> -->
  </section>
</template>

<script setup lang="ts">
const projectData = ref([
  {
    name: "TEDxUniversitasBrawijaya Official Website",
    image: "img/image-project-thumb-tedx.png",
    url: null,
  },
  {
    name: "Faceless",
    image: "img/image-project-thumb-faceless.png",
    url: "https://faceless-message.vercel.app/",
  },
  {
    name: "Sky",
    image: "img/image-project-thumb-sky.png",
    url: "https://sky-weather.vercel.app/",
  },
  {
    name: "DiaLink",
    image: "img/image-project-thumb-dialink.png",
    url: "https://dialink.vercel.app/",
  },
  {
    name: "AniZone",
    image: "img/image-project-thumb-anizone.png",
    url: "https://anizone.netlify.app/",
  },
  {
    name: "Seekr",
    image: "img/image-project-thumb-seekr.png",
    url: "https://seekrco.netlify.app/",
  },
]);
</script>
