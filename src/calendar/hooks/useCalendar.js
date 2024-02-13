import { useState } from 'react'
import { useCalendarStore } from './useCalendarStore'
import { useUiStore } from '../../hooks/useUiStore'
import { useAuthStore } from '../../auth/hooks/useAuthStore'

export const useCalendar = () => {
  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week')
  const { openDateModal } = useUiStore()
  const { setActiveEvent } = useCalendarStore()
  const { user } = useAuthStore()

  const onDoubleClick = (e) => {
    openDateModal()
  }

  const onSelect = (e) => {
    setActiveEvent(e)
  }

  const onViewChanged = (e) => {
    localStorage.setItem('lastView', e)
    setLastView(e)
  }

  const eventStyleGetter = (event, start, end, isSelected) => {
    const isMyEvent = (user.uid === event.user._id) || (user.uid === event.user.uid)

    const style = {
      backgroundColor: isMyEvent ? 'rgb(99 102 241)' : '#af5e9e',
      borderRadius: '2px',
      color: '#FCF7FF'
    }

    return {
      style
    }
  }

  return {
    lastView,

    eventStyleGetter,
    onDoubleClick,
    onSelect,
    onViewChanged
  }
}
