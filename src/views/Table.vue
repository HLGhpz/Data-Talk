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

const createColumns = ({ sendMail }) => {
  return [
    {
      title: 'Name',
      key: 'name'
    },
    {
      title: 'Age',
      key: 'age'
    },
    {
      title: 'Address',
      key: 'address'
    },
    {
      title: 'tag',
      key: 'tag',
      render(row) {
          return h(
            NTag,
            {
              style: {
                marginRight: '6px'
              },
              type: 'info'
            },
            {
              default: () => row.tag
            }
          )
      }
    },
    {
      title: 'Action',
      key: 'actions',
      render(row) {
        return h(
          NButton,
          {
            size: 'small',
            onClick: () => sendMail(row)
          },
          { default: () => 'Send Email' }
        )
      }
    }
  ]
}

const createData = () => [
  {
    key: 0,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tag: 'nice'
  },
  {
    key: 1,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tag: 'wow'
  },
  {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tag: 'cool'
  }
]

const message = useMessage()
let data = createData()
let columns = createColumns({
  sendMail(rowData) {
    message.info('send mail to ' + rowData.name)
  }
})
let pagination = {
  pageSize: 10
}
</script>