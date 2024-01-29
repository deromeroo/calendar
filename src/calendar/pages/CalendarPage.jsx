import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import 'animate.css'

import { CalendarEventBox, Navbar } from '../'
import { localizer } from '../helpers'
import { useCalendar } from '../hooks/useCalendar'

export const CalendarPage = () => {
  const {
    lastView,
    events,
    onDoubleClick,
    onSelect,
    onViewChanged
  } = useCalendar()

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#3b82f6',
      borderRadius: '2px',
      color: '#FCF7FF'
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
        defaultView = { lastView }
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
