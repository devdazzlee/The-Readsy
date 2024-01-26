import React from 'react'

const Binding_Cards = ({img, heading , descrition}) => {
  return (
    <div class="m-0   md:mr-3  max-w-sm rounded overflow-hidden shadow-lg bg-white">
    <img class="w-full h-48 object-cover" src={img} alt="Card Image"/>
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{heading}</div>
      <p class="text-gray-700 text-base">{descrition}</p>
    </div>
    
  </div>

  )
}

export default Binding_Cards