import React from 'react'

const card = ({title,text,Icon}) => {
  return (
    <div>
        <div className='flex flex-col max-h-[361] max-w-[204] bg-stone-800 rounded-2xl p-12'>
                    <p className='text-4xl text-primaryColor mb-4 '>
                        <Icon />
                    </p>
                    <p className='font-semibold text-white'>{title}</p>
                    <p className='flex-wrap text-gray-100 mt-2'>{text}</p>
                </div>
    </div>
  )
}

export default card