// app/plugins/reveal.ts
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    getSSRProps: () => ({}),

    mounted(el: HTMLElement, binding: { value?: number }) {
      // 1. hide first — instantly, without animating the way down
      el.style.transition = 'none'
      el.classList.add('reveal-init')
      void el.offsetHeight // force a style flush so the hide isn't transitioned
      el.style.transition = ''

      // stagger delay, e.g. v-reveal="120"
      el.style.transitionDelay = `${binding.value ?? 0}ms`

      // 2. fade up on first intersection
      const io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              el.classList.add('reveal-in')
              io.unobserve(el)
            }
          }
        },
        { threshold: 0.12, rootMargin: '0px 0px -36px 0px' },
      )
      io.observe(el)
    },
  })
})