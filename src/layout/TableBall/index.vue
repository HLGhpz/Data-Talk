<template>
  <float-ball @click="showModal = true"></float-ball>
  <n-modal v-model:show="showModal" :mask-closable="false" preset="dialog">
    <template #icon>
      <icon type="glasses"></icon>
    </template>
    <template #header>
      <div>HLGhpz</div>
    </template>
    <table-edit
      :target-info="targetInfo"
      @updateShowModal="updateShowModal"
    ></table-edit>
  </n-modal>
</template>

<script setup>
import { ref } from 'vue'
import { useMessage } from 'naive-ui'
import { Icon, TableEdit, FloatBall } from '@/components'

const message = useMessage()
const showModalRef = ref(false)
let showModal = showModalRef

const updateShowModal = (v) => {
  console.log('updateShowModal', v)
  if (v === 'success') {
    message.success('提交成功')
  } else {
    message.error('提交失败')
  }
  showModal.value = false
}

const targetInfo = {
  title: '',
  abstract: '',
  tag: '',
  type: 'Add'
}
</script>

<style lang="less" scoped>
</style>