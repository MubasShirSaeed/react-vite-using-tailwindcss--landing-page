import React from 'react'
import { IoDocumentOutline } from "react-icons/io5";
import { FiMaximize } from "react-icons/fi";
import { FiRadio } from "react-icons/fi";

const Hero = () => {
    return (
        <div className='flex flex-col min-h-screen '>
            <div className='text-white flex flex-col  items-center pt-24'>
                <div className='flex flex-col  items-center text-[88px] font-semibold '>
                    <p className='text-primaryColor'>Win your Dream Job</p>
                    <p>With Post Job</p>
                </div>
                <div className='max-w-[474px] max-h-[72px] p-5 text-center text-gray-100'>
                    <p>Submit better job app — 10x faster. AI cover letter generator, resume keyword checker, outreach message writer, and more. Powered by GPT</p>
                </div>
                <div className='mt-16 px-3 max-w-[567] max-h-[60]  border-2 rounded-xl border-gray-100'>
                    <input className=' bg-transparent p-3  placeholder-gray-100 focus:outline-none focus:border-none' type="text" placeholder='enter email' />
                    <a href="#" className=' px-5 py-1 border-2 border-primaryColor rounded-xl text-stone-950 bg-primaryColor font-semibold hover:text-gray-100'>Start For Free</a>

                </div>

            </div>
            <div className='flex gap-6 mx-12 my-12'>

                <div className='flex flex-col max-h-[361] max-w-[204] bg-stone-800 rounded-2xl p-12'>
                    <p className='text-4xl text-primaryColor mb-4 '>
                        <IoDocumentOutline />
                    </p>
                    <p className='font-semibold text-white'>AI Cover Latter Genrator</p>
                    <p className='flex-wrap text-gray-100 mt-2'>The AI Cover Letter Generator is a tool that uses artificial intelligence algorithms to create personalized cover letters for job applicants.</p>
                </div>
                <div className='flex flex-col max-h-[361] max-w-[204] bg-stone-800 rounded-2xl p-12'>
                    <p className='text-4xl text-primaryColor mb-4 '>
                    <FiRadio />
                    </p>
                    <p className='font-semibold text-white'>Smart Presentation</p>
                    <p className='flex-wrap text-gray-100 mt-2'>Smart Personalization refers to the use of data and technology to deliver tailored experiences and content to individual customers or users.</p>
                </div>
                <div className='flex flex-col max-h-[361] max-w-[204] bg-stone-800 rounded-2xl p-12'>
                    <p className='text-4xl text-primaryColor mb-4 '>
                    <FiMaximize />
                    </p>
                    <p className='font-semibold text-white'>Resume Scanner</p>
                    <p className='flex-wrap text-gray-100 mt-2'>A resume scanner is a software application that uses optical character recognition (OCR) technology to extract and analyze data from resumes.</p>
                </div>

            </div>

        </div>
    )
}

export default Hero