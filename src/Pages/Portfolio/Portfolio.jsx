import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Banner from '../../Components/Banner/Banner'
import Support_Slider from '../../Components/Slider/Slider'
import Selling_Book_Slider from '../../Components/Selling_Book_Slider/Selling_Book'
import Image_Card from '../../Components/Image_Text/Image_Text'
import What_Offer from '../../Components/What_Offer/What_Offer'
import Book_Writing_Sec from '../../Components/Book_Writing_sec/Book_Writing_Sec'
import Card from '../../Components/Card/Card'
import Card2 from '../../Components/Card/Card2'
import Testimonal_Slider from '../../Components/Testimonal_Slider/Testimonal_Slider'
import Contact_Sec from '../../Components/Call_Sec/Contact_Sec'
import Contact_Sec_Form from '../../Components/Contact_Sec/Contact_Sec'
import Footer from '../../Components/Banner/Footer/Footer'
import { Helmet } from 'react-helmet';

const Portfolio = () => {

  <Helmet>
  <title>Readsy - Portfolio</title>
</Helmet>

  return (
    <div>

<>
  <Navbar/>
<div  style={{"background" : "white"}} > 
  <Banner/>
  <Support_Slider img1={'https://writersclique.com/images/platforms/google-books.svg'} img2={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Amazon_Books_logo.svg/1024px-Amazon_Books_logo.svg.png'} img3={'https://assets-global.website-files.com/631ceae106796a334652c01e/6387c7128564600c06fcc08f_ingram-micro-services.webp'} img4={'https://1000logos.net/wp-content/uploads/2020/09/Barnes-Noble-Logo.png'}/>
</div>
  <div  className='image_setter' >
  <Selling_Book_Slider/>
  </div>
  {/* <Image_Card/> */}
  {/* <What_Offer/> */}
  <Book_Writing_Sec/>
  <Card/>
  <Card2/>

  <Testimonal_Slider/>

<Contact_Sec_Form/>
<Support_Slider img1={'https://writersclique.com/images/platforms/google-books.svg'} img2={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Amazon_Books_logo.svg/1024px-Amazon_Books_logo.svg.png'} img3={'https://assets-global.website-files.com/631ceae106796a334652c01e/6387c7128564600c06fcc08f_ingram-micro-services.webp'} img4={'https://1000logos.net/wp-content/uploads/2020/09/Barnes-Noble-Logo.png'}/>
  <Footer/>
  </>
    </div>
  )
}

export default Portfolio