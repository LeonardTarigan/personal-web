<template>
  <section id="collab" class="mt-10 px-5 md:px-10">
    <div
      class="flex flex-col gap-5 rounded-lg bg-gradient-to-tr from-amber-500 to-amber-600 px-5 text-slate-950 md:flex-row"
    >
      <div class="relative z-0 shrink-0 basis-1/2">
        <NuxtImg
          src="/img/vr-person.png"
          alt="VR Guy"
          draggable="false"
          class="-bottom-0 -z-10 contrast-[1.05] md:absolute"
        />
      </div>
      <div class="py-5">
        <h2 class="font-bebas-neue text-5xl font-bold">Let's Collaborate!</h2>
        <p class="leading-tight">
          If you are interested in collaborating with me, I would love to hear
          from you. I am always open to new ideas and opportunities to work on
          exciting and meaningful projects.
        </p>

        <div class="mt-5 flex flex-col gap-2 font-medium">
          <NuxtLink href="/files/resume.pdf" target="_blank">
            <Button
              severity="contrast"
              class="group relative z-0 w-full space-x-1 border-2 !border-slate-950 !bg-slate-950 !text-amber-500"
            >
              <div
                class="absolute -left-full -z-10 h-full w-full bg-slate-800/70 transition-all duration-300 group-hover:left-0"
              ></div>
              <NuxtIcon name="icon-document-download" />
              <span>Download My Resume</span>
            </Button>
          </NuxtLink>
          <NuxtLink
            to="https://www.upwork.com/freelancers/~0103d8519c1cbc93d7"
            target="_blank"
          >
            <Button
              severity="contrast"
              outlined
              class="group relative z-0 w-full space-x-1 border-2 !border-slate-950 !text-slate-950"
            >
              <div
                class="absolute -left-full -z-10 h-full w-full bg-amber-600 transition-all duration-300 group-hover:left-0"
              ></div>
              <NuxtIcon name="icon-upwork" />
              <span>Find Me on Upwork</span>
            </Button>
          </NuxtLink>
          <NuxtLink to="mailto:leontrg32@gmail.com" target="_blank">
            <Button
              severity="contrast"
              outlined
              class="group relative z-0 w-full space-x-1 border-2 !border-slate-950 !text-slate-950"
            >
              <div
                class="absolute -left-full -z-10 h-full w-full bg-amber-600 transition-all duration-300 group-hover:left-0"
              ></div>
              <NuxtIcon name="icon-mail" />
              <span>Reach Me on Email </span>
            </Button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
