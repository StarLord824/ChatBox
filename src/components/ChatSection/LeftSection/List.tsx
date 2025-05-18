import React from 'react'

const List = () => {
  return (
    <div className='flex flex-col w-full h-screen bg-neutral-300 m-0.5 my-4 py-3 rounded-sm overflow-y-scroll'>
      <SingleChat />
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
    <div className='h-[70px] w-10/11 bg-neutral-500 mx-auto my-1.5 rounded-lg '>

    </div>
  )
}

export default List