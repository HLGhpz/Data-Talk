<template>
  <n-space :size="20" align="center" style="line-height: 1">
    <n-tooltip>
      <template #trigger>
          <Icon @click="setScreen" type="resize" size="30" color="#0e7a0d"></Icon>
      </template>
      全屏
    </n-tooltip>
  </n-space>
  <div
    class="chart-wrapper"
    :style="{ height: `${chartHeight}px` }"
    ref="chartDom"
  ></div>
</template>

<script setup>
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'
import { getData } from '@/api/request.js'
import { useMessage } from 'naive-ui'
import bus from '@/api/bus'

const message = useMessage()
let chartDom = ref(null)
let barRaceChart = ref(null)
let path = './data/01-kaoyan'
let chartHeight = ref(500)
import screenfull from 'screenfull'
import { Icon } from '@/components'

function initChart(data) {
  chartHeight.value = window.innerHeight
  barRaceChart = echarts.init(chartDom.value)
  let initOption = {
    animationDuration: 100000,
    dataset: {
      source: data
    },
    xAxis: {
      type: 'category'
    },
    yAxis: {
      gridIndex: 0
    },
    grid: {
      // top: '55%'
    },
    series: [{ type: 'line', encode: { x: 0, y: 1 }, seriesLayoutBy: 'row' }]
  }
  barRaceChart.setOption(initOption)
}

function screenAdapter() {
  console.log('screenAdapter')
  chartHeight.value = window.innerHeight
  if (barRaceChart) {
    barRaceChart.resize()
  }
}

function setScreen() {
  if (screenfull.isEnabled) {
    screenfull.toggle(chartDom.value)
  } else {
    message.error('当前浏览器不支持全屏')
  }
}

onMounted(async () => {
  let { data } = await getData(path)
  initChart(data)
  window.addEventListener('resize', screenAdapter)
})
</script>

<style>
.chart-wrapper {
  width: 100%;
}
</style>
