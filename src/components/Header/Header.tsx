import { useState } from 'react'
import OptionBar from './OptionsBar'
import UserName from './UserName'

const Header = () => {
    const [isAuth, setIsAuth] = useState(false)
    
  return (
    <header className='flex justify-center items-center bg-gray-800 text-white p-4 w-screen h-[100px]'>
        {isAuth && <UserName username='BlackHat'/>}
        <div>
            AppoChat
        </div>
        {isAuth && <OptionBar />}
    </header>
  )
}


export default Header