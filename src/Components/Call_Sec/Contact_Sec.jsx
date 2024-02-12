import React from 'react'
import { Link } from 'react-router-dom'

const Contact_Sec = () => {
  return (
    <>
   <div   style={{ background: '#10AFD0' }}   className='text-center py-4' >
   <h1  className='text-4xl font-bold m-4 text-white'>Not Sure Where To Start? <br />Give Us A Call!</h1>
    <p  className='m-4 text-white'>Our initial consultation is free, and we’re happy to review your existing material (regardless <br /> of how rough it is) and advise you on your best next steps.</p>
    <div className='text-lg font-bold m-4 text-white  '>+1 737-222-7373</div> 
    <Link to={'/contact'}>
            
    <button className="bg-black capatiliz w-full md:w-auto text-white font-bold py-3 px-4  rounded">
            Contact Us
            </button>
            </Link>
   </div>
    </>
  )
}

export default Contact_Sec