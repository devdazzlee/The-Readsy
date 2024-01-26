import React from 'react'

const Text_Heading = ({heading, description}) => {
  return (
    <>
    
<div  className='w-9/12 m-auto my-16'  >
<h1 className=' text-2xl sm:text-4xl font-bold text-center sm:text-center my-8'>
{heading}
          </h1>
          <p className='text-center '>
        {description}
          </p>

</div>
    </>
  )
}

export default Text_Heading