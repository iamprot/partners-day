<script setup lang="ts">
const scrolled = ref(false)

function onScroll() { scrolled.value = window.scrollY > 40 }

const links = [
  { label: 'О мероприятии', to: '#features' },
  { label: 'Партнеры', to: '#partners' },
  { label: 'Программа', to: '#timeline' },
  { label: 'Регистрация', to: '#contact' },
]

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-70 flex items-center justify-between gap-5 border-b px-[clamp(20px,4vw,44px)] transition-[padding,background-color,border-color] duration-300 ease-soft"
    :class="scrolled ? 'border-hairline bg-canvas/80 py-3 backdrop-blur-[14px]' : 'border-transparent py-5'"
  >
    <a href="#top" class="flex items-center gap-2.75">
      <BrandMark class="h-12" />
    </a>

    <nav class="hidden gap-7.5 md:flex">
      <a
        v-for="l in links"
        :key="l.to"
        :href="l.to"
        class="text-[0.92rem] font-medium text-muted transition-colors duration-300 hover:text-primary"
      >{{ l.label }}</a>
    </nav>

    <AppButton to="#contact" size="sm">Зарегистрироваться</AppButton>
  </header>
</template>