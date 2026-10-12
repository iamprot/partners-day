<script setup lang="ts">
const section = ref<HTMLElement>()

// масштаб фона: 1.14 при входе секции → 1.1 при полном проходе
const SCALE_FROM = 1.16
const SCALE_TO = 1.1

let ticking = false

function update() {
  ticking = false
  const el = section.value
  if (!el) return

  const rect = el.getBoundingClientRect()
  const vh = window.innerHeight
  // 0 — секция коснулась нижней границы вьюпорта,
  // 1 — нижняя граница секции ушла за верхнюю
  const progress = Math.min(1, Math.max(0, (vh - rect.top) / (vh + rect.height)))
  const scale = SCALE_FROM + (SCALE_TO - SCALE_FROM) * progress
  el.style.setProperty('--stmt-scale', scale.toFixed(4))
}

function requestTick() {
  if (!ticking) {
    ticking = true
    requestAnimationFrame(update) // одно измерение и одна запись на кадр
  }
}

onMounted(() => {
  // при reduced-motion оставляем статичный масштаб
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
  // в браузерах с нативным scroll-driven CSS эффект делает .stmt-zoom из main.css
  if (CSS.supports('animation-timeline: view()')) return

  update() // стартовое значение сразу — корректно и при перезагрузке в середине страницы
  window.addEventListener('scroll', requestTick, { passive: true })
  window.addEventListener('resize', requestTick, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', requestTick)
  window.removeEventListener('resize', requestTick)
})
</script>

<template>
  <section
    ref="section"
    class="group/stmt relative grid min-h-[92vh] place-items-center overflow-hidden py-27.5 [--stmt-scale:1.16]"
  >
    <DuotoneImage
      src="images/004.jpg"
      alt=""
      blend="multiply"
      wrapper-class="absolute inset-0 scale-(--stmt-scale) [will-change:scale] stmt-zoom"
      img-class="grayscale brightness-[0.62] group-hover/stmt:scale-[1.07]"
    />
    <div aria-hidden="true" class="absolute inset-0 bg-accent/45" />

    <div class="wrap relative z-2">
      <p v-reveal class="mb-7 text-[0.74rem] font-bold uppercase tracking-[0.22em] text-canvas/70">Слово организатора</p>
      <blockquote v-reveal="100" class="max-w-[24ch] text-balance font-display text-[clamp(1.75rem,4.2vw,3rem)] font-medium leading-relaxed md:leading-tight tracking-[-0.015em] text-canvas">
        “Сильная партнерская экосистема строится там, где вендор и партнер понимают цели друг друга, открыто обсуждают сложности и вместе создают новые точки роста.”
      </blockquote>
      <p v-reveal="180" class="mt-8 text-[0.95rem] text-canvas/70"> Филипп Ковригин — Директор по работе с партнерами</p>
    </div>
  </section>
</template>