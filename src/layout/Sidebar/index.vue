<template>
  <n-layout-sider
    collapse-mode="transform"
    :collapsed-width="0"
    :width="280"
    bordered
    :collapsed="collapsed"
    class="app-layout-sider"
    show-trigger="bar"
    style="border-top-right-radius: 16px"
    @collapse="collapsed = true"
    @expand="collapsed = false"
  >
    <span class="app-layout-sider__title"> How to use provider </span>
    <n-menu
      :value="activeName"
      :options="layoutOptions"
      :collapsed-width="64"
      :collapsed-icon-size="22"
      @update:value="handleMenuSelect"
    />
  </n-layout-sider>
</template>

<script setup>
import { ref } from 'vue'
const collapsed = ref(false)
const activeName = ref('/')
const layoutOptions = ref([
	{
	  label: 'Home',
	  key: '/',
	},
	{
	  label: 'Request',
	  key: '/request',
	},
	{
		label: 'Message',
		key: '/message',
	},
	{
		label: 'Dialog',
		key: '/dialog',
	},
	{
		label: 'Notification',
		key: '/notification',
	},
	{
		label: 'LoadingBar',
		key: '/loadingBar',
	},
])
const handleMenuSelect = (value) => {
  activeName.value = value
  
}
</script>


<style scoped>
.app-layout-sider__title {
  display: flex;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 20px;
  padding-left: 20px;
  height: 28px;
  color: #333;
  font-weight: 500;
  font-size: 20px;
}
</style>