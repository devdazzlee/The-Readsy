import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Banner3 from '../../Components/Banner/Banner3'
import Image_Text_Comp from '../../Components/Image_Text_Comp/Image_Text_Comp'
import Text_Heading from '../../Components/Text_Heading/Text_Heading'
import Image_Text_Reusable from '../../Components/Image_Text_Reusable/Image_Text_Reusable'
import '../Fiction/Fiction.css'
import Image_Text_Reusable2 from '../../Components/Image_Text_Reusable/Image_Text_Resuable2'
import Image_Text_Comp2 from '../../Components/Image_Text_Comp/Image_Text_Comp2'
import ThreeSidedSec from '../../Components/ThreeSidedSec/ThreeSidedSec'
import Contact_Sec from '../../Components/Call_Sec/Contact_Sec'
import Contact_Sec_Form from '../../Components/Contact_Sec/Contact_Sec'
import Support_Slider from '../../Components/Slider/Slider'
import Footer from '../../Components/Banner/Footer/Footer'
import Banner6 from '../../Components/Banner/Banner6'
import CardSlider from '../../Components/Card_Slider/Card_Slider'


const Publishing = () => {


  const buttonData = [
    {
      buttonTxt: 'Signing Up',
      parahraph: 'Firstly, you start by signing up on our Website. You can sign up and then email us about your project or chat with our support staff. You will start by telling us a brief idea about your project.',
    },
    {
      buttonTxt: 'Questionnaire & Brief Form',
      parahraph: 'After that, you will fill out a detailed questionnaire about your project to tell us exactly how you want the book to be written. You can also share some manuscripts that you’ve written, so we have a better idea of what to write.',
    },
    {
      buttonTxt: 'Outline',
      parahraph: 'After reading your questionnaire, we will process an outline of your project, where we will highlight the details of each and every chapter. After your approval and revisions, we will consider the outline to be final and then proceed onward.',
    },
   
    

  ];

  const button2 = [

    {
      buttonTxt: 'Call Scheduling',
      parahraph: 'After the initial outline, we will schedule a call with you for chapter one. This is the most important part of the project, as this will lay the foundation of your entire project. We will write the first chapter based on your call recordings, and the same goes for each chapter to come.',
    },
    {
      buttonTxt: 'Approval',
      parahraph: 'We will write chapters based on your recordings and have them approved by you after each chapter. You can tell us the direction you want the story to take, and we will adjust it all accordingly.',
    },
    {
      buttonTxt: 'Delivery',
      parahraph: 'After everything has been done, we will proceed toward the final delivery of the project. This is where you will get everything included in your project, and you need to approve it one last time.',
    },
  ]

  const imageData = {
    src: 'https://www.bookwritingfounders.com/img/services/books.jpg',
    alt: 'Book_Image',
  };

  return (
    <>
        <Navbar/>
    <Banner6/>
    <Support_Slider img1={'https://writersclique.com/images/platforms/google-books.svg'} img2={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Amazon_Books_logo.svg/1024px-Amazon_Books_logo.svg.png'} img3={'https://assets-global.website-files.com/631ceae106796a334652c01e/6387c7128564600c06fcc08f_ingram-micro-services.webp'} img4={'https://1000logos.net/wp-content/uploads/2020/09/Barnes-Noble-Logo.png'}/>

  <div  className='py-20'  style={{"backgroundColor" : "#F8F9FA"}}>
  <Image_Text_Comp   head1={"Why Should You Hire A"} head2={"Book Publishing Company?"} paragraph={"The world is full of people that have self-published books. Why should yours be any different? We have the perfect answer for you. Publishing your own books takes up a lot more work and time than it shows. First, you need to have your book ready and edited by editing professionals. This alone is an extensive and lengthy process. After that, you need to design your covers, contact a developer, and wait until it decides to be published—too much information in a single line. Don't worry; we'll walk you through the process. This can often take an extended period of time before your book can be published. A self-published book may indeed cost less than the latter option. It is always advisable to spend the extra few bucks and hire the services of a professional. Our self-publishing services guarantee maximum exposure to your book."} img={"https://www.bookwritingfounders.com/img/publishing/publishing.jpg"}  />
  </div>
  {/* <Text_Heading heading="What Are The Types Of Fiction Genres Do We Ghostwrite?" description="Our team includes professional ghostwriters specialized in a variety of different genres. Moreover, some of our most versatile book ghostwriters are the best at writing on genres with a very niche reader base. According to our data, the fictional books we have mentioned below are only the most popular ones. This means that most of our customers are looking for a ghostwriter for hire!" /> */}
<div  className='fiction-image w-10/12  m-auto' >

<Image_Text_Reusable
title="Editorial Support"
// title2="Ghostwriting Services"
description={"We provides editorial support to all our clients, which guarantees that the end product is free from all errors and mistakes. This ensures that your book is the best it can be."}
button={"CONSULT AN EXPERT"}
image={"https://www.bookwritingfounders.com/img/fiction/service-inner1.jpg"}
/>
</div>

<div   className='fiction-image2 w-10/12 m-auto	' >



<Image_Text_Reusable2
title="Marketing Support"
// title2="Ghostwriting Services"
description={"Our marketing experts will make sure they devise a marketing strategy for book. This guarantees that you get the maximum amount of exposure and grow your sales."}
button={"CONSULT AN EXPERT"}
image={"https://www.bookwritingfounders.com/img/fiction/service-inner2.jpg"}
/>
</div>

<div   className='fiction-image2 w-10/12 m-auto	'  >


<Image_Text_Reusable
title="More Acclaim"
// title2="Ghostwriting Services"
description={"Having a renowned publishing company behind your back provides a certain level of credibility to your book. It also helps to market your book in a way self-publishing can't."}
button={"CONSULT AN EXPERT"}
image={"https://www.bookwritingfounders.com/img/fiction/service-inner3.jpg  "}
/>
</div>


<div   className='fiction-image2 w-10/12 m-auto	' >



<Image_Text_Reusable2
title="Fewer Sales"
// title2="Ghostwriting Services"
description={"If you go the self-publishing route, you are losing out on a big chunk of market share as you will not be able to handle the marketing of the book alongside everything else."}
button={"CONSULT AN EXPERT"}
image={"https://www.bookwritingfounders.com/img/fiction/service-inner4.jpg"}
/>
</div>




<div  className='my-16' > 
<Image_Text_Comp2 head1={'Years Of Experience'}  button={'CONSULT AN EXPERT'} para={'We have been in the industry for over a decade now. This vast amount of experience allows us to tackle problems in a way that others simply cannot.'} img={'https://www.bookwritingfounders.com/img/publishing/bearded-man-reading-book-sitting-table1.jpg'}  />
</div>

<div  style={{"background" : "#10AFD0"}}   className=' py-4' >
<h1 className='text-white text-2xl sm:text-4xl font-bold text-center sm:text-center my-8'>Our Recent Portfolio</h1>
          <p className='text-white text-center my-4'>
          Our work speaks for itself. We believe in offering the best value and most personalised service to you.
          </p>
<CardSlider />
</div>

<div    className='py-14'  style={{"background" : "#f8f9fa "}} >
<Text_Heading heading="HOW WILL YOU GET STARTED?" description="Before starting your project, you will contact one of our publication experts. The expert will provide professional guidance to publish your book. We make sure that you receive the best publishing assistance and guidance there is. We will design a budget for you for the services that you need. The services we offer regarding publishing are cover design, printing, and editing of the book. If you agree to the budget, a contract will be signed, and your project will start." />
</div>

<Contact_Sec/>
<Contact_Sec_Form/>
<Support_Slider img1={'https://writersclique.com/images/platforms/google-books.svg'} img2={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Amazon_Books_logo.svg/1024px-Amazon_Books_logo.svg.png'} img3={'https://assets-global.website-files.com/631ceae106796a334652c01e/6387c7128564600c06fcc08f_ingram-micro-services.webp'} img4={'https://1000logos.net/wp-content/uploads/2020/09/Barnes-Noble-Logo.png'}/>

<Footer />
    </>
  )
}

export default Publishing