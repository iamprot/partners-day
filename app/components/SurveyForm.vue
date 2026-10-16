<script setup lang="ts">
import { downloadICS, type IcsEvent, fullDay } from '~/utils/calendar'


</script>

<template>
    <div>
        <Transition name="fade" mode="out-in">
            <div>
                <p
                    class="mb-6.5 text-[0.74rem] font-bold uppercase tracking-[0.2em] text-canvas/60"
                >
                    Пройдите опрос
                </p>

                <div class="text-canvas/80">Мы хотим лучше понять ваши ожидания и&nbsp;включить в программу темы, которые действительно важны партнерам.</div>
                <AppButton to="https://forms.yandex.ru/cloud/6ac8fe7449af47806aeb7e94" variant="light" size="md" class="mt-6"
                    >Пройти опрос <Icon name="lucide:arrow-right" class="size-4"
                /></AppButton>
                <p class="mt-4 text-[0.8rem] text-canvas/55">
                    После прохождения опроса вы будете автоматически зарегистрированы.
                </p>
                        <button
          type="button"
          class="mt-6.5 inline-flex items-center gap-2 rounded-full border border-white/40 bg-transparent px-4.25 py-2.5 text-[0.85rem] font-semibold text-canvas transition-colors duration-300 hover:bg-white/10 hover:cursor-pointer"
          @click="downloadICS(fullDay)"
        >
          <Icon name="lucide:download" class="size-3.5" />Добавить событие в календарь
        </button>

            </div>
        </Transition>
    </div>
</template>
