import OptionBar from './OptionsBar'

const Header = (props: { isAuth: boolean }) => {

  const userName = localStorage.getItem('userName') || 'BlackHat'
  return (
    <header className='flex justify-around items-center text-white w-screen h-1/10 mt-1 mb-1 p-4 bg-neutral-900'>
        {
          props.isAuth && 
            <div>
              {userName}
            </div>
        }
        <div>
            SansuChat
        </div>
        {props.isAuth && <OptionBar />}
    </header>
  )
}


export default Header