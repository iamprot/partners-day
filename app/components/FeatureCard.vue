<script setup lang="ts">

export interface CardMedia {
  src: string
  alt: string
  ratio: string
  round: string
  position: 'top' | 'bottom'
}

const props = defineProps<{
  idx: string
  icon: string
  title: string
  text: string
  tags?: string[]
  media?: CardMedia
}>()

const el = ref<HTMLElement>()

const kbZoom =
  'scale-[1.2] grayscale contrast-[1.06] group-hover/kb:translate-x-[1.2%] group-hover/kb:-translate-y-[1.2%] group-hover/kb:scale-[1.1] transition-all ease-soft'

function onMove(e: MouseEvent) {
  if (!el.value) return
  const r = el.value.getBoundingClientRect()
  el.value.style.setProperty('--mx', `${e.clientX - r.left}px`)
  el.value.style.setProperty('--my', `${e.clientY - r.top}px`)
}
</script>

<template>
  <article
    ref="el"
    class="group/card relative flex h-full flex-col overflow-hidden rounded-[26px] border border-hairline bg-white transition-all duration-500 ease-soft hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_26px_60px_-32px_rgba(68,19,217,0.28)]"
    @mousemove="onMove"
  >
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(480px_circle_at_var(--mx,50%)_var(--my,50%),rgba(68,19,217,0.07),transparent_65%)] opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
    />

    <DuotoneImage
      v-if="media?.position === 'top'"
      :src="media.src"
      :alt="media.alt"
      :wrapper-class="`relative shrink-0 ${media.ratio} ${media.round}`"
      :img-class="kbZoom"
    />

    <div class="relative px-8 pb-8.5 pt-7.5">
      <div class="mb-5 flex items-center justify-between">
        <span class="font-display text-base font-semibold text-primary">{{ props.idx }}</span>
        <span class="grid size-10.5 place-items-center rounded-xl border border-hairline bg-white text-primary">
          <Icon :name="icon" class="size-4.5" />
        </span>
      </div>
      <h3 class="mb-3 font-display text-[clamp(1.28rem,2vw,1.55rem)] font-semibold tracking-[-0.015em]">{{ props.title }}</h3>
      <p class="text-base text-muted">{{ props.text }}</p>

      <div v-if="tags?.length" class="mt-5 flex flex-wrap gap-2">
        <span
          v-for="t in tags"
          :key="t"
          class="rounded-full border border-hairline px-3.25 py-1.5 text-[0.72rem] font-medium text-muted"
        >{{ t }}</span>
      </div>
    </div>

    <DuotoneImage
      v-if="media?.position === 'bottom'"
      :src="media.src"
      :alt="media.alt"
      :wrapper-class="`relative mt-auto shrink-0 ${media.ratio} ${media.round}`"
      :img-class="kbZoom"
    />
  </article>
</template>