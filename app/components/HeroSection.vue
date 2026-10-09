<script setup lang="ts">
// import { ArrowDown, ArrowRight, Calendar, MapPin, Users } from 'lucide-vue-next'
</script>

<template>
  <section id="hero" class="relative flex min-h-svh items-center overflow-hidden pb-22.5 pt-32.5 max-lg:pt-37.5">
    <div aria-hidden="true" class="pointer-events-none absolute inset-0 bg-[radial-gradient(52%_58%_at_72%_44%,rgba(68,19,217,0.07),transparent_70%)]" />

    <AuraVisual />

    <div class="wrap relative z-2">
      <SectionLabel v-reveal>Встреча партнеров Knowledge Space</SectionLabel>

      <h1 v-reveal="80" class="mb-8.5 font-display text-[clamp(4.2rem,11.5vw,8rem)] font-semibold leading-[0.96] tracking-[-0.035em]">
        KS Partners<br />Day<span class="ml-[0.2em] inline-block rounded-full bg-primary px-[0.68em] py-[0.3em] align-[0.62em] text-[0.24em] font-semibold tracking-[0.02em] text-canvas">’2026</span>
      </h1>

      <p v-reveal="160" class="max-w-[64ch] text-[clamp(1.08rem,1.6vw,1.18rem)] leading-[1.7] text-muted">
        Поговорим о том, где искать новые возможности для бизнеса в 2027 году, как развивать партнерскую экспертизу и эффективнее реализовывать проекты вместе с Knowledge Space.
      </p>

      <div v-reveal="240" class="mt-9.5 flex flex-wrap gap-3.5">
        <AppButton to="#contact">Зарегистрироваться <Icon name="lucide:arrow-right" class="size-4" /></AppButton>
        <AppButton to="#features" variant="ghost">Подробнее о событии <Icon name="lucide:arrow-down" class="size-4" /></AppButton>
      </div>

      <div v-reveal="320" class="mt-14 flex flex-wrap gap-7 text-[0.92rem] text-muted">
        <span class="inline-flex items-center gap-2"><Icon name="lucide:calendar" class="size-4 text-primary" />27 ноября 2026</span>
        <span class="inline-flex items-center gap-2"><Icon name="lucide:map-pin" class="size-4 text-primary" />Офис &laquo;AXENIX&raquo;, Москва, Павелецкая площадь, 2/2, Future Camp, 8 этаж</span>
        <!-- <span class="inline-flex items-center gap-2"><Icon name="lucide:users" class="size-4 text-primary" />180 seats</span> -->
      </div>
    </div>

    <div aria-hidden="true" class="absolute bottom-4 left-1/2 z-2 flex -translate-x-1/2 flex-col items-center gap-2.5 [@media(max-width:640px),(max-height:720px)]:hidden">
      <span class="text-[0.64rem] uppercase tracking-[0.24em] text-muted">Скролл</span>
      <span class="relative block h-11 w-px overflow-hidden bg-hairline">
        <span class="absolute left-[calc(50%-2px)] top-0 h-3 w-1 animate-drop rounded-sm bg-primary" />
      </span>
    </div>
  </section>
</template>