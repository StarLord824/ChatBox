import OptionBar from './OptionsBar'
import UserName from './UserName'

const Header = (props: { isAuth: boolean }) => {

  return (
    <header className='absolute top-0 flex justify-around items-center bg-gray-800 text-white p-4 w-screen h-[100px] mb-0.5'>
        {props.isAuth && <UserName username='BlackHat'/>}
        <div>
            AppoChat
        </div>
        {props.isAuth && <OptionBar />}
    </header>
  )
}


export default Header