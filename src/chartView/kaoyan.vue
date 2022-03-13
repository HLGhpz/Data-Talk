<template>
  <div class="chart-wrapper" ref="chartDom"></div>
</template>

<script setup>
import * as echarts from "echarts";
import { ref, onMounted} from "vue";
import { getData } from "@/utils/requset.js";

let chartDom = ref(null);
let barRaceChart = ref(null);
let path = "./01-kaoyan";

function initChart(data) {
  barRaceChart = echarts.init(chartDom.value);
  let initOption = {
    animationDuration: 10000,
    dataset: {
      source: data,
    },
    xAxis: {
      type: "category",
    },
    yAxis: {
      gridIndex: 0,
    },
    grid: {
      top: "55%",
    },
    series: [
      { type: "line", encode: { x: 0, y: 1 }, seriesLayoutBy: "row" },
    ],
  };
  barRaceChart.setOption(initOption);
}

function screenAdapter() {
  if (barRaceChart) {
    barRaceChart.resize();
  }
}


onMounted(async () => {
  let { data } = await getData(path);
  initChart(data);
  window.addEventListener("resize", screenAdapter);
});
</script>

<style></style>
