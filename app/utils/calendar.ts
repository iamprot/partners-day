export interface IcsEvent {
  title: string
  start: string
  end: string
  location: string
}

export function downloadICS(ev: IcsEvent) {
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//KS Partners Day 2026//EN',
    'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    `UID:pd-${Date.now()}@partnersday`,
    'DTSTAMP:20260101T090000Z',
    `DTSTART:${ev.start}`,
    `DTEND:${ev.end}`,
    `SUMMARY:${ev.title}`,
    `LOCATION:${ev.location}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')

  const blob = new Blob([lines], { type: 'text/calendar' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = ev.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') + '.ics'
  document.body.appendChild(a)
  a.click()
  a.remove()
  setTimeout(() => URL.revokeObjectURL(url), 3000)
}