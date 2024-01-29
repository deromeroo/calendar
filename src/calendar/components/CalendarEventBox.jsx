import Proptypes from 'prop-types'

export const CalendarEventBox = ({ event }) => {
  const { title, user } = event

  return (
    <>
        <p className=" text-xs sm:text-sm text-pretty font-semibold">{title}</p>
        <span className="text-xs opacity-70">- {user.name}</span>
    </>
  )
}

CalendarEventBox.propTypes = {
  event: Proptypes.object.isRequired
}
