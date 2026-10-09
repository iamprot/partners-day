let timer: ReturnType<typeof setTimeout> | undefined

export function useToast() {
  const message = useState('toast:message', () => '')
  const visible = useState('toast:visible', () => false)

  function show(msg: string) {
    message.value = msg
    visible.value = true
    if (import.meta.client) {
      clearTimeout(timer)
      timer = setTimeout(() => (visible.value = false), 3600)
    }
  }

  return { message, visible, show }
}