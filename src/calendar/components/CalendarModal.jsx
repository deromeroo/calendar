import Modal from 'react-modal'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import 'sweetalert2/dist/sweetalert2.min.css'
import 'boxicons'
import 'animate.css'
import { useModal } from '../hooks/useModal'
import { useUiStore } from '../../hooks/useUiStore'

Modal.setAppElement('#root')

export const CalendarModal = () => {
  const {
    isDateModalOpen
  } = useUiStore()

  const {
    customStyles,
    titleClass,
    noteClass,
    formValues,

    onDateChanged,
    onInputChange,
    onCloseModal,
    onSubmit
  } = useModal()

  return (
    <Modal
        isOpen={ isDateModalOpen }
        onRequestClose={ onCloseModal }
        style={ customStyles }
        className={ 'animate__animated animate__fadeIn absolute w-[80%] sm:w-[450px] bg-white rounded inline outline-none py-4 px-6' }
        overlayClassName={'bg-indigo-950/70 absolute bottom-0 top-0 left-0 right-0'}
        closeTimeoutMS={ 200 }
    >
        <h1 className='text-indigo-600 mb-2 text-pretty text-xl sm:text-2xl font-semibold flex items-center gap-2'>
            <box-icon name='calendar-event' class='bg-indigo-600 rounded p-0.5' size='sm' color='white'></box-icon>
            New Event
        </h1>
        <hr />

        <form className="space-y-4 my-2 flex flex-col" onSubmit={ onSubmit }>
            <div>
                <label className='mb-2 text-md text-indigo-400 flex items-center gap-1.5'>
                    Title
                </label>
                <input
                    type="text"
                    className={`bg-gray-50 border border-gray-400 text-gray-600 sm:text-sm rounded-md focus:outline-indigo-400 block w-full p-1 mb-1 ${titleClass}`}
                    placeholder="Event title"
                    name="title"
                    autoComplete="off"
                    value={ formValues.title }
                    onChange={ onInputChange }
                />
                <small id="emailHelp" className="text-gray-600 font-light">** Short description **</small>
            </div>

            <div>
                <label
                    className='mb-2 text-md text-indigo-400 flex items-center gap-1.5'
                >Notes</label>
                <textarea
                    type="text"
                    className={`bg-gray-50 border border-gray-400 text-gray-600 sm:text-sm rounded-md focus:outline-indigo-400 block w-full p-1 mb-1 ${noteClass}`}
                    placeholder="Notes"
                    rows="4"
                    name="notes"
                    value={ formValues.notes }
                    onChange={ onInputChange }
                ></textarea>
                <small id="emailHelp" className="text-gray-600 font-light">** Additional information **</small>
            </div>

            <hr />

            <div>
                <label className='mb-2 text-md text-indigo-400 flex items-center gap-1.5'>
                    Start date & time
                </label>
                <div className='flex items-center gap-2'>
                    <box-icon name='time' class='h-5' color='#4f46e5'></box-icon>
                    <DatePicker
                        selected={ formValues.start }
                        onChange={ (event) => onDateChanged(event, 'start')}
                        showTimeSelect
                        dateFormat='Pp'
                        className='bg-gray-50 border border-gray-400 text-gray-600 sm:text-sm rounded-md focus:outline-indigo-400 block w-full p-1 text-center'
                    />
                </div>
            </div>

            <div>
                <label className='mb-2 text-md text-indigo-400 flex items-center gap-1.5'>
                    {/* <box-icon name='time-five' class='h-5' color='#4f46e5'></box-icon> */}
                    End date & time
                </label>
                <div className='flex items-center gap-2'>
                    <box-icon name='time-five' class='h-5' color='#4f46e5'></box-icon>
                    <DatePicker
                        minDate={ formValues.start }
                        selected={ formValues.end }
                        onChange={ (event) => onDateChanged(event, 'end')}
                        showTimeSelect
                        dateFormat='Pp'
                        className='bg-gray-50 border border-gray-400 text-gray-600 sm:text-sm rounded-md focus:outline-indigo-400 block w-full p-1 text-center'
                    />
                </div>
            </div>

            <button
                type="submit"
                className="flex items-center gap-2 self-end rounded bg-indigo-600 hover:bg-indigo-500 transition hover:scale-105 px-3 py-1.5 text-white"
            >
                <box-icon name='save' color={'white'} animation='tada-hover'/>
                <span>Save</span>
            </button>

        </form>
    </Modal>
  )
}
