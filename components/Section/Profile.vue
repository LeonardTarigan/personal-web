<template>
  <div class="flex justify-center">
    <section
      id="profile"
      class="flex flex-col items-center gap-5 px-5 text-slate-400 sm:w-3/4 md:w-2/3 md:px-10"
    >
      <div class="h-24 w-24 overflow-hidden rounded-full bg-slate-800">
        <NuxtImg src="img/image-profile-2.png" class="scale-125" />
      </div>
      <div class="text-center">
        <h2
          class="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text font-bebas-neue text-4xl font-semibold text-transparent sm:text-5xl"
        >
          Leonard Tarigan
        </h2>
        <p class="-mt-1 mb-2 font-medium text-white">
          Frontend Engineer • Informatics Engineering Student
        </p>
        <div class="flex justify-center text-xl">
          <NuxtLink
            v-for="({ icon, link }, index) in socialData"
            :key="index"
            :to="link"
            target="_blank"
            class="flex aspect-square h-10 w-10 items-center justify-center rounded-lg transition-colors duration-150 hover:bg-amber-500 hover:text-slate-950"
          >
            <NuxtIcon :name="icon" />
          </NuxtLink>
        </div>
      </div>
      <div class="space-y-2 border-t-2 border-slate-800 pt-5">
        <p class="text-justify">
          As a third-year <b>Informatics Engineering</b> student, my passion for
          software development drives me to excel in various aspects of this
          dynamic field. With a strong focus on <b>frontend web development</b>,
          I have honed my skills through several hands-on experiences, creating
          visually appealing and user-friendly interfaces. My journey in
          technology is fueled by an insatiable curiosity, ensuring that I stay
          updated with the latest advancements and trends.
        </p>
        <p class="text-justify">
          Currently, I am expanding my horizons by delving into
          <b>backend development</b>, aiming to become a versatile
          <b>fullstack developer</b>. Additionally, I have a keen interest in
          the fascinating world of <b>artificial intelligence</b>, constantly
          seeking ways to integrate and leverage AI technologies in my projects.
          My commitment to continuous learning and innovation defines my
          approach to every challenge and opportunity in the tech landscape.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const socialData = ref([
  {
    icon: "icon-github",
    link: "https://github.com/LeonardTarigan",
  },
  {
    icon: "icon-linkedin",
    link: "https://www.linkedin.com/in/leonardtarigan/",
  },
  {
    icon: "icon-instagram",
    link: "https://www.instagram.com/leonardtarigannn/",
  },
  {
    icon: "icon-x",
    link: "https://twitter.com/asyncfnc",
  },
]);
</script>
