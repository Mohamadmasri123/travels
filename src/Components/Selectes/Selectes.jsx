import React from 'react'
import borabora from "./../../assets/borabora.jpg"
import maldives from"./../../assets/maldives.jpg"
import maldives2 from "./../../assets/maldives2.jpg"
import borabora2 from "./../../assets/borabora2.jpg"
import keywest from "./../../assets/keywest.jpg"
import maldives3 from "./../../assets/maldives3.jpg"
import SelectCard from '../SelectCard/SelectCard'

const Selectes = () => {
  return (
   <div className=' max-w-[1240px] mx-auto py-16 px-4  grid  sm:grid-cols-2 lg:grid-cols-3 md:gap-4 '>
      
      <SelectCard bg={borabora} text='Bora Bora'    />
      <SelectCard bg={maldives} text='Maldives' height='2px' width='300px'   />
      <SelectCard bg={maldives2} text='Antigua'    />
      <SelectCard bg={borabora2} text='Cozumel'    />
      <SelectCard bg={keywest} text='Jamaica' className={"w-[400px] h-[261px]"}/>
      <SelectCard bg={maldives3} text='Key West' className={"h-[261px]"}/>


    </div>
  )
}

export default Selectes