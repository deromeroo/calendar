import { useState } from 'react'
import { useCalendarStore, useUiStore } from '../../hooks'

export const useCalendar = () => {
  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week')
  const { openDateModal } = useUiStore()
  const { setActiveEvent } = useCalendarStore()

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
    const style = {
      backgroundColor: 'rgb(99 102 241)',
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
