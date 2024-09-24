import React from 'react'
import Btn from "./button"
import FooterLinks from './FooterLinks'
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";



const Footer = () => {
    return (
        <div className='bg-primaryColor px-48 py-10'>
            <div className=' flex flex-col  text-stone-950 items-center '>
                <div className='max-w-[456px] text-center '>
                    <p className='text-6xl font-semibold'>What’s next</p>
                    <p className='text-wrap py-5'>Submit better job app — 10x faster. AI cover letter generator, resume keyword checker, outreach message writer, and more. Powered by GPT</p>
                    <Btn text="Try For Free" />
                </div>
                <div className='grid grid-cols-4 my-10 gap-10'>
                    <div>
                        <FooterLinks title='Platform' link1='Plans and Prices' link2='AI Create Letters' link3='AI Resume Checker' link4='Resume Templates' link5='Sell Templates' link6='Blog' />
                    </div>
                    <div>
                        <FooterLinks title='Features' link1='AI Cover Letter Creator' link2='Resume Keywords Optimizer' link3='ATS Resume Checker' />
                    </div>
                    <div>
                        <FooterLinks title='Resources' link1='4 AI Tools for Applying a Job' link2='How to optimize Resume keywords' link3='Why you should use Chat GPT for create Resume' link4='What should you include in a Cover Letter' />
                    </div>
                    <div>
                        <FooterLinks className='m-0 p-0' title='Support' link1='support@gmail.com' />
                        <div className='flex text-2xl gap-6 '>
                            <span><FaInstagram className='cursor-pointer hover:scale-125 hover:text-gray-800' />
                            </span>
                            <span><FaFacebook className='cursor-pointer hover:scale-125 hover:text-gray-800' /></span>
                            <span><FaLinkedin className='cursor-pointer hover:scale-125 hover:text-gray-800' /></span>
                            <span><FaTelegram className='cursor-pointer hover:scale-125 hover:text-gray-800' /></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center border-t-2 border-stone-950 pt-10'>
                <p>© Copywriting | All Rights Reserved | Terms of Use | Privacy</p>
            </div>
        </div>
    )
}

export default Footer