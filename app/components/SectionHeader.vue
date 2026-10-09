<script setup lang="ts">
defineProps<{ eyebrow: string; title: string; blurb: string }>()
</script>

<template>
  <header class="mb-[clamp(48px,7vh,72px)]">
    <SectionLabel v-reveal>{{ eyebrow }}</SectionLabel>
    <div class="grid items-end gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] max-lg:items-start max-lg:gap-4.5">
      <h2 v-reveal="60" class="font-display text-[clamp(2.5rem,5.2vw,4.3rem)] font-semibold leading-[1.02] tracking-tight">
        {{ title }}
      </h2>
      <p v-reveal="120" class="max-w-[46ch] text-[1.02rem] text-muted">{{ blurb }}</p>
    </div>
  </header>
</template>