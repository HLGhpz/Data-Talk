<template>
  <n-layout-header bordered>
    <n-button text @click="router.go(0)">
      <icon type="refresh" size="20" :depth="2"></icon>
    </n-button>
    <n-breadcrumb>
      <n-breadcrumb-item>HLG</n-breadcrumb-item>
      <n-breadcrumb-item>Home</n-breadcrumb-item>
    </n-breadcrumb>
    <n-space :size="20" align="center" style="line-height: 1">
      <n-tooltip>
        <template #trigger>
          <n-a href="https://github.com/HLGhpz/Data-Talk" target="_blank">
            <icon type="github" size="22" :depth="2"></icon>
          </n-a>
        </template>
        Dashboard help
      </n-tooltip>
    </n-space>
  </n-layout-header>
</template>

<script setup>
import { h, computed } from 'vue'
import { useMessage } from 'naive-ui'
import { useRouter, RouterLink } from 'vue-router'
import { Icon } from '@/components'

const router = useRouter()
</script>

<style scoped>
.n-layout-header {
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  padding: 9px 18px;
}

.n-button {
  margin-right: 15px;
}

.n-space {
  margin-left: auto;
}
</style>