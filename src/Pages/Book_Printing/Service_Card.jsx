import React from 'react'

const Service_Card = ({img , heading, para}) => {
  return (
    <div  className='flex flex-col items-center' >
    <img className='w-48	' src={img} alt="" />
    <h1  className='text-xl font-bold text-center' >{heading}</h1>
    <p  className='w-64 text-center' >   {para}</p>
    </div>
  )
}

export default Service_Card