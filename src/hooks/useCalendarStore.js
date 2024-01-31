import { useDispatch, useSelector } from 'react-redux'
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from '../store'

export const useCalendarStore = () => {
  const dispatch = useDispatch()
  const { events, activeEvent } = useSelector(state => state.calendar)

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent))
  }

  const startSavingEvent = async (calendarEvent) => {
    // Todo: llegar al backend

    //* Status OK:
    if (calendarEvent._id) {
      // Updating
      dispatch(onUpdateEvent({ ...calendarEvent }))
    } else {
      // Creating
      dispatch(onAddNewEvent({
        ...calendarEvent,
        _id: new Date().getTime()
      }))
    }
  }

  const startDeletingEvent = () => {
    // Todo: llegar al backend
    dispatch(onDeleteEvent())
  }

  return {
    //* Properties
    events,
    activeEvent,
    hasEventSelected: !!activeEvent?._id,

    //* Methods
    setActiveEvent,
    startSavingEvent,
    startDeletingEvent
  }
}
