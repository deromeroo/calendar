import 'boxicons'
import { useCalendarStore } from '../hooks/useCalendarStore'

export const FabDelete = () => {
  const { startDeletingEvent, hasEventSelected } = useCalendarStore()

  const handleDelete = () => {
    startDeletingEvent()
  }

  return (
    <button
      onClick={ handleDelete }
      className="rounded-full bg-red-600 bottom-6 fixed left-6 shadow-lg border-2 border-red-400 hover:bg-red-400 transition hover:scale-110 animate__animated animate__fadeIn"
      style={{
        display: hasEventSelected ? '' : 'none'
      }}
      >
      <box-icon name='trash' class='size-12 p-2' animation='tada-hover' color='#FCF7FF'></box-icon>
    </button>
  )
}
