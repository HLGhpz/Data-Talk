<template>
  <div class="popover-grid">
    <n-popover placement="top-end" trigger="click">
      <template #trigger>
        <n-button> Top End </n-button>
      </template>
      <table-edit :target-info="targetInfo"></table-edit>
    </n-popover>
  </div>
</template>

<script setup>
import {TableEdit} from '@/components'
import { reactive, ref } from 'vue'

let overlop = ref(false)
let targetInfo = reactive({
  title: '',
  abstract: '',
  tag: '',
  type: ''
})
</script>

<style>
/* .popover-grid {
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-gap: 12px;
  justify-content: center;
  align-items: center;
} */
</style>