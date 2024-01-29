import { addHours } from 'date-fns'

export const useCalendar = () => {
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
    console.log({ view: e })
  }

  return {
    events,
    onDoubleClick,
    onSelect,
    onViewChanged
  }
}
