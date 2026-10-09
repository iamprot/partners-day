<script setup lang="ts">
// import { Download, MapPin, Plus } from 'lucide-vue-next'
import type { TimelineSession } from '~/utils/event'
import { downloadICS } from '~/utils/calendar';

defineProps<{ session: TimelineSession; open: boolean }>()

const emit = defineEmits<{ toggle: [] }>()

</script>

<template>
  <article class="border-b border-hairline">
    <button
      type="button"
      :aria-expanded="open"
      :aria-controls="`tl-body-${session.id}`"
      class="group/head grid w-full grid-cols-[112px_1fr_auto_44px] items-center gap-5 px-1.5 py-7.5 text-left max-sm:grid-cols-[64px_1fr_38px] max-sm:gap-3 max-sm:py-6 hover:cursor-pointer"
      @click="emit('toggle')"
    >
      <span
        class="font-display text-[clamp(.7rem,1.5vw,1.05rem)] font-semibold transition-colors duration-300"
        :class="open ? 'text-primary' : 'text-muted group-hover/head:text-primary'"
      >{{ session.time }}</span>

      <span class="font-display text-[clamp(1.22rem,2.4vw,1.75rem)] font-medium tracking-[-0.012em] leading-9 transition-colors duration-300 group-hover/head:text-primary">
        {{ session.title }}
      </span>

      <span class="inline-flex items-center whitespace-nowrap rounded-full border border-hairline px-3.5 py-1.75 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted max-sm:hidden">
        {{ session.tag }}
      </span>

      <span
        class="grid size-9.5 place-items-center rounded-full border transition-all duration-450 ease-soft"
        :class="open ? 'rotate-45 border-primary bg-primary text-canvas' : 'border-hairline text-ink group-hover/head:border-primary'"
      >
        <Icon name="lucide:plus" class="size-4.5" />
      </span>
    </button>

    <div
      :id="`tl-body-${session.id}`"
      class="grid transition-[grid-template-rows] duration-550 ease-soft"
      :class="open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
    >
      <div class="min-h-0 overflow-hidden">
        <div class="max-w-205 px-1.5 pb-9 pl-35 max-sm:pl-1.5">
          <p class="text-base text-muted">{{ session.description }}</p>

          <div class="mt-5 flex flex-wrap items-center gap-6">
            <!-- <span class="flex items-center gap-3">
              <span class="grid size-9.5 shrink-0 place-items-center rounded-full bg-primary/10 text-[0.76rem] font-bold tracking-[0.03em] text-primary">
                {{ session.speaker.initials }}
              </span>
              <span>
                <strong class="block text-[0.92rem] leading-[1.3]">{{ session.speaker.name }}</strong>
                <em class="text-[0.8rem] not-italic text-muted">{{ session.speaker.role }}</em>
              </span>
            </span> -->

            <!-- <span class="inline-flex items-center gap-2 text-[0.9rem] text-muted">
              <Icon name="lucide:map-pin" class="size-3.75 text-primary" />{{ session.location }}
            </span>

            <button
              type="button"
              class="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-transparent px-4.25 py-2.5 text-[0.85rem] font-semibold text-primary transition-[background-color,transform] duration-300 hover:-translate-y-px hover:bg-primary/5"
              @click="downloadICS(session.ics)"
            >
              <Icon name="lucide:download" class="size-3.5" />Add to calendar (.ics)
            </button> -->
          </div>
        </div>
      </div>
    </div>
  </article>
</template>