import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="bg-transparent mb-6">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">

            <Link to="/" className="flex items-center space-x-3 ">
                <img src="/calendar.svg" className="h-8 bg-indigo-600 rounded-md p-1 hover:bg-indigo-400 fill-current transition" alt="Calendar Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-indigo-600">Calendar</span>
            </Link>

            <ul className="font-medium flex items-center">
                <li>
                    <Link
                        to="#"
                        className="flex items-center px-2 py-1 text-md transition rounded-md"
                    >
                        <span className='hidden md:block text-indigo-600 md:mr-1 text-lg'>Logout</span>
                        <img src="/icons/logout.svg" className="h-7 hover:scale-110 transition" alt="Logout Logo" />
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}
