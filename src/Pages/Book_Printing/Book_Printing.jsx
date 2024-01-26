import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Banner2 from '../../Components/Banner/Banner2'
import Support_Slider from '../../Components/Slider/Slider'
import Footer from '../../Components/Banner/Footer/Footer'
import Contact_Form2 from '../../Components/Contact_Form2/Contact_Form2'
import Banner7 from '../../Components/Banner/Banner7'
import Image_Text_Comp from '../../Components/Image_Text_Comp/Image_Text_Comp'
import Text_Heading from '../../Components/Text_Heading/Text_Heading'
import Contact_Sec_Form from '../../Components/Contact_Sec/Contact_Sec'
import Contact_Sec from '../../Components/Call_Sec/Contact_Sec'
import ThreeSidedSec from '../../Components/ThreeSidedSec/ThreeSidedSec'
import Image_Text_Comp2 from '../../Components/Image_Text_Comp/Image_Text_Comp2'
import Image_Text_Reusable2 from '../../Components/Image_Text_Reusable/Image_Text_Resuable2'
import Image_Text_Reusable from '../../Components/Image_Text_Reusable/Image_Text_Reusable'
import Banner8 from '../../Components/Banner/Banner8'
import Banner9 from '../../Components/Banner/Banner9'
import Banner10 from '../../Components/Banner/Banner10'
import Image_Text_Comp3 from '../../Components/Image_Text_Comp/Image_Text_Comp3'
import Banner11 from '../../Components/Banner/Banner11'
import Service_Card from './Service_Card'
import Provide from './Provide'
import BookSizes from './BookSizes'
import Binding_Cards from './Binding_Cards'

