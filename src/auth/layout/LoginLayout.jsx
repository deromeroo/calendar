import 'animate.css'

export const LoginLayout = ({children}) => {
  return (
    <section className="sm:w-[60%] m-auto p-8 items-center glass shadow-xl animate__animated animate__fadeIn">
        {children}
    </section>
  )
}
