import { useMemo, useState } from 'react'
import { addHours, differenceInSeconds } from 'date-fns'
import Swal from 'sweetalert2'

export const useModal = () => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  }

  const [isModalOpen, setIsModalOpen] = useState(true)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const [formValues, setFormValues] = useState({
    title: '',
    notes: '',
    start: new Date(),
    end: addHours(new Date(), 2)
  })

  const titleClass = useMemo(() => {
    if (!formSubmitted) return ''

    return (formValues.title.length > 3)
      ? ''
      : 'border-red-300 border-2'
  }, [formValues.title, formSubmitted])

  const noteClass = useMemo(() => {
    if (!formSubmitted) return ''

    return (formValues.notes.length > 3)
      ? ''
      : 'border-red-300 border-2'
  }, [formValues.notes, formSubmitted])

  const onInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value
    })
  }

  const onDateChanged = (event, changing) => {
    setFormValues({
      ...formValues,
      [changing]: event
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)

    const difference = differenceInSeconds(formValues.end, formValues.start)

    if (isNaN(difference) || difference <= 0) {
      Swal.fire('Incorrect dates!', 'Check the dates entered!', 'error')
      return
    }

    if (formValues.title.length <= 0) return

    console.log(formValues)
  }

  const onCloseModal = () => {
    setIsModalOpen(false)
  }

  return {
    isModalOpen,
    titleClass,
    noteClass,
    customStyles,
    formValues,

    onInputChange,
    onDateChanged,
    onSubmit,
    onCloseModal
  }
}
