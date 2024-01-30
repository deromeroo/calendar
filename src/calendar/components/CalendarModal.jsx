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
        className={ 'animate__animated animate__fadeIn absolute bg-white rounded inline max-h-[620px] max-w-[500px] outline-none p-5' }
        overlayClassName={'bg-indigo-950/80 absolute bottom-0 top-0 left-0 right-0'}
        closeTimeoutMS={ 200 }
    >
        <h1 className='text-indigo-600 mb-2 text-pretty text-2xl font-semibold'>New Event</h1>
        <hr />

        <form className="container my-4">

            <div className="mb-2">
                <label>Fecha y hora inicio</label>
                <input className="form-control" placeholder="Fecha inicio" />
            </div>

            <div className="form-group mb-2">
                <label>Fecha y hora fin</label>
                <input className="form-control" placeholder="Fecha inicio" />
            </div>

            <hr />
            <div className="form-group mb-2">
                <label>Titulo y notas</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Título del evento"
                    name="title"
                    autoComplete="off"
                />
                <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
            </div>

            <div className="form-group mb-2">
                <textarea
                    type="text"
                    className="form-control"
                    placeholder="Notas"
                    rows="5"
                    name="notes"
                ></textarea>
                <small id="emailHelp" className="form-text text-muted">Información adicional</small>
            </div>

            <button
                type="submit"
                className="flex items-center gap-2 rounded bg-indigo-600 px-3 py-1.5 text-white"
            >
                <box-icon name='save' color={'white'}/>
                <span>Save</span>
            </button>

        </form>
    </Modal>
  )
}
