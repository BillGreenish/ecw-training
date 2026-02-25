// scheduler update

'use client'

import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import { format, parse, startOfWeek, getDay } from 'date-fns'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const locales = {
  'en-US': require('date-fns/locale/en-US'),
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const events = [
  {
    title: 'Chen - New Patient',
    start: new Date(2026, 1, 24, 10, 0),
    end: new Date(2026, 1, 24, 10, 30),
  },
  {
    title: 'Harris - Follow Up',
    start: new Date(2026, 1, 24, 11, 0),
    end: new Date(2026, 1, 24, 11, 30),
  },
]

export default function Scheduler() {
  return (
    <div style={{ height: '100vh', padding: '20px' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView="day"
        style={{ height: '100%' }}
      />
    </div>
  )
}
