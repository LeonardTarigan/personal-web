<template>
  <div class="mx-auto max-w-screen-2xl overflow-hidden">
    <!-- <div
      v-if="width >= 1024"
      class="cursor-dot h-2 w-2 bg-amber-500"
      :style="{ left: `${x}px`, top: `${y - 115}px` }"
    ></div>
    <div
      v-if="width >= 1024"
      class="cursor-outline h-10 w-10 bg-amber-500 mix-blend-difference transition-all duration-[60ms]"
      :class="pressed ? 'h-20 w-20' : ''"
      :style="{ left: `${x}px`, top: `${y - 115}px` }"
    ></div> -->
    <!-- <div class="fixed z-50 font-semibold text-white">
      {{ x }} {{ pageX }} {{ y }}
    </div> -->
    <slot />
    <SectionFooter />
  </div>
</template>

<script setup lang="ts">
const { x, y } = useMouse({ scroll: false, type: "screen" });
const { pressed } = useMousePressed();
const { width } = useWindowSize();

const isDark = useDark();
</script>

<style scoped>
.cursor-dot,
.cursor-outline {
  animation-fill-mode: forwards;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  z-index: 2;
  pointer-events: none;
}
</style>
