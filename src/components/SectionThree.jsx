import React from 'react'
import Btn from "../components/button"
import Illustration from '../assets/illustration1.png'
import Illustration2 from '../assets/illustration2.png'
import Illustration3 from '../assets/illustration3.png'



const SectionThree = () => {
    return (
        <>
        <div className='bg-primaryColor p-10  '>
            <div className='mx-48 my-10 flex flex-col justify-center items-center gap-20  '>
                <div className='flex justify-center items-center '>
                    <div className='max-w-[456px] max-h-[350] text-wrap '>
                        <p className='text-[48px] text-stone-950 font-semibold '>Free AI cover letter generator powered by GPT</p>
                        <p className='text-gray-900 my-5'>A free AI cover letter generator powered by GPT is a tool that uses artificial intelligence and natural language processing to help job seekers create customized and effective cover letters.</p>
                        <Btn text='Try For free Now' />

                    </div>

                    <div className='min-w-[456px] pl-20'>
                        <img src={Illustration} alt="" />
                    </div>
                </div>
                <div className='flex justify-center items-center  '>
                    <div className='min-w-[456px] pr-20'>
                        <img src={Illustration2} alt="" />
                    </div>
                    <div className='max-w-[456px] max-h-[350] text-wrap '>
                        <p className='text-[48px] text-stone-950 font-semibold '>Optimize the keywords in your resume</p>
                        <p className='text-gray-900 my-5'>By optimizing keywords in your resume, you can increase your chances of getting noticed by recruiters and landing interviews for the jobs you want.</p>
                        <Btn text='Optimize your Resume' />

                    </div>


                </div>
            </div>
        </div>

        <div className='my-28 mx-48 '>
                <div className='flex justify-center items-center '>
                    <div className='max-w-[456px] max-h-[350] text-wrap '>
                        <p className='text-[48px] text-white font-semibold '>Free resume design templates</p>
                        <p className='text-gray-100 my-5'>By following these design tips, you can create a professional and effective resume that will help you stand out to recruiters and hiring managers.</p>
                        <a href="#"className=' text-white px-5 py-1 border-2 border-primaryColor rounded-xl hover:bg-primaryColor hover:text-stone-950 hover:font-semibold'>Create an Account</a> 


                    </div>

                    <div className='min-w-[456px] pl-20'>
                        <img src={Illustration3} alt="" />
                    </div>
                </div>
        </div>

        </>
    )
}

export default SectionThree