import { Message } from '@arco-design/web-vue'
import type { useI18n } from 'vue-i18n'

type TFunction = ReturnType<typeof useI18n>['t']

let t: TFunction | null = null

export const initI18nT = (i18nT: TFunction) => {
  t = i18nT
}

export const functionNotOpen = () => {
  Message.error(t!('notification.function.fail'))
}

export default {
  initI18nT,
  functionNotOpen
}
