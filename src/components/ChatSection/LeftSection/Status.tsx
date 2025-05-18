
const Status = () => {
  return (
    <div className='flex items-center justify-between w-full h-[100px] bg-neutral-300 my-2 rounded-sm'>
      <div id='status' className='flex items-center justify-center w-[70px] h-[70px] border-3 border-black mx-7 bg-white rounded-full text-center'>
        {/* profilePic */}
      </div>
      <div id='other-status' className='flex items-center justify-around w-2/3 h-[80px] mx-7 bg-neutral-400 rounded-sm'>
        <div className='flex items-center justify-center w-[70px] h-[70px] bg-white rounded-full text-center'>
          1
        </div>
        <div className='flex items-center justify-center w-[70px] h-[70px] bg-white rounded-full text-center'>
          2
        </div>
        <div className='flex items-center justify-center w-[70px] h-[70px] bg-white rounded-full text-center'>
          3
        </div>
        <div className='flex items-center justify-center w-[70px] h-[70px] bg-white rounded-full text-center'>
          4
        </div>
        <div className='flex items-center justify-center w-[70px] h-[70px] bg-white rounded-full text-center'>
          5
        </div>
      </div>
    </div>
  )
}

export default Status