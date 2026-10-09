<script setup lang="ts">
const links = [
  { label: 'О мероприятии', to: '#features' },
  { label: 'Партнеры', to: '#partners' },
  { label: 'Программа', to: '#timeline' },
  { label: 'Регистрация', to: '#contact' },
  { label: 'Наверх', to: '#top' },
]
</script>

<template>
  <footer class="border-t border-hairline pb-8.5 pt-14">
    <div class="wrap flex flex-wrap items-start justify-between gap-9">
      <div class="flex items-start gap-3.5">
        <BrandMark class="mt-1 h-9" />
        <div>
          <!-- <strong class="block font-display text-[1.05rem] font-semibold">Partners Day ’26</strong> -->
          <span class="block max-w-[46ch] text-[0.9rem] text-muted">Российская no-code платформа для интегрированного бизнес-планирования.</span>
        </div>
      </div>

      <nav class="flex flex-wrap gap-6">
        <a
          v-for="l in links"
          :key="l.to"
          :href="l.to"
          class="text-[0.9rem] text-muted transition-colors duration-300 hover:text-primary"
        >{{ l.label }}</a>
      </nav>
    </div>

    <div class="wrap mt-11 flex flex-wrap justify-between gap-5 border-t border-hairline pt-5.5 text-xs text-muted">
      <span>© KS Partners Day 2026 / Москва</span>
      <span>27 ноября 2026, 10:30–18:00 / Офис AXENIX, Павелецкая площадь, 2/2, Future Camp, 8 этаж</span>
    </div>
  </footer>
</template>