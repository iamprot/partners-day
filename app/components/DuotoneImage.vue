<script setup lang="ts">
withDefaults(
  defineProps<{
    src: string
    alt?: string
    blend?: 'lighten' | 'multiply'
    imgClass?: string
    wrapperClass?: string
  }>(),
  { alt: '', blend: 'lighten', imgClass: '', wrapperClass: '' },
)
</script>

<template>
  <div class="group/kb isolate overflow-hidden bg-[#e9e7f2]" :class="wrapperClass">
    <img
      :src="src"
      :alt="alt"
      loading="lazy"
      class="h-full w-full object-cover transition-transform duration-7000 ease-soft will-change-transform"
      :class="imgClass"
    />
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 bg-primary"
      :class="blend === 'multiply' ? 'mix-blend-multiply opacity-90' : 'mix-blend-lighten'"
    />
  </div>
</template>