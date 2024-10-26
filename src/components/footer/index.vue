<script setup lang="ts">
import { ref } from 'vue'
import notification from '@/utils/notification'

const iconSize = ref(22)
</script>

<template>
  <div class="w-full bg-cyan-100">
    <div
      class="max-w-[1280px] flex justify-between items-center mx-auto bg-amber-50 px-4 py-2"
    >
      <div class="flex flex-col space-y-1.5">
        <div>&copy; 2024 Jackie Yang. All rights reserved.</div>
        <div>Made with Arco & Tailwind</div>
      </div>
      <div class="flex flex-row space-x-3">
        <icon-qq
          :style="`width: ${iconSize}px; height: ${iconSize}px`"
          class="footer-icon"
          @click="notification.functionNotOpen()"
        />
        <icon-wechat
          :style="`width: ${iconSize}px; height: ${iconSize}px`"
          class="footer-icon"
          @click="notification.functionNotOpen()"
        />
        <icon-twitter
          :style="`width: ${iconSize}px; height: ${iconSize}px`"
          class="footer-icon"
          @click="notification.functionNotOpen()"
        />
        <icon-github
          :style="`width: ${iconSize}px; height: ${iconSize}px`"
          class="footer-icon"
          @click="notification.functionNotOpen()"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer-icon {
  opacity: 0.3;
  transition: opacity 0.3s;
  cursor: pointer;
}

.footer-icon:hover {
  opacity: 1;
}
</style>
