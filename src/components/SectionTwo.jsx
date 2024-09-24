import React from 'react'
import Card from './card'
import { CiFileOn,CiMail } from "react-icons/ci";
import { IoIosGitBranch } from "react-icons/io";
import { BsSend } from "react-icons/bs";
import { PiSquaresFourLight } from "react-icons/pi";
import { PiCodesandboxLogo } from "react-icons/pi";


const SectionTwo = () => {
  return (
    <div className='flex items-center flex-col justify-center text-gray-100  '>
         <div className='max-w-[358px] text-center '>
                    <p className='text-6xl text-white font-semibold'>Spend less time looking for work</p>
                    <p className='text-wrap py-5 '>We'll help you through the hardest part of your job search.</p>
                    <a href="#"className='px-5 py-1 border-2 border-primaryColor rounded-xl hover:bg-primaryColor hover:text-stone-950 hover:font-semibold'>Create an Account</a> 

                </div>
                <div className='flex justify-center items-center   mx-12 my-12'>
                <div className='grid col-span-3 grid-cols-3 gap-6'>
                    <Card title='Cover Letter'text='A cover letter is a document that accompanies a job application and is written to introduce the applicant to the employer.'Icon={CiFileOn}/>
                    <Card title='Resignation Letters'text='A resignation letter is a formal document that an employee writes to inform their employer of their decision to leave the company.'Icon={CiMail}/>
                    <Card title='Connection Request'text='A connection request is a message sent on a social networking site, such as LinkedIn, requesting to connect with another user.'Icon={IoIosGitBranch}/>
                    <Card title='Outreach Emails'text='Outreach emails are messages sent by individuals or businesses to introduce themselves, establish a connection, or propose a collaboration.'Icon={BsSend}/>
                    <Card title='Resume Optimization'text='Smart Personalization refers to the use of data and technology to deliver tailored experiences and content to individual customers or users.'Icon={PiSquaresFourLight}/>
                    <Card title='Resume Design'text='A resume scanner is a software application that uses optical character recognition (OCR) technology to extract and analyze data from resumes.'Icon={PiCodesandboxLogo}/>
                </div>
                </div>
    </div>
  )
}

export default SectionTwo