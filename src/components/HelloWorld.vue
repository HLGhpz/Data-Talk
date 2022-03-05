<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})
</script>

<template>
  <div>
    <n-button>{{ msg }}</n-button>
  </div>
</template>

<style scoped>
</style>
