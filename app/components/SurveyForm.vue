<script setup lang="ts">
import { downloadICS, type IcsEvent } from "~/utils/calendar";
import { useToast } from "~/composables/useToast";

const { show } = useToast();

const form = reactive({ name: "", email: "", company: "", type: "" });
const errors = reactive({
    name: false,
    email: false,
    company: false,
    type: false,
});
const submitted = ref(false);
const firstName = ref("");

const validators: Record<keyof typeof form, (v: string) => boolean> = {
    name: (v) => v.trim().length > 1,
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
    company: (v) => v.trim().length > 1,
    type: (v) => v !== "",
};

const fullDay: IcsEvent = {
    title: "KS Partners Day 2022 - полный день",
    start: "20261127T103000",
    end: "20261127T230000",
    location: "Офис AXENIX, Павелецкая площадь, 2/2, Future Camp, 8 этаж",
};

function submit() {
    let ok = true;
    (Object.keys(validators) as Array<keyof typeof form>).forEach((key) => {
        errors[key] = !validators[key](form[key]);
        if (errors[key]) ok = false;
    });
    if (!ok) {
        show("Некоторые поля не заполнены!");
        return;
    }

    firstName.value = form.name.trim().split(" ")[0] as string;
    submitted.value = true;
    show("Форма отправлена! Увидимся на KS Partners Day 2026");
}
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

                <div class="text-canvas/80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur deleniti officia numquam repellat quam odio. Eos!</div>
                <AppButton to="https://forms.yandex.ru/cloud/6ac8fe7449af47806aeb7e94" variant="light" size="md" class="mt-6"
                    >Пройди опрос <Icon name="lucide:arrow-right" class="size-4"
                /></AppButton>
                <p class="mt-4 text-[0.8rem] text-canvas/55">
                    После прохождения опроса вы будете автоматически зарегистрированны.
                </p>
            </div>
        </Transition>
    </div>
</template>
