<script setup lang="ts">

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
