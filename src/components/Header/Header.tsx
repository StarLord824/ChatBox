import OptionBar from './OptionsBar'

const Header = (props: { isAuth: boolean }) => {
  const userName = localStorage.getItem('userName') || 'BlackHat'
  return (
    <header className='flex justify-between items-center text-white w-screen h-1/10 mt-1 mb-1 p-4 backdrop-blur-lg bg-white/25 border border-white/30 rounded-xl shadow-lg'>
        {
          props.isAuth && 
            <div>
              {userName}
            </div>
        }
        <div className='flex items-center justify-center w-full h-full'>
            <img src="../../../public/logoSansuChat.png" alt="Logo" className="absolute h-20" />
        </div>
        {props.isAuth && <OptionBar />}
    </header>
  )
}


export default Header