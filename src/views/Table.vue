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
import { ref, onMounted, h, onBeforeUnmount } from 'vue'
import { NTag, NButton, useMessage } from 'naive-ui'
// import axios from 'axios'
import bus from '@/api/bus'
import { selectInfo, createInfo, updateInfo, deleteInfo } from '@/api/crud.js'
import moment from 'moment'

const message = useMessage()

// 导入组件
import { Icon, TableEdit } from '@/components'


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
let data = ref([])
const createColumns = ({ sendMail }) => {
  return [
    {
      title: 'Title',
      key: 'title'
    },
    {
      title: 'Abstract',
      key: 'abstract'
    },
    {
      title: 'UpdateTime',
      key: 'updatedAt'
    },
    {
      title: 'Tag',
      key: 'tag',
      render(row) {
        return h(
          NTag,
          {
            style: {
              marginRight: '6px',
              color: targetColor[row.tag]
            },
            round: true
          },
          {
            default: () => row.tag
          }
        )
      }
    },
    {
      title: 'Action',
      key: 'action',
      render(row) {
        return h(
          Icon,
          {
            size: '25',
            type: 'settings',
            style: {
              cursor: 'pointer'
            },
            onClick: () => {
              showModal.value = true
              targetInfo.title = row.title
              targetInfo.abstract = row.abstract
              targetInfo.tag = row.tag
              }
          },
          {}
        )
      }
    }
  ]
}

let columns = createColumns({
  sendMail(rowData) {
    message.info('send mail to ' + rowData.name)
  }
})
let pagination = {
  pageSize: 10
}

// 修改数据
const showModalRef = ref(false)
let showModal = showModalRef

const updateShowModal = (v) => {
  console.log('updateShowModal', v)
  if (v === 'success') {
    message.success('提交成功')
    showModal.value = false
  } else {
    message.error('提交失败')
  }
}

let targetInfo = {
  title: '',
  abstract: '',
  tag: '',
  type: 'Update'
}

// 更新数据
const updateFlag = async (msg) => {
  let target = await selectInfo(targetPath)
  data.value = target.data
}

onMounted(async () => {
  let target = await selectInfo(targetPath)
  data.value = target.data
  console.log('onUpdateFlag')
  bus.on('updateFlag', updateFlag)
})

onBeforeUnmount(() => {
  bus.off('updateFlag', updateFlag)
})
</script>