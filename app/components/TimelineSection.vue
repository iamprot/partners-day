<script setup lang="ts">
import { timeline } from '~/utils/event';

const openId = ref<string | null>(null)

function toggle(id: string) {
  openId.value = openId.value === id ? null : id
}
</script>

<template>
  <section id="timeline" class="scroll-mt-21.5 py-[clamp(96px,13vh,160px)]">
    <div class="wrap">
      <SectionHeader
        eyebrow="04 — Как все пройдет 27 ноября"
        title="Программа"
        blurb="Программа формируется. Темы и время могут быть скорректированы."
      />

      <div class="border-t border-hairline">
        <TimelineItem
          v-for="(s, i) in timeline"
          :key="s.id"
          v-reveal="i * 40"
          :session="s"
          :open="openId === s.id"
          @toggle="toggle(s.id)"
        />
      </div>
    </div>
  </section>
</template>