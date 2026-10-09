<template>
  <section class="group/stmt relative grid min-h-[92vh] place-items-center overflow-hidden py-27.5">
    <DuotoneImage
      src="images/landscape.jpg"
      alt=""
      blend="multiply"
      wrapper-class="absolute inset-0"
      img-class="scale-[1.14] grayscale brightness-[0.82] blur-[16px] group-hover/stmt:scale-[1.22]"
    />
    <div aria-hidden="true" class="absolute inset-0 bg-[#160550]/45" />

    <div class="wrap relative z-2">
      <p v-reveal class="mb-7 text-[0.74rem] font-bold uppercase tracking-[0.22em] text-canvas/70">Слово организатора</p>
      <blockquote v-reveal="100" class="max-w-[24ch] text-balance font-display text-[clamp(1.75rem,4.2vw,3rem)] font-medium leading-tight tracking-[-0.015em] text-canvas">
        “Сильная партнерская экосистема строится там, где вендор и партнер понимают цели друг друга, открыто обсуждают сложности и вместе создают новые точки роста.”
      </blockquote>
      <p v-reveal="180" class="mt-8 text-[0.95rem] text-canvas/70"> Филипп Ковригин — Директор по работе с партнерами</p>
    </div>
  </section>
</template>