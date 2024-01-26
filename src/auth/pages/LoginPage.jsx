import { Link } from 'react-router-dom'
import { LoginLayout } from '../layout/LoginLayout'

export const LoginPage = () => {
  return (
    <LoginLayout>
      <div className="flex flex-col gap-6">

        <h1 className="text-3xl text-center text-indigo-400">Login</h1>

        <form className="space-y-4 md:space-y-6" action="#">
            <div>
                <label htmlFor="email" className="block mb-2 text-md text-indigo-400">Email</label>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-500 sm:text-sm rounded-md focus:outline-indigo-300 block w-full p-1" placeholder="email@email.com" required=""/>
            </div>
            <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-indigo-400">Password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-500 sm:text-sm rounded-md focus:outline-indigo-300 block w-full p-1" required=""/>
            </div>

            <button type="submit" className="w-full text-white bg-indigo-400 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-md text-sm px-5 py-2.5 text-center transition">Sign in</button>

            <p className="text-sm font-light text-gray-400 ">
                Don't have an account yet?
                <Link
                    to='/auth/register'
                    className="font-medium text-indigo-400 hover:underline dark:text-primary-500 ml-2"
                >
                    Sign up
                </Link>
            </p>
        </form>

      </div>
    </LoginLayout>

  )
}
