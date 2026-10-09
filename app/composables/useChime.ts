let ctx: AudioContext | null = null

export function useChime() {
  const enabled = useState('chime:enabled', () => false)
  const played = useState('chime:played', () => true)
  const label = useState('chime:label', () => 'Chime — tap to enable')

  function play() {
    if (!ctx) return
    const t = ctx.currentTime

    const lp = ctx.createBiquadFilter()
    lp.type = 'lowpass'
    lp.frequency.value = 5200

    const master = ctx.createGain()
    master.gain.setValueAtTime(0.0001, t)
    master.gain.exponentialRampToValueAtTime(0.13, t + 0.03)
    master.gain.exponentialRampToValueAtTime(0.0001, t + 2.4)
    lp.connect(master)
    master.connect(ctx.destination)

    const partials = [
      [1318.51, 0.5, 0],
      [1975.53, 0.24, 0.07],
      [2637.02, 0.12, 0.14],
    ] as const

    for (const [freq, gain, delay] of partials) {
      const osc = ctx.createOscillator()
      const g = ctx.createGain()
      osc.type = 'sine'
      osc.frequency.value = freq
      osc.detune.value = Math.random() * 6 - 3
      g.gain.setValueAtTime(0.0001, t + delay)
      g.gain.exponentialRampToValueAtTime(gain, t + delay + 0.02)
      g.gain.exponentialRampToValueAtTime(0.0001, t + delay + 1.9)
      osc.connect(g)
      g.connect(lp)
      osc.start(t + delay)
      osc.stop(t + delay + 2.1)
    }
  }

  function toggle() {
    if (!ctx) {
      const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
      try { ctx = AC ? new AC() : null } catch { ctx = null }
    }
    if (!ctx) { label.value = 'Audio unavailable'; return }

    enabled.value = !enabled.value
    played.value = !enabled.value // each opt-in allows exactly one chime
    label.value = enabled.value ? 'Chime on — scroll to hear' : 'Chime — tap to enable'
  }

  return { enabled, played, label, toggle, play }
}