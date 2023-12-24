import React from 'react'
import vd from "./../../assets/beachVid.mp4"
import { CiSearch   } from "react-icons/ci";

const Home = () => {
  return (
    <div className='w-full h-screen relative'>
      <video className='w-full h-full object-cover ' src={vd} autoPlay loop muted></video>
      <div  className='absolute w-full h-full top-0 left-0 bg-gray-900/5'>
      <div className='text-white absolute top-0 left-0 w-full h-full flex flex-col text-center p-5  justify-center '>
        <h1>First Class Travel</h1>
        <h2>Top 1% Location WorldWide </h2>
        <form  className='flex justify-between items-center max-w-[500px] mx-auto w-full p-1  rounded-md text-black border bg-gray-100/90 ' >
        <div>
          <input  type="text" placeholder='Search Destinations' className='bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none  '  />
        </div>
        <div>
          <button className='p-3'><CiSearch size={20} /></button>
        </div>
        </form>
      </div>


      </div>


    </div>
  )
}

export default Home