<template>
  <n-space vertical :size="12">
    <n-data-table
      size="small"
      :columns="columns"
      :data="data"
      :pagination="pagination"
    />
  </n-space>
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
// 导入组件
import { Icon, TableEdit } from '@/components'

// 导入方法
import { useMessage } from 'naive-ui'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import bus from '@/api/bus'
import { selectInfo, createInfo, updateInfo, deleteInfo } from '@/api/crud'
import createColumns from './columnConfig'
const message = useMessage()

// 获取数据
const targetPath = '/info/target'
let target = ref('')
const targetColor = {
  Project: '#80CBC4',
  Collect: '#26A69A',
  Make: '#00897B',
  Achieve: '#00695C',
  Pause: '#EE3F4D',
  Abolish: '#82202B'
}

// 渲染数据
const showModalRef = ref(false)
let showModal = showModalRef
let targetInfo = {
  title: '',
  abstract: '',
  tag: '',
  type: 'Update'
}
let data = ref([])
let pagination = {
  pageSize: 10
}
let columns = createColumns(showModal, targetInfo)

// 反馈子组件的修改
const updateShowModal = (v) => {
  console.log('updateShowModal', v)
  if (v === 'success') {
    message.success('提交成功')
    showModal.value = false
  } else {
    message.error('提交失败')
  }
}

// 判断是否更新数据
const updateFlag = async (msg) => {
  let target = await selectInfo(targetPath)
  data.value = target.data
}

onMounted(async () => {
  let target = await selectInfo(targetPath)
  data.value = target.data
  bus.on('updateFlag', updateFlag)
})

onBeforeUnmount(() => {
  bus.off('updateFlag', updateFlag)
})
</script>