import { h } from 'vue'
import { NTag } from 'naive-ui'
import { Icon } from '@/components'

const targetColor = {
  Project: '#80CBC4',
  Collect: '#26A69A',
  Make: '#00897B',
  Achieve: '#00695C',
  Pause: '#EE3F4D',
  Abolish: '#82202B'
}

const createColumns = (showModal, targetInfo) => {
  return [
    {
      title: 'ID',
      key: 'id',
    },
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

export default createColumns