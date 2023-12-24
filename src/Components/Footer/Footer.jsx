
import React from 'react'

import { FaFacebook,FaInstagram,FaYoutube} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandPicsart } from "react-icons/tb";

const Footer = () => {
  return (
    <div className=' w-full bg-gray-100 py-8'>
        <div className=' max-w-[1240px] mx-auto flex flex-col px-4'>
        <div className=' sm:flex text-center justify-between items-center'>
            <h1 className=' '>Mhd-Travel</h1>
            <div className=' flex justify-between w-full sm:max-w-[280px]  my-2 mr-0'>
                <FaFacebook  className='icon  mr-0' />
                <FaXTwitter className='icon mr-0' />
                <FaInstagram className='icon mr-0'/>
                <TbBrandPicsart className='icon mr-0' />
                <FaYoutube className='icon mr-0' />
                </div>
        </div>
        <div className='flex justify-between pt-8 '>
        <ul className=' lg:flex'>
            <li>About</li>
            <li>Partnerships</li>
            <li>Careers</li>
            <li>Newsroom</li>
            <li>Adversting</li>
        </ul>
        <ul className=' text-right lg:flex'>
        <li className=''>Home</li>
                <li>Destinations</li>
                <li>Travel</li>
                <li>Views</li>
                <li>Book</li>
        </ul>

        </div>
</div>

    </div>
  )
}

export default Footer