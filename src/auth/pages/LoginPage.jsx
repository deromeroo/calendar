import { Link } from 'react-router-dom'
import { LoginLayout } from '../layout/LoginLayout'
import { useForm } from '../../hooks'

const loginFormFields = {
  email: '',
  password: ''
}

export const LoginPage = () => {
  const {
    email,
    password,
    onInputChange
  } = useForm(loginFormFields)

  const loginSubmit = (e) => {
    e.preventDefault()

    console.log({
      email,
      password
    })
  }

  return (
    <LoginLayout>
      <div className="flex flex-col gap-6">

        <h1 className="text-3xl text-center text-indigo-600">Login</h1>

        <form
          onSubmit={ loginSubmit }
          className="space-y-4 md:space-y-6"
        >
            <div>
                <label htmlFor="email" className="block mb-2 text-md text-indigo-600">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={ email }
                  onChange={ onInputChange }
                  required
                  placeholder="email@email.com"
                  className="bg-gray-50 border border-gray-300 text-gray-600 sm:text-sm rounded-md focus:outline-indigo-400 block w-full p-1"
                />
            </div>
            <div>
                <label htmlFor="password" className="block mb-2 text-md font-medium text-indigo-600">Password</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={ password }
                  onChange={ onInputChange }
                  placeholder="••••••••"
                  required=""
                  className="bg-gray-50 border border-gray-300 text-gray-600 sm:text-sm rounded-md focus:outline-indigo-400 block w-full p-1"
                />
            </div>

            <button type="submit" className="w-full text-white bg-indigo-600 hover:bg-indigo-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-md text-sm px-5 py-2.5 text-center transition">Sign in</button>

            <p className="text-sm font-light text-gray-600 ">
                Don't have an account yet?
                <Link
                    to='/auth/register'
                    className="font-medium text-indigo-600 hover:underline dark:text-primary-500 ml-2"
                >
                    Sign up
                </Link>
            </p>
        </form>

      </div>
    </LoginLayout>

  )
}
