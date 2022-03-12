<template>
  <div class="n-float-ball">
    <icon class="n-float-ball-icon" type="ionitron" size="30" :depth="2"></icon>
  </div>
</template>

<script setup>
import { Icon } from '@/components'
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