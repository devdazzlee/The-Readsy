import React from 'react'

const Button_Text = ({buttonTxt ,  parahraph } ) => {
  return (
    <div   className='text-center py-4' >
 <button  style={{ background: '#10AFD0' , "max-width" : "18rem" }} className="uppercase	  text-center   md:w-auto text-sm	 text-white font-bold py-2 px-2  rounded-full	 mb-4 md:mr-2">
    {buttonTxt}
</button>
<p  className='w-64 text-center  text-xs	' >
{parahraph}
</p>


    </div>
  )
}

export default Button_Text