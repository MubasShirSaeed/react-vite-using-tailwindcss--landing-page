import React from 'react'

const FooterLinks = ({title,link1,link2,link3,link4,link5,link6}) => {
  return (
    <div>
        <p className='font-bold text-xl py-2'>{title}</p>
                <ul className='flex flex-col gap-2'>
                    <li><a href="#">{link1}</a></li>
                    <li><a href="#">{link2}</a></li>
                    <li><a href="#">{link3}</a></li>
                    <li><a href="#">{link4}</a></li>
                    <li><a href="#">{link5}</a></li>
                    <li><a href="#">{link6}</a></li>
                </ul>
    </div>
  )
}

export default FooterLinks