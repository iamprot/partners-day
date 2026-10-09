<script setup lang="ts">
withDefaults(defineProps<{ light?: boolean }>(), { light: false })
</script>

<template>
  <p
    class="mb-7 flex items-center gap-2.5 text-[0.74rem] font-bold uppercase tracking-[0.2em]"
    :class="light ? 'text-canvas/65' : 'text-muted'"
  >
    <span class="size-1.75 shrink-0 rounded-full" :class="light ? 'bg-[#c9bfff]' : 'bg-primary'" />
    <slot />
  </p>
</template>