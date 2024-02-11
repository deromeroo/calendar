import { Navigate, Route, Routes } from 'react-router-dom'
import { CalendarPage } from '../calendar'
import { AuthRoutes } from '../auth'
import { useAuthStore } from '../auth/hooks'
import { useEffect } from 'react'

export const AppRouter = () => {
  const { status, checkAuthToken } = useAuthStore()

  useEffect(() => {
    checkAuthToken()
  }, [])

  if (status === 'checking') {
    return (
      <h3>Loading...</h3>
    )
  }

  return (
    <Routes>
        {
            (status === 'not-authenticated')
              ? (
                  <>
                    <Route path='/auth/*' element={ <AuthRoutes /> }/>
                    <Route path='/*' element={ <Navigate to='/auth/login'/> } />
                  </>
                )
              : (
                  <>
                    <Route path='/' element={ <CalendarPage /> }/>
                    <Route path='/*' element={ <Navigate to='/'/> } />
                  </>
                )
        }

    </Routes>
  )
}
