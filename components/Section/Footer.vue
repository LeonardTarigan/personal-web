<template>
  <footer class="mt-20">
    <div class="px-5 md:px-10">
      <div
        class="flex flex-col items-center justify-between gap-5 border-t-2 border-slate-800 py-5 sm:flex-row"
      >
        <div>
          <div class="flex flex-col items-center gap-10 text-lg sm:flex-row">
            <NuxtIcon
              name="logo"
              class="w-fit text-4xl text-amber-500 transition-colors delay-100 duration-300 hover:text-amber-600"
              filled
            />
            <div class="flex gap-5 text-sm text-slate-500">
              <NuxLink
                to="/"
                class="transition-colors hover:text-white hover:underline"
              >
                Home
              </NuxLink>
              <NuxLink
                to="/"
                class="transition-colors hover:text-white hover:underline"
              >
                Projects
              </NuxLink>
              <NuxLink
                to="/"
                class="transition-colors hover:text-white hover:underline"
              >
                Blog
              </NuxLink>
              <NuxLink
                to="/"
                class="transition-colors hover:text-white hover:underline"
              >
                Github
              </NuxLink>
            </div>
            <!-- <p>
              Made by
              <span class="font-semibold text-amber-500">@leonardtarigan</span>
            </p> -->
          </div>
        </div>
        <div class="text-sm text-slate-500">
          © Leonard Tarigan - {{ new Date().getFullYear() }}
        </div>
      </div>
    </div>
    <Vue3Marquee
      clone
      direction="reverse"
      duration="60"
      class="-z-10 overflow-hidden bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 py-1 font-semibold tracking-tight text-slate-900"
    >
      <template v-for="(greet, index) in greets" :key="index">
        <div className="px-2 italic">{{ greet }}</div>
        <div>•</div>
      </template>
    </Vue3Marquee>
  </footer>
</template>

<script setup lang="ts">
import { ref } from "vue";

const greets = ref([
  "很高兴认识你",
  "Encantado de conocerte",
  "Leuk je te ontmoeten",
  "Nice to meet you",
  "はじめまして",
  "Приятно познакомиться.",
  "만나서 반갑습니다",
  "Enchanté",
  "Es freut mich Sie kennenzulernen",
]);
</script>
