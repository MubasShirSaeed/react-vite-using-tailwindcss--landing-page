import React from 'react'
import Overlay from '../assets/Overlay.png'
import Image from '../assets/Image.png'


const SectionOne = () => {
  return (
    <div className='m-12 min-h-screen flex flex-col justify-center items-center'>
        <div className='bg-primaryColor rounded-2xl pt-10' >
            <div className='text-center flex flex-col items-center text-stone-950 '>
                <p className='text-[38px]  font-semibold'>Submit Better Job</p>
                <p className='text-[38px] font-semibold'>Applications</p>
                <p className='text-[100px]'>10x faster</p>
                <div className='max-w-[474px] max-h-[48px] items-center '>
                <p className='text-[16px]  text-wrap'>AI cover letter generator, resume keyword checker, outreach message writer, and more. Powered by GPT</p>
                </div>
                <div className='relative p-6 w-full h-full'>
                <img className='' src={Image} alt="" />
                <img className='absolute bottom-0 left-0 right-0 rounded-b-2xl' src={Overlay} alt="" />
                
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default SectionOne