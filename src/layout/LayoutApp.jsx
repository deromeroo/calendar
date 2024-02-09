import Proptypes from 'prop-types'

export const LayoutApp = ({ children }) => {
  return (
    <>
        <div className="absolute top-0 -z-10 h-full w-full bg-white"><div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(99,102,241,0.8)] opacity-50 blur-[80px]"></div></div>
        <main className="p-4 w-full h-[100vh] grid">
          {children}
        </main>
    </>
  )
}

LayoutApp.propTypes = {
  children: Proptypes.element.isRequired
}
