<script setup lang="ts">
import { downloadICS, type IcsEvent } from '~/utils/calendar'
import { useToast } from '~/composables/useToast'

const { show } = useToast()

const form = reactive({ name: '', email: '', company: '', type: '' })
const errors = reactive({ name: false, email: false, company: false, type: false })
const submitted = ref(false)
const firstName = ref('')

const validators: Record<keyof typeof form, (v: string) => boolean> = {
  name: (v) => v.trim().length > 1,
  email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
  company: (v) => v.trim().length > 1,
  type: (v) => v !== '',
}

const fullDay: IcsEvent = {
  title: 'KS Partners Day 2022 - полный день',
  start: '20261127T103000',
  end: '20261127T230000',
  location: 'Офис AXENIX, Павелецкая площадь, 2/2, Future Camp, 8 этаж',
}

function submit() {
  let ok = true
  ;(Object.keys(validators) as Array<keyof typeof form>).forEach((key) => {
    errors[key] = !validators[key](form[key])
    if (errors[key]) ok = false
  })
  if (!ok) { show('Некоторые поля не заполнены!'); return }

  firstName.value = form.name.trim().split(' ')[0] as string
  submitted.value = true
  show('Форма отправлена! Увидимся на KS Partners Day 2026')
}
</script>

<template>
  <div>
    <Transition name="fade" mode="out-in">
      <form v-if="!submitted" novalidate @submit.prevent="submit">
        <p class="mb-6.5 text-[0.74rem] font-bold uppercase tracking-[0.2em] text-canvas/60">Заполните форму</p>

        <div class="grid gap-4 sm:grid-cols-2">
          <div class="flex flex-col gap-2">
            <label for="fName" class="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-canvas/60">Имя Фамилия</label>
            <input
              id="fName" v-model="form.name" type="text" autocomplete="name" placeholder="Иван Иванов"
              class="field-input" :class="errors.name ? 'border-[#ffb0b0]' : ''" @input="errors.name = false"
            />
            <p v-show="errors.name" class="text-[0.78rem] text-[#ffb3b3]">Необходимо указать имя и фамилию.</p>
          </div>
          <div class="flex flex-col gap-2">
            <label for="fMail" class="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-canvas/60">Email</label>
            <input
              id="fMail" v-model="form.email" type="email" autocomplete="email" placeholder="name@company.com"
              class="field-input" :class="errors.email ? 'border-[#ffb0b0]' : ''" @input="errors.email = false"
            />
            <p v-show="errors.email" class="text-[0.78rem] text-[#ffb3b3]">Необходимо указать корректный email.</p>
          </div>
        </div>

        <div class="mt-4 grid gap-4 sm:grid-cols-2">
          <div class="flex flex-col gap-2">
            <label for="fComp" class="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-canvas/60">Компания</label>
            <input
              id="fComp" v-model="form.company" type="text" autocomplete="organization" placeholder="Company"
              class="field-input" :class="errors.company ? 'border-[#ffb0b0]' : ''" @input="errors.company = false"
            />
            <p v-show="errors.company" class="text-[0.78rem] text-[#ffb3b3]">Необходимо указать компанию.</p>
          </div>
          <div class="flex flex-col gap-2">
            <label for="fType" class="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-canvas/60">Тип партнерства</label>
            <select
              id="fType" v-model="form.type" required
              class="field-input field-select" :class="errors.type ? 'border-[#ffb0b0]' : ''" @change="errors.type = false"
            >
              <option value="" disabled>Выберите</option>
              <option>Вариант 1</option>
              <option>Вариант 2</option>
              <option>Вариант 3</option>
            </select>
            <p v-show="errors.type" class="text-[0.78rem] text-[#ffb3b3]">Необходимо выбрать</p>
          </div>
        </div>

        <AppButton type="submit" variant="light" class="mt-6">Отправить <Icon name="lucide:arrow-right" class="size-4" /></AppButton>
        <p class="mt-4 text-[0.8rem] text-canvas/55">Заявку можно отправить только 1 раз.</p>
      </form>

      <div v-else>
        <span class="mb-5 grid size-13.5 place-items-center rounded-full bg-white/15">
          <Icon name="lucide:check" class="size-6 text-canvas" />
        </span>
        <h3 class="mb-3 font-display text-[1.7rem] font-semibold tracking-[-0.015em]">Запрос получен</h3>
        <p class="max-w-[42ch] text-canvas/80">
          Спасибо, {{ firstName }}. Мы направим подтверждение и детали программы на указаный email.
        </p>
        <button
          type="button"
          class="mt-6.5 inline-flex items-center gap-2 rounded-full border border-white/40 bg-transparent px-4.25 py-2.5 text-[0.85rem] font-semibold text-canvas transition-colors duration-300 hover:bg-white/10"
          @click="downloadICS(fullDay)"
        >
          <Icon name="lucide:download" class="size-3.5" />Добавить встречу на весь день в календарь
        </button>
      </div>
    </Transition>
  </div>
</template>