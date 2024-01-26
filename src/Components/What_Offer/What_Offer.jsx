import React from 'react'
import FlipCard from '../Flip_Card/Flip_Card'
import support from '../../Images/support.png'
import DisplayCards from '../Display_Card/Display_Card'
import DisplayCards2 from '../Display_Card/Display_Card2'

const What_Offer = () => {
  return (
    <>
    
<h3 style={{"textDecoration" : "underlined"}}   className='text-center font-bold my-2' >WHAT WE OFFER</h3>
<hr style={{ borderTop: '2px solid red', width: '10%', margin: '0 auto' }} />

<h1 className='text-4xl font-bold text-center my-6 mb-6' >Why Should You Hire Our Services?</h1>


<DisplayCards/>
<DisplayCards2/>




    </>
  )
}

export default What_Offer