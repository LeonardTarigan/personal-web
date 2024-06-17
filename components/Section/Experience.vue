<template>
  <section
    id="experience"
    class="flex flex-col items-center gap-10 px-5 md:px-10"
  >
    <h2
      class="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 px-20 font-squada-one text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl"
    >
      EXPERIENCES
    </h2>
    <Timeline v-if="width < 768" :value="experienceData" class="w-full">
      <template #content="slotProps" class="!-pl-20 !border-2">
        <div class="text-sm">
          <h3
            class="text-lg font-semibold"
            :class="
              slotProps.item.endDate ? 'text-amber-500/80' : 'text-amber-400'
            "
          >
            {{ slotProps.item.title }}
          </h3>
          <p>{{ slotProps.item.company }}</p>
          <p class="text-slate-500">
            {{ slotProps.item.startDate }} -
            {{ slotProps.item.endDate ?? "Present" }}
          </p>
        </div>
      </template>
    </Timeline>
    <Timeline
      v-if="width >= 768"
      :value="experienceData"
      align="alternate"
      class="w-full"
    >
      <template #content="slotProps" class="!-pl-20 !border-2">
        <div class="text-sm">
          <h3
            class="text-lg font-semibold"
            :class="
              slotProps.item.endDate ? 'text-amber-500/80' : 'text-amber-400'
            "
          >
            {{ slotProps.item.title }}
          </h3>
          <p>{{ slotProps.item.company }}</p>
          <p class="text-slate-500">
            {{ slotProps.item.startDate }} -
            {{ slotProps.item.endDate ?? "Present" }}
          </p>
        </div>
      </template>
    </Timeline>
  </section>
</template>

<script setup lang="ts">
const experienceData = computed(() =>
  events.sort((a, b) => {
    if (a.endDate === null && b.endDate !== null) return -1;
    if (a.endDate !== null && b.endDate === null) return 1;

    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  }),
);

const { width } = useWindowSize();

const events = [
  {
    title: "Frontend Engineer",
    company: "Mooi Studio",
    startDate: "May 2024",
    endDate: null,
  },
  {
    title: "Frontend Developer Intern",
    company: "Suitmedia",
    startDate: "Feb 2024",
    endDate: "Jun 2024",
  },
  {
    title: "Head of Frontend Division",
    company: "POROS",
    startDate: "Feb 2024",
    endDate: null,
  },
  {
    title: "Web & Cloud Mentor",
    company: "GDSC University of Brawijaya",
    startDate: "Oct 2023",
    endDate: null,
  },
  {
    title: "Frontend Web Developer",
    company: "TEDxUniversitasBrawijaya",
    startDate: "Jul 2023",
    endDate: "Dec 2023",
  },
  {
    title: "Frontend Product Engineer",
    company: "Bersinar",
    startDate: "Jun 2023",
    endDate: "Dec 2023",
  },
  {
    title: "OOP Lab Assistant",
    company: "FILKOM, University of Brawijaya",
    startDate: "Feb 2023",
    endDate: "Jun 2023",
  },
  {
    title: "Basic Programming Lab Assistant",
    company: "FILKOM, University of Brawijaya",
    startDate: "Sep 2022",
    endDate: "Dec 2022",
  },
];
</script>
