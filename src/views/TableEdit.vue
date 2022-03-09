<template>
  <n-form
    ref="formRef"
    :model="model"
    :rules="rules"
    label-placement="left"
    label-width="auto"
    require-mark-placement="right-hanging"
    :size="size"
    :style="{
      maxWidth: '640px'
    }"
  >
    <n-form-item label="名称" path="inputValue">
      <n-input v-model:value="model.inputValue" placeholder="题材" />
    </n-form-item>
    <n-form-item label="简介" path="textareaValue">
      <n-input
        v-model:value="model.textareaValue"
        placeholder="简介"
        type="textarea"
        :autosize="{
          minRows: 3,
          maxRows: 5
        }"
      />
    </n-form-item>
    <n-form-item label="进度" path="selectValue">
      <n-select
        v-model:value="model.selectValue"
        placeholder=""
        :options="generalOptions"
      />
    </n-form-item>
  </n-form>

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { FormInst, FormItemRule, useMessage } from 'naive-ui'

export default defineComponent({
  setup() {
    const formRef = ref<FormInst | null>(null)
    const message = useMessage()
    return {
      formRef,
      size: ref('medium'),
      model: ref({
        inputValue: null,
        textareaValue: null,
        selectValue: null
      }),
      generalOptions: [
        'Project',
        'Collect',
        'Make',
        'Achieve',
        'Pause',
        'Abolish'
      ].map((v) => ({
        label: v,
        value: v
      })),
      rules: {
        inputValue: {
          required: true,
          trigger: ['blur', 'input'],
          message: '请输入 题材名称'
        },
        textareaValue: {
          required: true,
          trigger: ['blur', 'input'],
          message: '请输入 简介'
        },
        selectValue: {
          required: true,
          trigger: ['blur', 'change'],
          message: '请选择 进度'
        },
      }
    }
  }
})
</script>