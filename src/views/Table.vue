<template>
  <n-space vertical :size="12">
    <n-data-table
      size="small"
      :columns="columns"
      :data="data"
      :pagination="pagination"
    />
  </n-space>
</template>

<script setup>
import { ref, onMounted, h } from 'vue'
import { NTag, NButton, useMessage } from 'naive-ui'
// import axios from 'axios'

import { Icon } from '@/components'

import { selectInfo, creatInfo, updateInfo, deleteInfo } from '@/api/crud.js'
import moment from 'moment'

const targetPath = 'target'
let target = ref('')
const targetColor = {
  Project: '#80CBC4',
  Collect: '#26A69A',
  Make: '#00897B',
  Achieve: '#00695C',
  Pause: '#EE3F4D',
  Abolish: '#82202B'
}
const createColumns = ({ sendMail }) => {
  return [
    {
      title: 'Name',
      key: 'name'
    },
    {
      title: 'Abstract',
      key: 'abstract'
    },
    {
      title: 'UpDateTime',
      key: 'updateTime'
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
            onClick: () => sendMail(row)
          },
          {}
        )
      }
    }
  ]
}

const message = useMessage()
let data = ref([])
let columns = createColumns({
  sendMail(rowData) {
    message.info('send mail to ' + rowData.name)
  }
})
let pagination = {
  pageSize: 10
}

onMounted(async () => {
  let target = await selectInfo(targetPath)
  data.value = target.data.targetList
})
</script>