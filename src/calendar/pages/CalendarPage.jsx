import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import 'animate.css'

import { CalendarEventBox, CalendarModal, FabAddNew, FabDelete, Navbar } from '../'
import { localizer } from '../helpers'
import { useCalendar } from '../hooks/useCalendar'
import { useCalendarStore } from '../../hooks'

export const CalendarPage = () => {
  const { events } = useCalendarStore()

  const {
    lastView,

    eventStyleGetter,
    onDoubleClick,
    onSelect,
    onViewChanged
  } = useCalendar()

  return (
    <div className="glass p-3 animate__animated animate__fadeIn">
      <Navbar />

      <Calendar
        localizer={ localizer }
        events={ events }
        defaultView = { lastView }
        startAccessor="start"
        endAccessor="end"
        style={{ height: '95%' }}
        eventPropGetter={ eventStyleGetter }
        components={{
          event: CalendarEventBox
        }}
        onDoubleClickEvent={ onDoubleClick }
        onSelectEvent={ onSelect }
        onView={ onViewChanged }
      />

      <CalendarModal />
      <FabAddNew />
      <FabDelete />

    </div>
  )
}
