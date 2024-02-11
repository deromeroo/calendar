import 'animate.css'

export const LoginLayout = ({ children }) => {
  return (
    <section className="sm:w-[60%] m-auto p-8 items-center bg-white rounded-md border  shadow-xl animate__animated animate__fadeIn">
        {children}
    </section>
  )
}
