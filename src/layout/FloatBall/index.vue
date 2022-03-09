<template>
  <div class="n-float-ball" @click="showModal = true">
    <icon class="n-float-ball-icon" type="ionitron" size="30" :depth="2"></icon>
  </div>
  <n-modal v-model:show="showModal">
    <n-card
      style="width: 600px"
      title="模态框"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <template #header-extra> 噢! </template>
      内容
      <template #footer> 尾部 </template>
    </n-card>
  </n-modal>
</template>

<script setup>
import { Icon } from '@/components'
import { ref } from 'vue'

let showModal = ref(false)
</script>

<style>
.n-float-ball {
  position: fixed;
  right: 40px;
  bottom: 40px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 9999;
  cursor: pointer;
}
.n-float-ball-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>