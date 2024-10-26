<script setup lang="ts">
import ServerError from '@/assets/images/exception/500.vue'
import { Navigation } from '@/utils/nagivation'
</script>

<template>
  <a-result :status="null" :title="$t('menu.exception.500')" :subtitle="$t('exception.result.500.description')">
    <template #icon>
      <ServerError class="w-64"/>
    </template>
    <template #extra>
      <a-button type="primary" @click="Navigation.back()">{{ $t('exception.result.500.back') }}</a-button>
    </template>
  </a-result>
</template>

<style scoped>

</style>
