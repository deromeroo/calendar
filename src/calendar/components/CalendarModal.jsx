import { useState } from 'react'
import Modal from 'react-modal'

import 'animate.css'
import 'boxicons'

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

Modal.setAppElement('#root')

export const CalendarModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true)

  const onCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <Modal
        isOpen={ isModalOpen }
        onRequestClose={ onCloseModal }
        style={ customStyles }
        className={ 'animate__animated animate__fadeIn absolute w-[450px] bg-white rounded inline outline-none p-5' }
        overlayClassName={'bg-indigo-950/70 absolute bottom-0 top-0 left-0 right-0'}
        closeTimeoutMS={ 200 }
    >
        <h1 className='text-indigo-600 mb-2 text-pretty text-2xl font-semibold flex items-center gap-2'>
            <box-icon name='calendar-event' class='bg-indigo-600 rounded p-0.5' size='sm' color='white'></box-icon>
            New Event
        </h1>
        <hr />

        <form className="space-y-4 md:space-y-6 my-4 flex flex-col">

            <div>
                <label className='mb-2 text-md text-indigo-400 flex items-center gap-1.5'>
                    {/* <box-icon name='time' class='h-5' color='#4f46e5'></box-icon> */}
                    Start date & time
                </label>
                <input className="bg-gray-50 border border-gray-400 text-gray-600 sm:text-sm rounded-md focus:outline-indigo-400 block w-full p-1" placeholder="Start date" />
            </div>

            <div>
                <label className='mb-2 text-md text-indigo-400 flex items-center gap-1.5'>
                    {/* <box-icon name='time-five' class='h-5' color='#4f46e5'></box-icon> */}
                    End date & time
                </label>
                <input className="bg-gray-50 border border-gray-400 text-gray-600 sm:text-sm rounded-md focus:outline-indigo-400 block w-full p-1" placeholder="End date" />
            </div>

            <div className="mb-2">
                <label
                    className='mb-2 text-md text-indigo-400 flex items-center gap-1.5'
                >Title & notes</label>
                <input
                    type="text"
                    className=" bg-gray-50 border border-gray-400 text-gray-600 sm:text-sm rounded-md focus:outline-indigo-400 block w-full p-1 mb-1"
                    placeholder="Event title"
                    name="title"
                    autoComplete="off"
                />
                <small id="emailHelp" className="text-gray-600 font-light">** Short description **</small>
            </div>

            <div className='mb-2'>
                <textarea
                    type="text"
                    className="bg-gray-50 border border-gray-400 text-gray-600 sm:text-sm rounded-md focus:outline-indigo-400 block w-full p-1 mb-1"
                    placeholder="Notas"
                    rows="5"
                    name="notes"
                ></textarea>
                <small id="emailHelp" className="text-gray-600 font-light">** Additional information **</small>
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
