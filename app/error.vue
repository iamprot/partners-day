<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps({
    error: Object as () => NuxtError,
})

const handleError = () => clearError({ redirect: '/' })

</script>

<template>
    <div class="flex h-screen w-screen items-center justify-center">
        <div class="flex flex-col items-center gap-8">
            <h1 class="font-display font-extrabold text-7xl">{{ error?.status }}</h1>
            <button @click="handleError" class="hover:cursor-pointer">На главную</button>
        </div>
    </div>
</template>

<style scoped>

</style>