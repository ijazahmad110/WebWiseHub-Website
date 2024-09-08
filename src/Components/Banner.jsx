import React from 'react'
import { ReactTyped } from "react-typed";


const Banner = () => {
  return (
    <div className='bg-[#C51E3A] w-full'>
        <div className='max-w-[1240px] py-[100px] mx-auto text-center font-bold'>
            <div className='text-xl md:text-3xl md:p-[20px]'>Learn with us</div>
            <h2 className='text-white text-5xl md:text-[80px] md:p-[20px]'>Grow with us.</h2>
            <div className='text-[20px] md:text-[50px] text-white md:p-[20px]'>Learn
            <ReactTyped className='pl-3' strings={["Web Development","Digital Marketing","Ethical Hacking"]} typeSpeed={100}
            loop={true} 
            backSpeed={120}/>
            </div>
            <button className='bg-black text-white rounded p-3'>Get started</button>

        </div>

      
    </div>
  )
}

export default Banner
