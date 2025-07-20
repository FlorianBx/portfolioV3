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
  for (let i = 375; i >= 0; i--) {
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

const totalContributions = computed(() => {
  return heatmapDays.value.reduce((total, day) => total + day.count, 0);
});
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="relative">
      <h2 class="text-2xl text-gray-300 font-bold mb-4">
        {{ totalContributions.toLocaleString() }} contributions in the last year
      </h2>
      <div class="overflow-x-auto pb-2" tabindex="0" aria-label="GitHub contributions graph" role="region">
        <div class="flex gap-1 justify-center">
          <div
            v-for="(week, i) in weeks"
            :key="i"
            class="flex flex-col gap-1"
          >
            <div
              v-for="(day, j) in week"
              :key="day.date + j"
              :title="day.date ? `${day.date}: ${day.count} contribution(s)` : ''"
              class="w-4 h-4 rounded-sm border border-gray-800 hover:border-gray-400 transition-colors duration-100"
              :style="{ background: getColor(day.level) }"
              tabindex="0"
            />
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center gap-1 mt-2 text-xs text-gray-400 relative">
        <div class="absolute right-0 flex items-center gap-1">
          <span>Less</span>
          <span class="inline-block w-4 h-4 rounded-sm border border-gray-800" :style="{ background: getColor(0) }"></span>
          <span class="inline-block w-4 h-4 rounded-sm border border-gray-800" :style="{ background: getColor(1) }"></span>
          <span class="inline-block w-4 h-4 rounded-sm border border-gray-800" :style="{ background: getColor(2) }"></span>
          <span class="inline-block w-4 h-4 rounded-sm border border-gray-800" :style="{ background: getColor(3) }"></span>
          <span class="inline-block w-4 h-4 rounded-sm border border-gray-800" :style="{ background: getColor(4) }"></span>
          <span>More</span>
        </div>
      </div>
    </div>
  </div>
</template>
