<script setup lang="ts">
import useLocale from '@/hooks/locale'
import { Navigation } from '@/utils/nagivation'
import http from '@/utils/http'
import { h, ref } from 'vue'

const i18n = useLocale()
const switchLocale = () => {
  const currentLocale = i18n.currentLocale.value
  const newLocale = currentLocale === 'zh-CN' ? 'en-US' : 'zh-CN'
  i18n.changeLocale(newLocale)
}

const url = ref('')
const data = ref(null)

const sendHttp = async () => {
  data.value = await http.get(url.value)
}
</script>

<template>
  This is the index view
  {{ $t('menu.dashboard') }}
  <a-button type="primary" @click="switchLocale">{{
    $t('settings.language')
  }}</a-button>
  <a-button @click="Navigation.push('/about')">To 404</a-button>
  <a-input v-model="url" />
  <a-button @click="sendHttp">Send Http</a-button>
  {{ data}}
</template>
