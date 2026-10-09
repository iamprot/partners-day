<script setup lang="ts">
import { useChime } from '~/composables/useChime'

const { enabled, played, label, play, toggle } = useChime()

function onScroll() {
  if (enabled.value && !played.value) {
    played.value = true
    play()
    label.value = 'Chime on'
  }
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <button
    type="button"
    :aria-pressed="enabled"
    class="fixed bottom-5.5 left-5.5 z-90 inline-flex items-center gap-2.5 rounded-full border bg-white/78 px-4.25 py-2.5 text-[0.82rem] font-medium backdrop-blur-md transition-[color,border-color,transform] duration-300 hover:-translate-y-px"
    :class="enabled ? 'border-primary/40 text-primary' : 'border-hairline text-muted hover:border-primary/35 hover:text-primary'"
    @click="toggle"
  >
    <Icon name="lucide:volume-x" v-if="!enabled" class="size-3.75" />
    <Icon name="lucide:volume-2" v-else class="size-3.75" />
    <span>{{ label }}</span>
  </button>
</template>