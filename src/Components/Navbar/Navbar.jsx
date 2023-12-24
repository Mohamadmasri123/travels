import React,{useState}  from 'react'
import { CiUser,CiSearch,CiMenuBurger   } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { FaFacebook,FaInstagram,FaYoutube} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandPicsart } from "react-icons/tb";



const Navbar = () => {
  const[nav ,setNav]=useState(false)
  const handleNav =()=>{
    setNav(!nav)
  }
  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
            <div>
                 <h1>MHD_TRAVEL.</h1>
            </div>
            <ul className='hidden md:flex '>
                <li className=''>Home</li>
                <li>Destinations</li>
                <li>Travel</li>
                <li>Views</li>
                <li>Book</li>
            </ul>
            <div className='hidden md:flex'> 
              <CiSearch size={23} className='mr-2' />
                <CiUser size={23}/>
             
            </div>
            {/* nav menu  dropdown*/}
            <div onClick={handleNav} className='md:hidden z-10 ' >
              {
                nav? <AiOutlineClose className='text-black'/> : <CiMenuBurger size={23} />
              }
           
            </div>
            <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-5 flex flex-col' :'absolute left-[-100%] top-0 w-full bg-gray-100/90 px-4 py-5 flex flex-col'} >
              <ul> 
                <div className='flex'> 
                  <h1>MHD_TRAVEL.</h1> 
                  
                </div>
             

              <li className=' border-b border-b-black py-3'>Home</li>
                <li className=' border-b border-b-black py-3'>Destinations</li>
                <li  className=' border-b border-b-black py-3'>Travel</li>
                <li  className=' border-b border-b-black py-3'>Views</li>
                <li className=' border-b border-b-black py-3'>Book</li>
                <div className='flex flex-col pt-4'>
                  <button >Search</button>
                  <button>Account</button>
                </div>
                <div className='flex  '>
                <FaFacebook  className='icon ' />
                <FaXTwitter className='icon' />
                <FaInstagram className='icon'/>
                <TbBrandPicsart className='icon' />
                <FaYoutube className='icon' />
                </div>

              </ul>

            </div>
    </div>
  )
}

export default Navbar