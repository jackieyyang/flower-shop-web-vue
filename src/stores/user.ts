import { defineStore } from 'pinia'
import { type Ref, ref } from 'vue'

export const userStore = defineStore('user', () => {

  const userToken: Ref<string> = ref('')

  const setUserToken = (token: string) => {
    userToken.value = token
  }
  const getUserToken = () => userToken.value

  return { setUserToken, getUserToken }

}, { persist: true })
