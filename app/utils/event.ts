export interface TimelineSession {
  id: string
  time: string
  title: string
  tag: string
  description: string
  speaker: { initials: string; name: string; role: string }
  location: string
  ics: { title: string; start: string; end: string; location: string }
}

export const timeline: TimelineSession[] = [
  {
    id: 'arrival',
    time: '10:30',
    title: 'Сбор гостей и welcome–кофе',
    tag: 'старт',
    description: 'Регистрация и неформальное общение.',
    speaker: { initials: 'PC', name: 'Partner Crew', role: 'Front of house' },
    location: 'Main Foyer',
    ics: { title: 'Partners Day - Arrival and slow coffee', start: '20260319T090000', end: '20260319T100000', location: 'Локация, Москва' },
  },
  {
    id: 'keynote',
    time: 'Первая часть',
    title: 'Стратегия и партнерские возможности',
    tag: 'деловая часть',
    description: 'Планы на 2027 год, перспективные направления для развития бизнеса, взгляд партнеров на рынок и новые возможности взаимодействия с Knowledge Space.',
    speaker: { initials: 'ME', name: 'Mara Ellingsen', role: 'Chief Technology Officer' },
    location: 'Main Hall',
    ics: { title: 'Partners Day - Opening keynote', start: '20260319T100000', end: '20260319T111500', location: 'Локация, Москва' },
  },
  {
    id: 'partner-track',
    time: 'Перерыв',
    title: 'Обед и нетворкинг',
    tag: 'пауза',
    description: 'Время для общения и обмена опытом.',
    speaker: { initials: 'JR', name: 'Jonas Reventlow', role: 'VP Alliances' },
    location: 'Studio B',
    ics: { title: 'Partners Day - Partner track', start: '20260319T113000', end: '20260319T124500', location: 'Локация, Москва' },
  },
  {
    id: 'lunch',
    time: 'Вторая часть',
    title: 'Практика совместных проектов',
    tag: 'практика',
    description: 'Реальный опыт партнеров и KS: что работает, где возникают риски и какой может быть эффективная модель совместной реализации проектов.',
    speaker: { initials: 'PC', name: 'Partner Crew', role: 'Hosts' },
    location: 'The Atrium',
    ics: { title: 'Partners Day - Long-table lunch', start: '20260319T130000', end: '20260319T141500', location: 'Локация, Москва' },
  },
  {
    id: 'labs',
    time: 'Третья часть',
    title: 'AI: новые возможности для партнерского бизнеса',
    tag: 'дискуссия',
    description: 'Как искусственный интеллект меняет разработку и реализацию корпоративных решений, какие роли появляются у интегратора и где возникают новые источники ценности.',
    speaker: { initials: 'PS', name: 'Priya Sundaram', role: 'Developer Relations Lead' },
    location: 'Labs 1–4',
    ics: { title: 'Partners Day - Hands-on labs', start: '20260319T143000', end: '20260319T160000', location: 'Локация, Москва' },
  },
  {
    id: 'ama',
    time: 'Финал',
    title: 'От идеи к бизнес-результату',
    tag: 'интерактив',
    description: 'Интерактивная работа с практической бизнес-задачей, обмен подходами и подведение итогов дня.',
    speaker: { initials: 'PL', name: 'Product leadership', role: 'Panel' },
    location: 'Main Hall',
    ics: { title: 'Partners Day - Roadmap AMA', start: '20260319T161500', end: '20260319T171500', location: 'Локация, Москва' },
  },
  {
    id: 'dinner',
    time: 'До 18:00',
    title: 'Неформальное общение',
    tag: 'финал',
    description: 'Продолжим разговор в более свободной обстановке.',
    speaker: { initials: 'HT', name: 'Host team', role: 'Your evening guides' },
    location: 'Restaurant Lior, Refshaleøen',
    ics: { title: 'Partners Day - Dinner at the harbour', start: '20260319T180000', end: '20260319T230000', location: 'Локация, Москва' },
  },
]

export const partners = [
  { name: 'Партнер 1', nameClass: 'text-sm font-semibold uppercase tracking-[0.22em]', svg: '<path d="M12 2.5l8.2 4.75v9.5L12 21.5l-8.2-4.75v-9.5z"/>' },
  { name: 'Партнер 2', nameClass: 'font-display text-lg font-semibold tracking-[-0.01em]', svg: '<path stroke-linecap="round" d="M5 19V5l14 14V5"/>' },
  { name: 'Партнер 3', nameClass: 'text-[1.05rem] font-bold tracking-[-0.01em]', svg: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none"/>' },
  { name: 'Партнер 4', nameClass: 'font-display text-lg font-semibold tracking-[-0.01em]', svg: '<path stroke-linecap="round" d="M4 17a9.5 9.5 0 0 1 16 0M5.5 21h13"/>' },
  { name: 'Партнер 5', nameClass: 'text-sm font-semibold uppercase tracking-[0.3em]', svg: '<path stroke-linecap="round" d="M4 8h13M7 12h13M4 16h9"/>' },
  { name: 'Партнер 6', nameClass: 'font-display text-lg font-semibold tracking-[-0.01em]', svg: '<rect x="5.5" y="5.5" width="13" height="13" transform="rotate(45 12 12)"/>' },
  { name: 'Партнер 7', nameClass: 'text-sm font-semibold uppercase tracking-[0.22em]', svg: '<path stroke-linejoin="round" d="M3.5 19L10 6l4 7 2.5-4 4 10z"/>' },
  { name: 'Партнер 8', nameClass: 'text-[1.05rem] font-bold tracking-[-0.01em]', svg: '<circle cx="12" cy="12" r="8"/><circle cx="17.7" cy="6.3" r="1.8" fill="currentColor" stroke="none"/>' },
]