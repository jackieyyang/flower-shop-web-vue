<script setup lang="ts">
import useLocale from '@/hooks/locale'
import navigation from '@/utils/nagivation'
import http from '@/utils/http'
import { ref } from 'vue'
import Header from '@/components/header/index.vue'
import Footer from '@/components/footer/index.vue'

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
  <Header />
  <div class="w-full">
    <div class="max-w-[1280px] flex justify-center items-center mx-auto min-h-24 px-4 xl:px-0">
      This is the index view
      {{ $t('menu.dashboard') }}
      <a-button type="primary" @click="switchLocale">{{
          $t('settings.language')
        }}</a-button>
      <a-button @click="navigation.push('/about')">To 404</a-button>
      <a-input v-model="url" />
      <a-button @click="sendHttp">Send Http</a-button>
      {{ data}}
    </div>
  </div>
  <Footer />
</template>
