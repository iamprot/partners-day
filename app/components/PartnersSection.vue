<script setup lang="ts">
import { partners } from '~/utils/event';

</script>

<template>
  <section id="partners" class="scroll-mt-21.5 py-[clamp(96px,13vh,160px)]">
    <div class="wrap">
      <SectionHeader
        eyebrow="03 — Кого мы ждем"
        title="Мы вместе"
        blurb="В прошлом году к нам присоединилась 21 компания партнер. Вот некоторые из компаний, чьи представители будут сидеть рядом с&nbsp;вами:"
      />

      <div v-reveal class="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-hairline bg-hairline md:grid-cols-4">
        <div
          v-for="p in partners"
          :key="p.name"
          class="flex items-center justify-center gap-3 bg-canvas px-5 py-13 text-[#8f8c9c] transition-colors duration-400 hover:bg-white hover:text-primary max-sm:px-3.5 max-sm:py-9.5"
        >
          <!-- <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" class="size-5.5 shrink-0" v-html="p.svg" /> -->
          <span :class="p.nameClass">{{ p.name }}</span>
        </div>
      </div>

      <!-- <p v-reveal="100" class="mt-6.5 text-[0.95rem] text-muted">
        …and 33 more, announced in January.
        <a href="#contact" class="text-primary underline decoration-1 underline-offset-[3px]">Request the full list</a>
      </p> -->
    </div>
  </section>
</template>