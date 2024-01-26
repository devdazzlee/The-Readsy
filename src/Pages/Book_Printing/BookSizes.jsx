import React from 'react'

const BookSizes = ({img, para1 , para2}) => {
  return (
    <div   className='m-0 md:mr-6'  >
        <div style={{ "background" : "#DDDDDD"}}>
        <img  className=' h-72' src={img} alt="" />
        </div>
        <p className='font-bold'>{para1}</p>
        <p>{para2}</p>

    </div>
  )
}

export default BookSizes