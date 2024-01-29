import { addHours } from 'date-fns'
import { useState } from 'react'

export const useCalendar = () => {
  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week')

  const events = [{
    title: 'Rocket Birthday',
    notes: 'We have to buy the cake',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: '#FFF',
    user: {
      _id: '001',
      name: 'Deromeroo'
    }
  }]

  const onDoubleClick = (e) => {
    console.log({ doubleClick: e })
  }

  const onSelect = (e) => {
    console.log({ select: e })
  }

  const onViewChanged = (e) => {
    localStorage.setItem('lastView', e)
    setLastView(e)
  }

  return {

    lastView,

    events,
    onDoubleClick,
    onSelect,
    onViewChanged
  }
}
