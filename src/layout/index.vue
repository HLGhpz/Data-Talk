<template>
  <n-layout position="absolute" has-sider>
    <PageSidebar />
    <n-layout>
      <PageHeader />
      <PageContent />
      <PageFooter />
    </n-layout>
  </n-layout>
</template>

<script setup>
import { PageContent } from './Content';
import { PageHeader } from './Header';
import { PageFooter } from './Footer';
import { PageSidebar } from './Sidebar';
</script>