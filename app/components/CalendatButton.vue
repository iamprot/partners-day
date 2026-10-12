<script setup lang="ts">
import { downloadICS, type IcsEvent, fullDay } from "~/utils/calendar";

</script>

<template>
    <button
        type="button"
        class="fixed bottom-5.5 right-5.5 z-90 inline-flex items-center gap-2.5 rounded-full border bg-white/78 px-4.25 py-2.5 text-[0.82rem] font-medium backdrop-blur-md transition-all duration-300 hover:-translate-y-px border-primary/40 text-primary hover:border-primary/35 hover:text-accent hover:cursor-pointer"
        @click="downloadICS(fullDay)"
    >
        <Icon name="lucide:calendar-plus" size="16" />
        <span>Добавить в календарь</span>
    </button>
</template>
