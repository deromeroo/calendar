import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="bg-transparent mb-2">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">

            <Link to="/" className="flex items-center space-x-3 ">
                <img src="/calendar.svg" className="h-8 bg-indigo-600 rounded-md p-1 hover:bg-indigo-400 fill-current hover:scale-110 transition" alt="Calendar Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-indigo-400">Calendar</span>
            </Link>

            <ul className="font-medium flex items-center">
                <li>
                    <Link
                        to="#"
                        className="flex items-center px-2 py-1 text-md transition rounded-md"
                    >
                        <span className='hidden md:block text-indigo-400 md:mr-1 text-lg'>Logout</span>
                        <box-icon name='log-in-circle' color={'#4f46e5'} animation='tada-hover'></box-icon>
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}
