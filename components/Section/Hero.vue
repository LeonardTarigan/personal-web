<template>
  <section class="relative flex h-screen flex-col justify-between">
    <div class="absolute -z-10 h-screen w-full overflow-hidden">
      <Parallaxy
        :speed="200"
        direction="opposite"
        :animation="
          (delta: number) => {
            delta -= 207.6;
            return `transform: translate3d(0, ${delta}px, 0);`;
          }
        "
        class="h-screen"
      >
        <NuxtImg
          src="/img/image-hero.png"
          alt="Hero Image"
          draggable="false"
          class="h-[150vh] w-full max-w-screen-2xl select-none object-cover opacity-20"
        />
      </Parallaxy>
    </div>

    <div class="z-[1] px-5 py-5 md:px-10">
      <div class="flex items-center justify-between">
        <NuxtLink
          to="/"
          class="transition-transform duration-150 hover:rotate-[15deg]"
        >
          <NuxtIcon
            name="logo"
            class="w-fit text-6xl text-amber-500 transition-colors delay-100 duration-300 hover:text-amber-600"
            filled
          />
        </NuxtLink>

        <ul
          class="hidden items-center gap-4 font-bold uppercase text-amber-500 md:flex"
        >
          <li v-for="(menu, index) in navMenus" :key="index">
            <Button
              text
              class="rounded-lg px-4 py-2 uppercase !text-amber-500 hover:italic"
              @click="scrollToAnchor(menu)"
            >
              {{ menu }}
            </Button>
          </li>
          <li>
            <Button
              class="group relative z-0 flex items-center gap-1 rounded-lg !bg-amber-500 px-5 py-2 text-slate-950 transition-colors duration-300 hover:border-amber-600"
              @click="scrollToAnchor('collab')"
            >
              <div
                class="absolute -left-full -z-10 h-full w-full bg-amber-600 transition-all duration-300 group-hover:left-0"
              ></div>
              <NuxtIcon name="icon-code" filled />
              <span>Collab</span>
            </Button>
          </li>
        </ul>

        <Button
          size="small"
          class="group block h-10 w-10 border-2 !bg-amber-500 hover:!bg-amber-600 focus:!outline-none md:hidden"
          @click="visible = true"
        >
          <NuxtIcon
            name="icon-menu"
            class="text-3xl font-bold text-slate-950"
          />
        </Button>
      </div>
    </div>

    <Sidebar v-model:visible="visible">
      <template #container="{ closeCallback }">
        <div
          class="flex h-full flex-col divide-y-2 divide-amber-500 bg-slate-950 p-5 text-white"
        >
          <div class="flex items-center justify-between pb-5">
            <NuxtLink
              to="/"
              class="transition-transform duration-150 hover:rotate-[15deg]"
            >
              <NuxtIcon
                name="logo"
                class="w-fit text-5xl text-amber-500 transition-colors delay-100 duration-300 hover:text-amber-400"
                filled
              />
            </NuxtLink>
            <Button
              text
              size="small"
              class="group block h-10 w-10 border-2"
              @click="visible = false"
            >
              <NuxtIcon
                name="icon-close"
                class="translate-y-[2px] text-3xl font-bold text-amber-500"
              />
            </Button>
          </div>

          <div
            class="flex grow flex-col justify-between pt-5 font-bold uppercase text-amber-500"
          >
            <div class="flex flex-col">
              <div
                v-for="(menu, index) in navMenus"
                :key="index"
                text
                class="rounded-lg p-2 transition-colors duration-150 hover:bg-amber-500 hover:text-slate-950"
                @click="
                  {
                    scrollToAnchor(menu);
                    visible = false;
                  }
                "
              >
                {{ menu }}
              </div>
            </div>
            <Button
              class="group relative z-0 flex items-center gap-1 rounded-lg !bg-amber-500 px-5 py-2 text-slate-950 transition-colors duration-300 hover:border-amber-600"
              @click="
                {
                  scrollToAnchor('collab');
                  visible = false;
                }
              "
            >
              <div
                class="absolute -left-full -z-10 h-full w-full bg-amber-600 transition-all duration-300 group-hover:left-0"
              ></div>
              <NuxtIcon name="icon-code" filled />
              <span>Collab</span>
            </Button>
          </div>
        </div>
      </template>
    </Sidebar>

    <div
      class="relative z-0 flex h-20 items-center overflow-hidden bg-gradient-to-r from-amber-500 to-amber-600"
    >
      <Vue3Marquee
        clone
        direction="reverse"
        duration="20"
        class="-z-10 overflow-hidden font-daren text-9xl text-amber-500"
      >
        <p class="opacity-45">LEONARD.TARIGAN.</p>
      </Vue3Marquee>
      <h2
        class="absolute top-0 z-10 flex h-full w-full items-center whitespace-nowrap pl-5 pt-1 font-squada-one text-4xl font-bold italic tracking-tight text-slate-950 sm:text-5xl md:pl-10 md:text-6xl"
      >
        FRONTEND ENGINEER.
      </h2>
    </div>
  </section>
</template>

<script setup lang="ts">
import Parallaxy from "@lucien144/vue3-parallaxy";

const navMenus = ["profile", "experience", "project"];

const visible = ref(false);

const { scrollToAnchor } = useAnchorScroll({
  scrollOptions: {
    offsetTop: -40,
    behavior: "smooth",
  },
});
</script>

<style scoped>
.clip {
  clip-path: polygon(0 0, 100% 0, 97.5% 100%, 0% 100%);
}
</style>
