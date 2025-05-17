import React from 'react'

const List = () => {
  return (
    <div className='flex flex-col items-center w-full h-[750px] bg-neutral-300 m-0.5 my-2 rounded-sm overflow-scroll'>
      <SingleChat />
      <SingleChat />
      <SingleChat />
      <SingleChat />
      <SingleChat />
      <SingleChat />
      <SingleChat />
    </div>
  )
}

const SingleChat = () => {
  return (
    <div className='h-[70px] w-10/11 bg-neutral-500 m-0.5 rounded-sm '>

    </div>
  )
}

export default List