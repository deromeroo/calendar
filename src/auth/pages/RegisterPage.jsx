import { Link } from 'react-router-dom'
import { LoginLayout } from '../layout/LoginLayout'

export const RegisterPage = () => {
  return (
    <LoginLayout>
        <div className="flex flex-col gap-6">

            <h1 className="text-3xl text-center text-blue-600">Register</h1>

            <form className="space-y-1 md:space-y-6" action="#">
                <div>
                    <label htmlFor="name" className="block mb-2 text-md text-blue-600">Name</label>
                    <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-600 sm:text-sm rounded-md focus:outline-blue-400 block w-full p-1" placeholder="Your name" required=""/>
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 text-md text-blue-600">Email</label>
                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-600 sm:text-sm rounded-md  focus:outline-blue-400 block w-full p-1" placeholder="email@email.com" required=""/>
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-md font-medium text-blue-600">Password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-600 sm:text-sm rounded-md focus:outline-blue-400 block w-full p-1" required=""/>
                </div>

                <div>
                    <label htmlFor="password" className="block mb-2 text-md font-medium text-blue-600">Confirm Password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-600 sm:text-sm rounded-md focus:outline-blue-400 block w-full p-1" required=""/>
                </div>

                <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-400 focus:ring-4 focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 text-center transition">Sign in</button>

                <p className="text-sm font-light text-gray-600">
                    Already have an account?
                    <Link
                        to='/auth/login'
                        className="font-medium text-blue-600 hover:underline ml-2"
                    >
                        Login here
                    </Link>
                </p>
            </form>

        </div>
    </LoginLayout>
  )
}
