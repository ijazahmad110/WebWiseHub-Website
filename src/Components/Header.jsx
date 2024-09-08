import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";



const Header = () => {

    const [toggle,setToggle]=useState(false);
  return (
    <div className='bg-[#FDBCB4] p-4'>
        <div className='max-w-[1240px]  mx-auto flex justify-between items-center py-[8px]'>

            <div className='text-3xl font-bold'>
            WebWiseHub
            </div>
            {
                toggle?
                <IoClose onClick={()=>setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
                :
                <AiOutlineMenu onClick={()=>setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
            }
           
            <ul className=' text-white gap-10 hidden md:flex cursor-pointer font-medium'>
                <li className='hover:text-[#AB274F]'>Home</li>
                <li className='hover:text-[#AB274F]'>Company</li>
                <li className='hover:text-[#AB274F]'>Resources</li>
                <li className='hover:text-[#AB274F]'>About</li>
                <li className='hover:text-[#AB274F]'>Contact</li>
            </ul>

            {/* Responsive menu */}
            <ul className={`duration-300 md:hidden text-white  fixed bg-black  top-[92px] w-full h-screen ${toggle? `left-[0]`:`left-[-100%]`} `}>
                <li className='p-5'>Home</li>
                <li className='p-5'>Company</li>
                <li className='p-5'>Resources</li>
                <li className='p-5'>About</li>
                <li className='p-5'>Contact</li>
            </ul>

        </div>
    </div>
  )
}

export default Header
