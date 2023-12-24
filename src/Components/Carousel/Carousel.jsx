import React from 'react'
import { useState } from 'react'

import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const sliderData=[
  {
    url:"https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
      url:"https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    url:"https://images.unsplash.com/photo-1528543606781-2f6e6857f318?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }]
  
const Carousel = () => {
  const [slide , setSlide]= useState(1)
  const length = sliderData.length


 const nextSlider =() =>{
    setSlide(slide===length-1 ? 0 : slide+1) 
   


  } 

  const prevSlider =() =>{
    setSlide(slide===0 ? length-1 : slide-1)
   

  }
  console.log(slide)

  


  return (
    <div className=' max-w-[1240px]  mx-auto px-4 py-6 relative flex justify-center items-center'>
        <FaArrowLeft onClick={prevSlider} className=' absolute top-[50%] text-3xl text-white  left-10   '/>
        <FaArrowRight onClick={nextSlider}  className=' absolute top-[50%] text-3xl text-white right-10'   />
       
      {sliderData.map((item,index)=>(
        <div className={index === slide ? 'opacity-100' : "opacity-0"}>
       {index === slide && (<img src={item.url} alt=""  className='w-[1200px] rounded-md h-[600px]'/>)}
          
        </div>
      ))
}

        
    </div>
  )
}

export default Carousel