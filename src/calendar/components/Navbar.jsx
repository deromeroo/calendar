import { useAuthStore } from '../../auth/hooks/useAuthStore'

export const Navbar = () => {
  const { startLogout, user } = useAuthStore()

  return (
    <nav className="bg-transparent mb-2">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">

            <div to="/" className="flex items-center space-x-3 ">
                <img src="/calendar.svg" className="h-8 bg-indigo-600 rounded-md p-1 hover:bg-indigo-400 fill-current hover:scale-110 transition" alt="Calendar Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap text-indigo-400">{user.name}</span>
            </div>

            <button
                className='flex items-center'
                onClick={ startLogout }
            >
                <span className='hidden md:block text-indigo-400 md:mr-1 text-xl'>Logout</span>
                <box-icon name='log-in-circle' color={'#4f46e5'} animation='tada-hover'></box-icon>
            </button>
        </div>
    </nav>
  )
}
