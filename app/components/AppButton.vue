<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    to?: string
    variant?: 'primary' | 'ghost' | 'light'
    size?: 'md' | 'sm'
    type?: 'button' | 'submit'
  }>(),
  { to: undefined, variant: 'primary', size: 'md', type: 'button' },
)

const variants: Record<string, string> = {
  primary:
    'bg-primary text-canvas shadow-[0_14px_34px_-14px_rgba(68,19,217,0.55)] hover:bg-accent hover:shadow-[0_20px_44px_-14px_rgba(68,55,249,0.6)]',
  ghost:
    'border border-ink/20 bg-transparent text-ink hover:border-primary hover:text-primary',
  light: 'bg-canvas text-primary hover:bg-white',
}

const sizes: Record<string, string> = {
  md: 'px-[30px] py-4 text-[0.98rem]',
  sm: 'px-5 py-2.5 text-[0.9rem]',
}
</script>

<template>
  <component
    :is="to ? 'a' : 'button'"
    :href="to"
    :type="to ? undefined : type"
    class="inline-flex items-center justify-center gap-2.5 rounded-full font-semibold transition-all duration-300 ease-soft hover:-translate-y-0.5"
    :class="[variants[props.variant], sizes[props.size]]"
  >
    <slot />
  </component>
</template>