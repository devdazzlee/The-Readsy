import React from 'react'

const Provide = ({img, heading, para , button}) => {
  return (
    <>
    <div class=" w-auto md:mr-4 md:w-1/6 rounded overflow-hidden shadow-lg bg-white">
    <img class="w-full h-48 object-cover" src={img}alt="Card Image"/>
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{heading}</div>
      <p class="text-gray-700 text-base">{para}</p>
    </div>
    <div class="px-6 py-4 text-center">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {button}
      </button>
    </div>
  </div>

    </>
  )
}

export default Provide