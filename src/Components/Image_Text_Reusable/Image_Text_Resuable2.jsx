import React from 'react'
import { Link } from 'react-router-dom'

const Image_Text_Reusable2 = ({title, title2 , description , button , image  }) => {
  return (
    <div style={{"marginTop" : "40px"}} className='flex flex-col items-center m-auto  sm:flex-row sm:w-4/6 sm:justify-center'>
         <div className='w-full sm:w-2/4 mt-4 sm:mt-0'>
          <img className='w-full rounded-lg' src={image} alt="" />
        </div>
        <div className='w-full sm:w-2/4 px-12'>
          <h1 className='text-white text-2xl sm:text-4xl font-bold text-center sm:text-left my-8'>
          {title} <br />{title2}
          </h1>
          <p className='text-start  text-white'>
            {description}
          </p>
          <Link to={'/contact'}>
            
  
          <button style={{ background: '#000000' }} className="my-4 capatiliz w-full md:w-auto text-white font-bold py-4 px-8  rounded">
             {button}
            </button>
            </Link>
        </div>
      </div>
  )
}

export default Image_Text_Reusable2