import React from 'react'

const Experts = () => {
  return (
    <div className='max-w-[1240px] my-10 mx-auto  md:grid grid-cols-2 p-2'>


           {/* left section */}
        <div className='col-span-1 md:w-[80%] text-center'><img src="laptop.jpg" alt=""className='inline' /></div>

        {/* right section */}
        <div className='flex flex-col justify-center  col-span-1'>
            <h1 className='text-[#00df9a] font-bold my-2'>LEARN FROM EXPERTS</h1>
            <p className='my-2 text-justify'>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?</p>
            <button className='bg-black text-white rounded p-3 w-[30%]'>Get started</button>
        </div>

      
    </div>
  )
}

export default Experts
