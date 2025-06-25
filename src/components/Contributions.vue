<script setup lang="ts">
import { computed } from "vue";
import type { ContributionWeek } from "@/types/github";

const props = defineProps<{
  contributions: ContributionWeek[];
}>();

interface Contribution {
  date: string;
  count: number;
  level: number;
}

const CONTRIB_COLORS = [
  "oklch(37.8% 0.077 168.94)",
  "oklch(50.8% 0.118 165.612)",
  "oklch(69.6% 0.17 162.48)",
  "oklch(76.5% 0.177 163.223)",
  "oklch(84.5% 0.143 164.978)",
] as const;

function getColor(level: number) {
  switch (level) {
    case 0:
      return "transparent";
    case 1:
      return CONTRIB_COLORS[0];
    case 2:
      return CONTRIB_COLORS[1];
    case 3:
      return CONTRIB_COLORS[2];
    case 4:
      return CONTRIB_COLORS[3];
    default:
      return "#ebedf0";
  }
}

function getHeatmapDates() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const days: string[] = [];
  for (let i = 274; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    days.push(d.toISOString().slice(0, 10));
  }
  return days;
}

const heatmapDays = computed(() => {
  const map = Object.fromEntries(
    props.contributions.map((c: any) => [c.date, c]),
  );
  return getHeatmapDates().map((date) =>
    map[date] ? map[date] : { date, count: 0, level: 0 },
  );
});

const weeks = computed(() => {
  const cols: Contribution[][] = [];
  for (let i = 0; i < heatmapDays.value.length; i += 7) {
    cols.push(heatmapDays.value.slice(i, i + 7));
  }
  return cols;
});
</script>

<template>
  <div>
    <h2 class="text-xl text-slate-300 font-semibold mb-2">
      Contributions in the last year
    </h2>
    <div>
      <div class="overflow-x-auto py-1" tabindex="0" aria-label="GitHub contributions graph" role="region">
        <div class="flex gap-[3px] min-w-[420px] sm:min-w-[600px] md:min-w-[740px]">
          <div
            v-for="(week, i) in weeks"
            :key="i"
            class="flex flex-col gap-[2px]"
          >
            <div
              v-for="(day, j) in week"
              :key="day.date + j"
              :title="day.date ? `${day.date}: ${day.count} contribution(s)` : ''"
              class="w-4 h-4 rounded-sm border border-[#232332] hover:border-gray-400 transition-colors duration-100"
              :style="{ background: getColor(day.level) }"
              tabindex="0"
            />
          </div>
        </div>
      </div>
      <p class="flex flex-wrap items-center justify-end gap-1 mt-4 mr-1 text-xs bg-black text-gray-300 select-none">
        Less
        <span class="inline-block w-4 h-4 bg-emerald-900 align-middle rounded"></span>
        <span class="inline-block w-4 h-4 bg-emerald-700 align-middle rounded"></span>
        <span class="inline-block w-4 h-4 bg-emerald-500 align-middle rounded"></span>
        <span class="inline-block w-4 h-4 bg-emerald-400 align-middle rounded"></span>
        <span class="inline-block w-4 h-4 bg-emerald-300 align-middle rounded"></span>
        More
      </p>
    </div>
  </div>
</template>
