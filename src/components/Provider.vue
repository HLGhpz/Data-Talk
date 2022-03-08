<template>
  <n-config-provider>
    <n-dialog-provider>
      <n-message-provider>
        <n-notification-provider>
          <n-loading-bar-provider>
            <slot />
          </n-loading-bar-provider>
        </n-notification-provider>
      </n-message-provider>
    </n-dialog-provider>
  </n-config-provider>
</template>

<script setup>

</script>