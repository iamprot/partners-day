<script setup lang="ts">
</script>

<template>
  <section id="contact" class="scroll-mt-21.5 py-[clamp(96px,13vh,160px)]">
    <div class="wrap">
      <div v-reveal class="relative overflow-hidden rounded-[34px] bg-primary p-[clamp(38px,6vw,84px)] text-canvas">
        <span aria-hidden="true" class="absolute -right-37.5 -top-37.5 size-115 animate-orbit-slow rounded-full border border-white/15 before:absolute before:left-1/2 before:-top-1 before:size-2 before:-translate-x-1/2 before:rounded-full before:bg-white/60" />
        <span aria-hidden="true" class="absolute -bottom-47.5 -left-32.5 size-100 rounded-full bg-white/5 blur-md" />

        <div class="relative z-1 grid gap-[clamp(40px,6vw,90px)] lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionLabel light>27 ноября / Москва</SectionLabel>
            <h2 class="font-display text-[clamp(2.4rem,4.6vw,3.9rem)] font-semibold leading-[1.03] tracking-tight">
              Регистрация
            </h2>
            <p class="mt-5.5 max-w-[46ch] text-[1.03rem] text-canvas/80">
              Зарегистрированным участникам отправим финальную программу на e-mail.
            </p>
            <ul class="mt-11 grid gap-4 text-[0.98rem] text-canvas/85">
              <li class="flex items-center gap-3"><Icon name="lucide:calendar" class="size-4.25 shrink-0 text-canvas/60" />Пятница, 27 ноября, 2026, 10:30</li>
              <li class="flex items-center gap-3"><Icon name="lucide:map-pin" class="size-4.25 shrink-0 text-canvas/60" />Офис AXENIX, Павелецкая площадь, 2/2, Future Camp, 8 этаж.</li>
              <li class="flex items-center gap-3">
                <Icon name="lucide:star" class="size-4.25 shrink-0 text-canvas/60" />Увидимся на KS Partners Day!
              </li>
            </ul>
          </div>

          <BookingForm />
        </div>
      </div>
    </div>
  </section>
</template>