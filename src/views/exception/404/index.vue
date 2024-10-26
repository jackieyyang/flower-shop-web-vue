<script setup lang="ts">
import NotFound from '@/assets/images/exception/404.vue'
import { Navigation } from '@/utils/nagivation'
</script>

<template>
  <a-result :status="null" :title="$t('menu.exception.404')" :subtitle="$t('exception.result.404.description')">
    <template #icon>
      <NotFound class="w-64 mr-3"/>
    </template>
    <template #extra>
      <a-space :size="36">
        <a-button type="secondary" @click="Navigation.refresh()">{{ $t('exception.result.404.retry') }}</a-button>
        <a-button type="primary" @click="Navigation.back()">{{ $t('exception.result.404.back') }}</a-button>
      </a-space>
    </template>
  </a-result>
</template>

<style scoped>

</style>
