import React from 'react'

const NewsLetter = () => {
  return (
    <div className='bg-[#C51E3A] p-4'>



        <div className='max-w-[1240px] mx-auto md:flex justify-between py-[50px]'>

             {/* left section */}
            <div  className='m-2'>
                <h1 className=' text-[20px] md:text-[40px] font-bold text-white'> Want to learn latest I.T skills?</h1>
                <span className='text-white'>Sign up to our newsletter and stay up to date.</span>
            </div>

             {/* Right section */}
            <div className='m-2'> 
                <input type="text" name="" id="" className=' mb-2 p-3 mr-2 text-slate-600 rounded' placeholder='Email'/>
                <button className='bg-black text-white rounded p-3 font-semibold'>Notify Me</button>
                <br/>
                <p className='text-white mt-3'>We care bout the protection of your data. Read our</p>
                 <a href="" className='text-black'>Privacy Policy.</a>

            </div>


        </div>
      
    </div>
  )
}

export default NewsLetter
