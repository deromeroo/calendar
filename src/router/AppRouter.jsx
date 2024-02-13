import { Navigate, Route, Routes } from 'react-router-dom'
import { CalendarPage } from '../calendar'
import { AuthRoutes } from '../auth'
import { useAuthStore } from '../auth/hooks'
import { useEffect } from 'react'
import { Loading } from '../components/Loading'

export const AppRouter = () => {
  const { status, checkAuthToken } = useAuthStore()

  useEffect(() => {
    checkAuthToken()
  }, [])

  if (status === 'checking') {
    return (
      <Loading />
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
