import React from 'react'
import {TbBrandTwitter, TbBrandGithub, TbBrandLinkedin } from "react-icons/tb";

const Footer = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100] bg-black w-full' style={{position: 'relative'}}>
      <h1 className='flex text-white underline items-center justify-center text-2xl font-bold cursor-pointer'>Build by Aditya</h1>
      <div className='flex text-white m-6 px-3 py-3 cursor-pointer'>
        <a className='pl-4' href="https://twitter.com/aditya_sp3" target='_blank'><TbBrandTwitter size={30}/></a>
        <a className='pl-4' href="https://github.com/adityasp1" target='_blank'><TbBrandGithub size={30}/></a>
        <a className='pl-4' href="https://www.linkedin.com/in/aditya-rawat-75b668133/" target='_blank'><TbBrandLinkedin size={30}/></a>
      </div>
    </div>
  )
}

export default Footer;
