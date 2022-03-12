<template>
  <n-layout position="absolute" has-sider>
    <PageSidebar />
    <n-layout>
      <PageHeader />
      <PageContent />
      <PageFooter />
    </n-layout>
    <table-ball>

    </table-ball>
  </n-layout>
</template>

<script setup>
import { PageContent } from './Content';
import { PageHeader } from './Header';
import { PageFooter } from './Footer';
import { PageSidebar } from './Sidebar';
import {FloatBall} from './FloatBall';
import {TableBall} from './TableBall';
import {TableEdit} from '@/components';
// import {TableEdit} from '@/components';
import {reactive} from 'vue'


</script>