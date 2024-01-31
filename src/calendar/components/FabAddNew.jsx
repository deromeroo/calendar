import { addHours } from 'date-fns'
import 'boxicons'

import { useCalendarStore, useUiStore } from '../../hooks'

export const FabAddNew = () => {
  const { openDateModal } = useUiStore()
  const { setActiveEvent } = useCalendarStore()

  const handleClickNew = () => {
    setActiveEvent({
      title: '',
      notes: '',
      start: new Date(),
      end: addHours(new Date(), 2),
      bgColor: '#FFF',
      user: {
        _id: '001',
        name: 'Deromeroo'
      }
    })
    openDateModal()
  }

  return (
    <button
    onClick={ handleClickNew }
    className="rounded-full bg-indigo-600 bottom-6 fixed right-6 shadow-lg border-2 border-indigo-400 hover:bg-indigo-400 transition hover:scale-110">
      <box-icon name='plus' class='size-12 p-2' animation='tada-hover' color='#FCF7FF'></box-icon>
    </button>
  )
}
