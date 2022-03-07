<template>
  <n-layout-header bordered>
    <n-button text @click="router.go(0)">
      <n-icon size="20" :depth="2"><RefreshOutline /></n-icon>
    </n-button>
    <n-breadcrumb>
      <n-breadcrumb-item>Dashboard</n-breadcrumb-item>
      <n-breadcrumb-item>Home</n-breadcrumb-item>
    </n-breadcrumb>
    <n-space :size="20" align="center" style="line-height: 1">
      <n-tooltip>
        <template #trigger>
          <router-link :to="{ name: '' }">
            <n-icon size="22" :depth="2"><RefreshOutline /></n-icon>
          </router-link>
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
import { RefreshOutline } from '@vicons/ionicons5'

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