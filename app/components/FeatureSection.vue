<script setup lang="ts">
// import { FlaskConical, Mic, Route, Wine } from 'lucide-vue-next'

const cards = [
  {
    idx: '01',
    icon: 'lucide:sprout',
    title: 'Где расти в 2027',
    text: 'Рынки, отрасли и задачи, где мы видим потенциал для новых проектов и развития партнерского бизнеса.',
    media: { src: 'images/grow.jpg', alt: 'Abstract study of light on a stage', ratio: 'aspect-[2.1/1]', round: 'rounded-t-[25px]', position: 'top' as const },
  },
  {
    idx: '02',
    icon: 'lucide:heart-handshake',
    title: 'Партнер + вендор',
    text: 'Как распределять роли, ответственность и риски в проектах — и выстраивать модель, которая работает для обеих сторон.',
    tags: ['Взаимодействие', 'Планирование', 'Выгода'],
  },
  {
    idx: '03',
    icon: 'lucide:sparkles',
    title: 'Технологии и AI',
    text: 'Как развивается Knowledge Space, что меняется с появлением AI и какие новые возможности это создает для партнеров.',
    tags: ['Технология', 'Ресурсы', 'Время'],
  },
  {
    idx: '04',
    icon: 'lucide:mic-vocal',
    title: 'Голос партнеров',
    text: 'Опыт, ожидания и взгляд партнеров на рынок: куда двигаться дальше и что стоит изменить в нашей совместной работе.',
    media: { src: 'images/voice.jpg', alt: 'Abstract evening tones over water', ratio: 'aspect-[2.6/1]', round: 'rounded-b-[25px]', position: 'bottom' as const },
  },
]

const layout = [
  { span: 'col-span-7', delay: 50 },
  { span: 'col-span-5', delay: 120 },
  { span: 'col-span-5', delay: 100 },
  { span: 'col-span-7', delay: 160 },
]
</script>

<template>
  <section id="features" class="scroll-mt-21.5 py-[clamp(96px,13vh,160px)]">
    <div class="wrap">
      <SectionHeader
        eyebrow="01 — KS Partners Day 2026"
        title="В фокусе KS Partners Day"
        blurb="Сверим планы на 2027 год: где сегодня есть потенциал для роста, во что стоит инвестировать партнерские компетенции, как выстроить эффективную модель работы с вендором и какие новые возможности открывают технологии."
      />

      <div class="grid grid-cols-12 gap-5.5">
        <div
          v-for="(card, idx) in cards"
          :key="card.idx"
          v-reveal="layout[idx]?.delay"
          class="max-lg:col-span-12"
          :class="layout[idx]?.span"
        >
          <FeatureCard v-bind="card" />
        </div>
      </div>
    </div>
  </section>
</template>