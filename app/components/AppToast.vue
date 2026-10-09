<script setup lang="ts">
import { useToast } from '~/composables/useToast';

const { message, visible } = useToast()
</script>

<template>
  <Transition
    enter-active-class="transition duration-[400ms] ease-soft"
    enter-from-class="translate-y-4 opacity-0"
    leave-active-class="transition duration-[300ms] ease-soft"
    leave-to-class="translate-y-4 opacity-0"
  >
    <div
      v-if="visible"
      role="status"
      class="fixed bottom-5.5 right-5.5 z-95 flex items-center gap-3 rounded-2xl bg-[#1d1250] px-4.5 py-3.25 text-[0.9rem] text-canvas shadow-[0_22px_50px_-20px_rgba(29,18,80,0.65)]"
    >
      <span class="grid size-6.5 shrink-0 place-items-center rounded-full bg-white/15"><Icon name="mdi:check" class="size-3.5" /></span>
      <span>{{ message }}</span>
    </div>
  </Transition>
</template>