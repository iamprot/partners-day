<script setup lang="ts">
const root = ref<HTMLElement>()
const drift = ref<HTMLElement>()
const cleanups: Array<() => void> = []

onMounted(() => {
  if (!matchMedia('(pointer: fine)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const section = root.value?.closest('section')
  if (!section) return

  let tx = 0, ty = 0, cx = 0, cy = 0, raf = 0

  const onMove = (e: MouseEvent) => {
    const r = section.getBoundingClientRect()
    tx = ((e.clientX - r.left) / r.width - 0.5) * 30
    ty = ((e.clientY - r.top) / r.height - 0.5) * 20
  }
  const onLeave = () => { tx = 0; ty = 0 }
  const loop = () => {
    cx += (tx - cx) * 0.04
    cy += (ty - cy) * 0.04
    drift.value?.style.setProperty('transform', `translate(${cx.toFixed(2)}px, ${cy.toFixed(2)}px)`)
    raf = requestAnimationFrame(loop)
  }

  section.addEventListener('mousemove', onMove)
  section.addEventListener('mouseleave', onLeave)
  raf = requestAnimationFrame(loop)

  cleanups.push(() => {
    section.removeEventListener('mousemove', onMove)
    section.removeEventListener('mouseleave', onLeave)
    cancelAnimationFrame(raf)
  })
})

onUnmounted(() => cleanups.forEach((fn) => fn()))
</script>

<template>
  <div
    ref="root"
    aria-hidden="true"
    class="pointer-events-none absolute right-[clamp(-180px,-8vw,-30px)] top-1/2 z-1 aspect-square w-[min(56vw,800px)] -translate-y-1/2 max-lg:right-[-52vw] max-lg:top-[36%] max-lg:w-[135vw] max-lg:translate-y-0 max-lg:opacity-55"
  >
    <div ref="drift" class="absolute inset-0">
      <!-- one breath every four seconds -->
      <div class="absolute inset-0 animate-breathe">
        <span class="absolute left-[6%] top-[12%] h-[52%] w-[52%] rounded-full bg-primary opacity-50 blur-[60px]" />
        <span class="absolute right-[3%] top-[2%] h-[44%] w-[44%] rounded-full bg-accent opacity-45 blur-3xl" />
        <span class="absolute bottom-[5%] left-[26%] h-[40%] w-[40%] rounded-full bg-[#8f7bff] opacity-50 blur-[56px]" />
        <span class="absolute bottom-[18%] right-[16%] h-[26%] w-[26%] rounded-full bg-[#d9d2ff] opacity-85 blur-[38px]" />

<span class="absolute left-1/2 top-1/2 aspect-square w-[36%] -translate-x-1/2 -translate-y-1/2 animate-ripple rounded-full border border-primary/35 opacity-0" />
<span class="absolute left-1/2 top-1/2 aspect-square w-[36%] -translate-x-1/2 -translate-y-1/2 animate-ripple-late rounded-full border border-primary/35 opacity-0" />

        <span class="absolute inset-[5%] animate-orbit rounded-full border border-primary/25 before:absolute before:left-[calc(50%-3.5px)] before:top-[-3.5px] before:size-1.75 before:rounded-full before:bg-accent" />
        <span class="absolute inset-[19%] animate-orbit-rev rounded-full border border-accent/20 before:absolute before:left-[calc(50%-3.5px)] before:top-[-3.5px] before:size-1.75 before:rounded-full before:bg-accent" />

        <span class="absolute left-1/2 top-1/2 size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_0_7px_rgba(68,19,217,0.12)]" />
      </div>
    </div>
  </div>
</template>