const Book_Printing    = () => {
  

  return (
    <>
    <Navbar/>
<Banner11/>
<div  className='py-4'  style={{"backgroundColor" : "#F8F9FA"}}>
<Text_Heading heading="Bookstore Quality Printing At Book Writing Founder Prices" />
 
<div  className='flex  flex-wrap justify-evenly ' >

<Service_Card   img={'https://www.bookwritingfounders.com/img/book-printing/wide-product-range.png'} heading={"Wide Product Range"}  para={"Choose from thousands of product combinations"}   />
<Service_Card   img={'https://www.bookwritingfounders.com/img/book-printing/no-minimums.png'} heading={"No Minimums"}  para={"Order the exact quantity you need and get your books when you need them"}   />
<Service_Card   img={'https://www.bookwritingfounders.com/img/book-printing/affordable-us.png'} heading={"Affordable"}  para={"No contracts and pricing on a pre-book basis"}   />

</div>
  </div>
 
<div  className='py-4'  >
<Text_Heading heading="Bookstore Quality Printing At Book Writing Founder Prices" />

<div className='flex flex-wrap justify-center ' >
<Provide img={'https://www.bookwritingfounders.com/img/book-printing/MOCKUP_DUSTJACKET_STACK_1.jpg'} heading={"Hardcover Book"} para={'One of our most popular book formats. The durable hardcover is made to withstand wear and tear and a range of finishes are available to catch your readers eye.'} button={'Get A Quote'} />
<Provide img={'https://www.bookwritingfounders.com/img/book-printing/MOCKUP_SOFTCOVER_PORTRAIT_4.jpg'} heading={"Paperback Books"} para={'Choose our light and portable paperbacks for reading on the go and convenient distribution. Expect a professional and high-quality book with inexpensive yet durable binding.'} button={'Get A Quote'} />
<Provide img={'https://www.bookwritingfounders.com/img/book-printing/MOCKUP_HARDCOVER_SQUARE_3.jpg'} heading={"Cookbook Book"} para={'Compile your favourite recipes into a real feast for the eyes. Printed on high quality paper stock – it has never been easier to make your own cookbook!'} button={'Get A Quote'} />
<Provide img={'https://www.bookwritingfounders.com/img/book-printing/COMIC-BOOK_STAPLED_COVER_PORTRAIT_2.jpg'} heading={"Comic Books"} para={'Let your imagination run wild with Book Writing Founder’s famous comic books. Your words, drawings and colors will tell their own story.'} button={'Get A Quote'} />

</div>

<div className='flex flex-wrap justify-center my-4 ' >
<Provide img={'https://www.bookwritingfounders.com/img/book-printing/GRAPHIC_NOVEL_HARDCOVER_COVER_PORTRAIT.jpg'} heading={"Graphic Novels"} para={'Whether you want to create a stand-alone story or an entire series, our graphic novels will carry your story from page to page.'} button={'Get A Quote'} />
<Provide img={'https://www.bookwritingfounders.com/img/book-printing/ARTBOOK_HARDCOVER_COVER_SQUARE.jpg'} heading={"Art Books"} para={'Art books are windows into the mind of an artist and their work. Get ready to express yourself and create a memorable reading experience for your audience.'} button={'Get A Quote'} />
<Provide img={'https://www.bookwritingfounders.com/img/book-printing/SCHOOL_YEARBOOK_HARDCOVER_COVER_PORTRAIT.jpg'} heading={"Yearbooks"} para={'Unforgettable moments deserve unforgettable print work. Create new memories and laugh at the old ones with a yearbook you’ll be proud to look back on.'} button={'Get A Quote'} />
<Provide img={'https://www.bookwritingfounders.com/img/book-printing/LOOKBOOK_HARDCOVER_COVER_SQUARE.jpg'} heading={"Lookbooks"} para={'Lookbooks provide more than just the newest clothing lines or styles. Pair your fashion favourites with our printing technology to create a stronger connection with your shoppers.'} button={'Get A Quote'} />

</div>

</div>



<div  className='py-4'   >

<Text_Heading heading="Our Book Sizes" />
<div  className='flex  flex-wrap justify-center ' >

<BookSizes img={"https://www.bookwritingfounders.com/img/book-printing/book-size-pocket-book.png"} para1={"Pocket Book"}  para2={"4.25 x 6.87 in"}  />
<BookSizes img={"https://www.bookwritingfounders.com/img/book-printing/book-size-pocket-book.png"} para1={"Pocket Book"}  para2={"4.25 x 6.87 in"}  />
<BookSizes img={"https://www.bookwritingfounders.com/img/book-printing/book-size-pocket-book.png"} para1={"Pocket Book"}  para2={"4.25 x 6.87 in"}  />

</div>
<div  className='flex  flex-wrap justify-center ' >

<BookSizes img={"https://www.bookwritingfounders.com/img/book-printing/book-size-pocket-book.png"} para1={"Pocket Book"}  para2={"4.25 x 6.87 in"}  />
<BookSizes img={"https://www.bookwritingfounders.com/img/book-printing/book-size-pocket-book.png"} para1={"Digest"}  para2={"5.5 x 8.5 in"}  />
<BookSizes img={"https://www.bookwritingfounders.com/img/book-printing/book-size-pocket-book.png"} para1={"A5"}  para2={"5.8 x 8.3 in"}  />

</div>
<div  className='flex  flex-wrap justify-center ' >

<BookSizes img={"https://www.bookwritingfounders.com/img/book-printing/book-size-pocket-book.png"} para1={"US Trade"}  para2={"6 x 9 in"}  />
<BookSizes img={"https://www.bookwritingfounders.com/img/book-printing/book-size-pocket-book.png"} para1={"Small Square"}  para2={"7.5 x 7.5 in"}  />
<BookSizes img={"https://www.bookwritingfounders.com/img/book-printing/book-size-pocket-book.png"} para1={"Royal"}  para2={"6.14 x 9.21 in"}  />

</div>
<div  className='flex  flex-wrap justify-center ' >

<BookSizes img={"https://www.bookwritingfounders.com/img/book-printing/book-size-pocket-book.png"} para1={"Small Landscape"}  para2={"9 x 7 in"}  />
<BookSizes img={"https://www.bookwritingfounders.com/img/book-printing/book-size-pocket-book.png"} para1={"Comic Book"}  para2={"6.63 x 10.25 in"}  />
<BookSizes img={"https://www.bookwritingfounders.com/img/book-printing/book-size-pocket-book.png"} para1={"Executive"}  para2={"7 x 10 in"}  />

</div>




<div  className='flex  flex-wrap justify-center ' >

<BookSizes img={"https://www.bookwritingfounders.com/img/book-printing/book-size-pocket-book.png"} para1={"Crown Quarto"}  para2={"4.25 x 6.87 in"}  />
<BookSizes img={"https://www.bookwritingfounders.com/img/book-printing/book-size-pocket-book.png"} para1={"Square"}  para2={"8.5 x 8.5 in"}  />
<BookSizes img={"https://www.bookwritingfounders.com/img/book-printing/book-size-pocket-book.png"} para1={"US Letter"}  para2={"8.5 x 11 in"}  />

</div>


<div  className='flex  flex-wrap justify-center ' >

<BookSizes img={"https://www.bookwritingfounders.com/img/book-printing/book-size-pocket-book.png"} para1={"US Letter Landscape"}  para2={"11 x 8.5 in"}  />
<BookSizes img={"https://www.bookwritingfounders.com/img/book-printing/book-size-pocket-book.png"} para1={"A4"}  para2={"8.3 x 11.7 in"}  />
<BookSizes img={"https://www.bookwritingfounders.com/img/book-printing/book-size-pocket-book.png"} para1={"Trade Book"}  para2={"8 x 10 in"}  />

</div>




</div>

<div    className='py-4'       >
<Text_Heading heading="Our Book Bindings    " />
<div  className='flex  flex-wrap justify-center ' >


<Binding_Cards   img={"https://www.bookwritingfounders.com/img/book-printing/superior-quality-books-1.png"}  heading={"Modern Printing Equipment"}  descrition={"At Book Writing Founder, people and technology work together. You'll receive quality and service thanks to our print professionals and advanced printing software. We’ll ensure everything is as it should be and more before we send your order to you."}    />
<Binding_Cards   img={"https://www.bookwritingfounders.com/img/book-printing/superior-quality-books-2.png"}  heading={"Exceptional Bookmaking"}  descrition={"Every book we print is in expert hands. Precise, sturdy and well-manufactured - these are just some of the key features you can expect when you order your books from Book Writing Founder. Select the options, and we’ll produce your project with a hassle-free, no detail spared approach."}    />
<Binding_Cards   img={"https://www.bookwritingfounders.com/img/book-printing/superior-quality-books-3.png"}  heading={"Helping You Tell Your Story"}  descrition={"Book Writing Founder gives you the creative freedom to create almost anything you want. And without a high price. So make room on your bookshelf for outstanding print, and you’ll reap the rewards in many years to come."}    />



</div>


</div>






<Contact_Sec/>
<Contact_Sec_Form/>
<Support_Slider img1={'https://writersclique.com/images/platforms/google-books.svg'} img2={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Amazon_Books_logo.svg/1024px-Amazon_Books_logo.svg.png'} img3={'https://assets-global.website-files.com/631ceae106796a334652c01e/6387c7128564600c06fcc08f_ingram-micro-services.webp'} img4={'https://1000logos.net/wp-content/uploads/2020/09/Barnes-Noble-Logo.png'}/>

<Footer />



    

    </>
  )
}

export default Book_Printing             