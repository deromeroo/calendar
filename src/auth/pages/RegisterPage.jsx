import { Link } from 'react-router-dom'
import { LoginLayout } from '../layout/LoginLayout'
import { useForm } from '../../hooks'

const registeFormFields = {
  name: '',
  email: '',
  password: '',
  password2: ''
}

export const RegisterPage = () => {
  const {
    name,
    email,
    password,
    password2,
    onInputChange
  } = useForm(registeFormFields)

  const registerSubmit = (e) => {
    e.preventDefault()

    console.log({
      email,
      password,
      password2,
      name
    })
  }

  return (
    <LoginLayout>
        <div className="flex flex-col gap-2">

            <h1 className="text-3xl text-center text-indigo-600">Register</h1>

            <form
                onSubmit={ registerSubmit }
                className="space-y-4 md:space-y-6"
            >
                <div>
                    <label htmlFor="name" className="block mb-2 text-md text-indigo-600">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={ name }
                        onChange={ onInputChange }
                        placeholder="Your name"
                        required
                        className="bg-gray-50 border border-gray-300 text-gray-600 sm:text-sm rounded-md focus:outline-indigo-400 block w-full p-1"
                        />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 text-md text-indigo-600">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="email@email.com"
                        value={ email }
                        onChange={ onInputChange }
                        required
                        className="bg-gray-50 border border-gray-300 text-gray-600 sm:text-sm rounded-md  focus:outline-indigo-400 block w-full p-1"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-md font-medium text-indigo-600">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        value={ password }
                        onChange={ onInputChange }
                        required
                        className="bg-gray-50 border border-gray-300 text-gray-600 sm:text-sm rounded-md focus:outline-indigo-400 block w-full p-1"
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block mb-2 text-md font-medium text-indigo-600">Confirm Password</label>
                    <input
                        type="password"
                        name="password2"
                        id="password2"
                        placeholder="••••••••"
                        value={ password2 }
                        onChange={ onInputChange }
                        required
                        className="bg-gray-50 border border-gray-300 text-gray-600 sm:text-sm rounded-md focus:outline-indigo-400 block w-full p-1"
                    />
                </div>

                <button type="submit" className="w-full text-white bg-indigo-600 hover:bg-indigo-400 focus:ring-4 focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 text-center transition">Sign in</button>

                <p className="text-sm font-light text-gray-600">
                    Already have an account?
                    <Link
                        to='/auth/login'
                        className="font-medium text-indigo-600 hover:underline ml-2"
                    >
                        Login here
                    </Link>
                </p>
            </form>

        </div>
    </LoginLayout>
  )
}
