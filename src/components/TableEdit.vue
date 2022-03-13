<template>
  <n-form
    ref="formRef"
    :model="model"
    :rules="rules"
    label-placement="top"
    label-width="auto"
    require-mark-placement="right-hanging"
    :size="size"
    :style="{
      maxWidth: '640px'
    }"
  >
    <n-form-item label="名称" path="title">
      <n-input v-model:value="model.title" placeholder="题材" />
    </n-form-item>
    <n-form-item label="简介" path="abstract">
      <n-input
        v-model:value="model.abstract"
        placeholder="简介"
        type="textarea"
        :autosize="{
          minRows: 3,
          maxRows: 5
        }"
      />
    </n-form-item>
    <n-form-item label="进度" path="tag">
      <n-select
        v-model:value="model.tag"
        placeholder=""
        :options="generalOptions"
      />
    </n-form-item>
  </n-form>
  <n-button
    type="primary"
    :disabled="
      model.title === null || model.abstract === null || model.tag === null
    "
    round
    block
    secondary
    strong
    @click="submitInfo"
    >提交</n-button
  >
</template>

<script setup>
import { ref } from 'vue'
import { useMessage } from 'naive-ui'
import { createInfo } from '@/api/crud'
import bus from '@/api/bus'

const props = defineProps({
  targetInfo: Object
})

const emits = defineEmits(['updateShowModal'])

let formRef = ref(null)
let size = ref('medium')
let model = ref({
  title: props.targetInfo.title,
  abstract: props.targetInfo.abstract,
  tag: props.targetInfo.tag,
  type: props.targetInfo.type
})
let generalOptions = [
  'Project',
  'Collect',
  'Make',
  'Achieve',
  'Pause',
  'Abolish'
].map((v) => ({
  label: v,
  value: v
}))
let rules = {
  title: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入 题材名称'
  },
  abstract: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入 简介'
  },
  tag: {
    required: true,
    trigger: ['blur', 'change'],
    message: '请选择 进度'
  }
}
const path = '/info/target'

async function submitInfo() {
  console.log(model.value)
  if (model.value.type === "Add"){
    console.log('add')
    // await createInfo(path, model.value)
  } else if(model.value.type === "Update"){
    console.log('update')
    // await updateInfo(path, model.value)
  }
  // try {
  //   let res = await createInfo(path, model.value)
  //   if (res.status === 200) {
  //     emits('updateShowModal', 'success')
  //     bus.emit('updateFlag', 'success')
  //   }
  // } catch {
  //   emits('updateShowModal', 'fail')
  // }
}
</script>

<style>
.submitButton {
  text-align: center;
  display: block;
  margin: 0 auto;
}
</style>