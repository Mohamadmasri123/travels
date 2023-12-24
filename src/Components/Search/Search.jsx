import React from 'react'
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";
const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
        <div className=' lg:col-span-2 flex flex-col justify-evenly pr-6 '>
            <div>
                <h1>
                   Luxury included vacations for two people 
                </h1>
                <p className=' py-4'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, optio. Nostrum eaque hic explicabo reprehenderit veniam non placeat, iusto eos ipsum. Facilis asperiores temporibus maiores inventore modi saepe voluptatem fuga.
                    Eum nobis itaque nesciunt quisquam. Necessitatibus nobis eligendi nam exercitationem reprehenderit, iusto atque, asperiores ab similique porro quod voluptas ea neque et animi debitis fugiat inventore numquam corporis libero laboriosam?
                    Eveniet, deserunt omnis sunt enim, consequuntur porro repudiandae, voluptates ad et ab cumque soluta necessitatibus facere adipisci neque in reprehenderit dicta? Deleniti modi totam fugiat accusamus odit aut quod illo!
                    Earum hic iure aliquid. Perferendis perspiciatis eveniet tenetur iste, error, magnam quo recusandae vel nisi laudantium exercitationem ipsam doloremque sit! Nemo delectus doloremque consequatur tenetur deserunt, asperiores tempore mollitia cum.
                    Sunt necessitatibus explicabo non aut nam corrupti eum sint, consectetur itaque maxime beatae. Molestias explicabo incidunt expedita, tempore dolores nostrum sed ab illum ex distinctio, facilis libero dignissimos veritatis aperiam?
                </p>
            </div>
            <div className='grid sm:grid-cols-2 gap-8 py-4'>
                <div className='flex flex-col lg:flex-row items-center text-center'>
                    <button className='px-3 mr-4'><RiCustomerService2Fill size={50}/>  </button>
                    <div >
                        <h3 className='py-2'>LEADING SERVICE</h3>
                        <p className='py-1'>All-inclusive Company<br/> For 20 Years In-A-Row</p>
                    </div>
                    </div>
                    <div className='flex flex-col lg:flex-row items-center text-center'>
                    <button className='px-3 mr-4'><MdOutlineTravelExplore size={50} />  </button>
                    <div >
                        <h3 className='py-2'>AUTOMATED BOOKINGS</h3>
                        <p className='py-1'>All-inclusive Company<br/> For 20 Years In-A-Row</p>
                    </div>
                    </div>
            </div>

     





        </div>
        <div className='flex flex-col'>
          <div className='border text-center '>
                <p className=' pt-2'>Get an adiitional 10% off</p>
                <p className='py-4'>12 Hours Left</p>
                <p className='  bg-gray-900 text-gray-200 py-2'>Book Now And Safe</p>
                </div>
         <form className='w-full'>
            <div className='flex flex-col my-2' >
                <label >Destination</label>
                <select className=' border rounded-md p-4' >
                    <option>Grande Antigua</ option>
                    <option>Key West</option>
                    <option> Maldives</option>
                    <option> Cozumel</option>  
                 </select>
            </div>
            <div className='flex flex-col my-2' >
                <label> Check-in</label>
                <input type="date"  className=' border rounded-md p-4' />
            </div>

            <div className='flex flex-col my-2' >
            <label > Check-Out</label>
            <input type="date" className=' border rounded-md p-4' />
            </div>

                <button className='w-full my-4 py-3'> Rates && Availabilities</button>




         </form>




        </div>


    </div>
  )
}

export default Search