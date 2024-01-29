import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import 'animate.css'

import { CalendarEventBox, Navbar } from '../'
import { localizer } from '../helpers'
import { useCalendar } from '../hooks/useCalendar'

export const CalendarPage = () => {
  const { events, onDoubleClick, onSelect, onViewChanged } = useCalendar()

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#4f46e5',
      borderRadius: '2px',
      opacity: 0.8,
      color: 'white',
      borderColor: '#818cf8'
    }

    return {
      style
    }
  }

  return (
    <div className="glass p-4 animate__animated animate__fadeIn">
      <Navbar />

      <Calendar
        localizer={ localizer }
        events={ events }
        // defaultView = {}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '90%' }}
        eventPropGetter={ eventStyleGetter }
        components={{
          event: CalendarEventBox
        }}
        onDoubleClickEvent={ onDoubleClick }
        onSelectEvent={ onSelect }
        onView={ onViewChanged }
      />

    </div>
  )
}
