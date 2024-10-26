<script setup lang="ts">
import PermissionDenied from '@/assets/images/exception/403.vue'
import { Navigation } from '@/utils/nagivation'
</script>

<template>
  <a-result :status="null" :title="$t('menu.exception.403')" :subtitle="$t('exception.result.403.description')">
    <template #icon>
      <PermissionDenied class="w-64"/>
    </template>
    <template #extra>
      <a-button @click="Navigation.back()">{{ $t('exception.result.403.back') }}</a-button>
    </template>
  </a-result>
</template>

<style scoped>

</style>
