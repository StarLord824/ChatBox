import React from 'react'

const SearchChat = () => {
  return (
    <div className='flex items-center justify-around w-full h-[100px] bg-neutral-300 m-0.5 rounded-sm'>
      <form action="" className='flex items-center justify-around w-[250px] h-[70px] bg-neutral-500 rounded-sm'>
        <input type="text" placeholder='Search...' className='' />
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default SearchChat