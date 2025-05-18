import React from 'react'

const Chat = () => {
  return (
    <div className='flex flex-col items-center justify-between h-full w-2/3 bg-neutral-500 m-0.5 mr-2 rounded-sm'>
      <Messages/>
      <TypeMessage />
    </div>
  )
}

const Messages = () => {
  return (
    <div className='h-9/10 w-full bg-amber-50 m-0.5 pt-3'>
      <div>Message 1</div>
      <div>Message 1</div>
      <div>Message 1</div>
      <div>Message 1</div>
      <div>Message 1</div>
      <div>Message 1</div>
      <div>Message 1</div>
      <div>Message 1</div>
      <div>Message 1</div>
    </div>
  )
}

const TypeMessage = () => {
  return (
    <div className='flex items-center justify-between w-full h-[60px] mx-2 mt-0.5 mb-5 py-0.5 px-2 rounded-sm text-neutral-100 font-semibold text-lg text-center bg-gray-800 rounded-2xl'>
      <input type="text" placeholder='Type your message...' className='text-neutral-100 font-semibold text-lg text-center w-full h-full p-0.5 mx-auto bg-neutral-500 rounded-2xl border-white' />
      <button>Send</button>
    </div>
  )
}

export default Chat