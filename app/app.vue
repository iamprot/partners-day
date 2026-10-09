<script setup lang="ts">
// keep entrance animations from hiding content when JS is disabled
useHead({
  noscript: [{ innerHTML: '.reveal-init{opacity:1 !important;transform:none !important}' }],
})
</script>

<template>
  <NuxtPage />
</template>