<script setup lang="ts">
import { partners } from "~/utils/event";
</script>

<template>
    <section id="partners" class="scroll-mt-21.5 py-[clamp(96px,13vh,160px)] bg-accent/5">
        <div class="wrap">
            <SectionHeader
                eyebrow="02 — Рабочая встреча"
                title="В центре – партнеры"
                blurb="Перед мероприятием мы собираем ваши ожидания и предложения — они помогут нам скорректировать программу и вынести на обсуждение самые актуальные темы."
            />

            <div v-reveal="240" class="mt-9.5 flex flex-wrap gap-12.5">
                <div v-reveal>
                    Нам важно, чтобы KS Partners Day стал не серией докладов, а
                    рабочей встречей, где можно открыто обсудить планы, опыт и
                    вопросы, которые действительно важны партнерам.
                </div>
                <AppButton to="#"
                    >Пройти опрос <Icon name="lucide:arrow-right" class="size-4"
                /></AppButton>
            </div>
            <!-- <p v-reveal="100" class="mt-6.5 text-[0.95rem] text-muted">
        …and 33 more, announced in January.
        <a href="#contact" class="text-primary underline decoration-1 underline-offset-[3px]">Request the full list</a>
      </p> -->
        </div>
    </section>
</template>
