import React from 'react'
import './Display_Card6.css'

const Display_Card6 = () => {
  return (
    <div className='dp-6-bg m-auto w-full md:w-3/4 h-auto md:h-72 flex flex-col justify-center'>
      <h1 className='ml-6 text-2xl font-medium'>PROFESSIONAL</h1>
      <h1 className='ml-6 text-2xl font-medium underline my-2'>GHOSTWRITING SERVICES</h1>
      <p className='ml-6 w-full md:w-2/4'>Available the chance to work alongside authors that are considered to be pioneers of the industry. Our commitment to quality and customer service is unmatched by anyone in the industry as we always try to keep our customers as happy as we can.</p>
      <div className='mt-4 ml-0 md:ml-6 '>
        <button style={{ background: '#10AFD0' }} className=" mr-0 md:mr-4  w-full md:w-auto text-white font-bold py-4 px-4 rounded mb-4 md:mb-0">
          Consult an Expert
        </button>
        <button style={{ background: '#10AFD0' }} className="w-full md:w-auto text-white font-bold py-4 px-4 rounded">
          Consult an Expert
        </button>
      </div>
    </div>
  )
}

export default Display_Card6
