import OptionBar from './OptionsBar'

const Header = (props: { isAuth: boolean }) => {

  const userName = localStorage.getItem('userName') || 'BlackHat'
  return (
    <header className='flex justify-between items-center text-white w-screen h-1/10 mt-1 mb-1 p-4 bg-neutral-500'>
        {
          props.isAuth && 
            <div>
              {userName}
            </div>
        }
        <div className='flex items-center justify-center w-full h-full'>
            SansuChat
        </div>
        {props.isAuth && <OptionBar />}
    </header>
  )
}


export default Header