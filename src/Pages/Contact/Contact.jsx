import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Banner2 from '../../Components/Banner/Banner2'
import Support_Slider from '../../Components/Slider/Slider'
import Footer from '../../Components/Banner/Footer/Footer'
import Contact_Form2 from '../../Components/Contact_Form2/Contact_Form2'

const Contact = () => {
  return (
    <>
    <Navbar/>
<Banner2/>

<Contact_Form2/>
<Support_Slider img1={'https://writersclique.com/images/platforms/google-books.svg'} img2={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Amazon_Books_logo.svg/1024px-Amazon_Books_logo.svg.png'} img3={'https://assets-global.website-files.com/631ceae106796a334652c01e/6387c7128564600c06fcc08f_ingram-micro-services.webp'} img4={'https://1000logos.net/wp-content/uploads/2020/09/Barnes-Noble-Logo.png'}/>
<Footer />
    

    </>
  )
}

export default Contact