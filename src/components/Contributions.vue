<script setup lang="ts">
import { ref, onMounted, computed } from "vue";

interface Contribution {
  date: string;
  count: number;
  level: number;
}

const contributions = ref<Contribution[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);
const CONTRIB_COLORS = [
  "oklch(37.8% 0.077 168.94)",
  "oklch(50.8% 0.118 165.612)",
  "oklch(69.6% 0.17 162.48)",
  "oklch(76.5% 0.177 163.223)",
  "oklch(84.5% 0.143 164.978)",
];

onMounted(async () => {
  try {
    const res = await fetch(
      "https://github-contributions-api.jogruber.de/v4/florianbx",
    );
    if (!res.ok) throw new Error("Erreur réseau");
    const data = await res.json();
    if (Array.isArray(data.contributions)) {
      contributions.value = data.contributions;
    } else {
      throw new Error("Aucune donnée de contribution trouvée");
    }
  } catch (e: any) {
    error.value = e.message;
  } finally {
    loading.value = false;
  }
});

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
  for (let i = 374; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    days.push(d.toISOString().slice(0, 10));
  }
  return days;
}

const heatmapDays = computed(() => {
  const map = Object.fromEntries(contributions.value.map((c) => [c.date, c]));
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
    <h2 class="text-xl text-slate-300 font-semibold mb-2">Contributions in the last year</h2>
    <div v-if="loading">Chargement...</div>
    <div v-else-if="error">Erreur : {{ error }}</div>
    <div v-else>
      <div class="overflow-x-auto">
        <div class="flex" style="gap: 3px">
          <div
            v-for="(week, i) in weeks"
            :key="i"
            class="flex flex-col"
            style="gap: 2px"
          >
            <div
              v-for="(day, j) in week"
              :key="day.date + j"
              :title="
                day.date ? `${day.date}: ${day.count} contribution(s)` : ''
              "
              class="w-4 h-4 rounded-sm"
              :style="{ background: getColor(day.level) }"
            />
          </div>
        </div>
      </div>
      <p class="flex justify-end gap-2 mt-4 text-xs text-gray-500">
        Less
        <span
          class="inline-block w-4 h-4 bg-emerald-900 align-middle rounded"
        ></span>
        <span
          class="inline-block w-4 h-4 bg-emerald-700 align-middle rounded"
        ></span>
        <span
          class="inline-block w-4 h-4 bg-emerald-500 align-middle rounded"
        ></span>
        <span
          class="inline-block w-4 h-4 bg-emerald-400 align-middle rounded"
        ></span>
        <span
          class="inline-block w-4 h-4 bg-emerald-300 align-middle rounded"
        ></span>
        More
      </p>
    </div>
  </div>
</template>

<style scoped>
div[title] {
  cursor: pointer;
  border: 1px solid #232332;
  transition: border-color 0.1s;
}
div[title]:hover {
  border: 1.5px solid #aaa;
}
</style>
