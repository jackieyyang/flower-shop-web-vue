<script setup lang="ts">
import useLocale from '@/hooks/locale'
import { Navigation } from '@/utils/nagivation'

const i18n = useLocale()
const switchLocale = () => {
  const currentLocale = i18n.currentLocale.value
  const newLocale = currentLocale === 'zh-CN' ? 'en-US' : 'zh-CN'
  i18n.changeLocale(newLocale)
}
</script>

<template>
  This is the index view
  {{ $t('menu.dashboard') }}
  <a-button type="primary" @click="switchLocale">{{
    $t('settings.language')
  }}</a-button>
  <a-button @click="Navigation.push('/about')">To 404</a-button>
  <a-button @click="s">Get current path</a-button>
</template>
