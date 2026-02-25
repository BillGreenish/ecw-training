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
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#0f172a' }}>
      
      {/* Sidebar */}
      <div style={{
        width: '240px',
        backgroundColor: '#111827',
        color: 'white',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}>
        <h2 style={{ marginBottom: '30px' }}>ECW Training</h2>
        <div>🏠 Home</div>
        <div>📅 Schedule</div>
        <div>👥 Patients</div>
        <div>💰 Billing</div>
        <div>📊 Analytics</div>
      </div>

      {/* Main Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        
        {/* Header */}
        <div style={{
          height: '70px',
          backgroundColor: '#1f2937',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          padding: '0 20px',
          fontSize: '18px',
          fontWeight: 500
        }}>
          February 24, 2026 — Scheduler
        </div>

        {/* Calendar Section */}
        <div style={{ flex: 1, padding: '20px', backgroundColor: '#0f172a' }}>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            defaultView="day"
            style={{ height: '100%', backgroundColor: 'white', borderRadius: '8px' }}
          />
        </div>
      </div>
    </div>
  )
}