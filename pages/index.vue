<template>
  <main class="flex flex-col gap-32">
    <SectionHero />
    <SectionProfile />
    <SectionExperience />
    <SectionProjects />
    <SectionCollab />
  </main>
</template>

<script setup lang="ts">
useHead({
  title: "Leonard Tarigan - Frontend Enginner",
});

useSeoMeta({
  ogTitle: "Leonard Tarigan - Frontend Enginner",
  ogImage: "",
});
</script>
