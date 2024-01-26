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

const Cover_Design = () => {
    const buttonData = [
        {
          buttonTxt: 'Planning',
          parahraph: 'We will set up a call with you where you will tell us all about the tiny details of the project so that we make sure that we bring to life exactly what you’ve envisioned.',
        },
        {
          buttonTxt: 'Research',
          parahraph: 'We conclude extensive research and provide you with pre-existing designs that showcase our creativity and allow you a chance to choose something you like and modify it any way you want to.',
        },
        {
          buttonTxt: 'Mockups',
          parahraph: 'We will provide mockups to you for the designs that you want us to create. We will make sure that we create what you want us to, and it’s as close to your mental image as possible.',
        },

    
      ];
    
      const button2 = [
    
        {
          buttonTxt: 'Approval',
          parahraph: 'We will wait to make sure that you like our designs and if there’s anything you might want us to change. If you want some revisions, we’ll gladly help you out.',
        },
        {
          buttonTxt: 'Revisions',
          parahraph: 'We will revise the final product the way you want us to. This helps ensure that all your needs are being met and that we’re doing exactly what you want us to.',
        },
        {
          buttonTxt: 'Delivery',
          parahraph: 'After everything has been done and you like the end result, we will deliver your project to you. We provide deliveries in a variety of formats, depending on the client’s preference and convenience.',
        },
    
      ]
    
      const imageData = {
        src: 'https://www.bookwritingfounders.com/img/services/books.jpg',
        alt: 'Book_Image',
      };


  return (
    <>
    <Navbar/>
<Banner7/>
<div  className='py-20'  style={{"backgroundColor" : "#F8F9FA"}}>
  <Image_Text_Comp  paragraph={"We take designing a book cover to the next stage with our level of professional expertise. Making a book cover is not as easy as our book cover designers make it seem. In fact, it takes years of experience to get to the point where they are right now. Our team of designers is more than capable of assisting you with everything that you may need. With customer satisfaction as our #1 priority, we believe nothing can stop us from becoming the best business. A book cover design services company essentially deals with the appearance of your book. This refers to everything that needs to be formatted and designed for the book. We enable you to design your book cover along with the help of our book cover makers. This ensures that you have perfect creative control over the design process for the book. A graphic design book cover compels your readers to judge your book by its cover!"}  head1={"Our Book Cover Designers Are Competent And Have Mastery Over A Range Of Different Software."} head2={""} img={"https://www.bookwritingfounders.com/img/cover-design/cover-design.jpg"}  />
  </div>
  <div    className='py-8'  style={{"background" : "#f8f9fa "}} >



<Text_Heading heading="What Are The Different Types Of Book Cover Designs We Do?" description="When it comes to creating a piece of art, there are no limits and no restrictions. We create your designs from scratch, the way you want us to while also ensuring that it speaks for the entire book. We acknowledge that we can’t categorize every category, but in order to make it easier for our clients, we have highlighted a few of them." />
</div>
<div  className='fiction-image w-10/12  m-auto' >

<Image_Text_Reusable
title="Bold Typography"
description={"These covers are loud and grab the attention of the reader almost instantly. These covers have risen in popularity in recent times, with many bestselling books having these as their front covers."}
button={"CONSULT Designer"}
image={"https://www.bookwritingfounders.com/img/fiction/service-inner1.jpg"}
/>
</div>

<div   className='fiction-image2 w-10/12 m-auto	' >



<Image_Text_Reusable2
title="Minimalistic"
description={"These covers are the exact opposite of the Bold Typography ones. They are not over-the-top or anything. They don’t shout out to you, instead let their elements do the talking. These types of covers leave a vast margin for interpretation."}
button={"CONSULT Designer"}
image={"https://www.bookwritingfounders.com/img/fiction/service-inner2.jpg"}
/>
</div>

<div   className='fiction-image2 w-10/12 m-auto	'  >


<Image_Text_Reusable
title="Collage"
// title2="Strategy"
description={"This is when two or more photos are combined to make up a book cover. These photos may not be connected in any visual way but combined, and the two images speak out a message that demands attention."}
button={"CONSULT Designer"}
image={"https://www.bookwritingfounders.com/img/fiction/service-inner3.jpg  "}
/>
</div>


<div   className='fiction-image2 w-10/12 m-auto	' >



<Image_Text_Reusable2
title="Authentic Photography"
description={"These types of covers are where the author attaches an image that they themselves have shot. Out of every category, these covers are the most personal ones as they show something that can never be achieved with photoshop."}
button={"CONSULT Designer"}
image={"https://www.bookwritingfounders.com/img/fiction/service-inner4.jpg"}
/>
</div>




<div  className='my-16' > 
<Image_Text_Comp2 head1={'Before We Deliver!'}  button={'CONSULT COVER DESIGN EXPERT'} para={'This is the final process of the services that our professional business writer would provide you. In this process writers will wrap up your project by adding their final essence before you take the final product to the publishing phase.'} img={'https://www.bookwritingfounders.com/img/cover-design/education-concept-student-studying-brainstorming-campus-concept-close-up-students-discussing-their-subject-books-textbooks-selective-focus.jpg'}  />
</div>


<div    className='py-14'  style={{"background" : "#f8f9fa "}} >



<Text_Heading heading="WHY SHOULD YOU HAVE OUR COVERS DESIGNED BY US?" description="We are the best in the business at what we do. Our experience speaks volumes, contact us now and find out for yourself!" />
</div>
<div   className='my-16'  >
<Text_Heading heading="What Can We Do For You?" description="Our company provides a wide range of cover design and typesetting options. This ascertains that we can cater to our customers for any service they might want. It makes Bookwriting Founder the one website that you need to satisfy all your book writing, editing, and publishing needs. We provide cheap book cover designs for our customers and guarantee the highest quality. We believe in maintaining a relationship with our customers. This ideology helps us go above and beyond in the name of customer satisfaction. We design book covers that are both engaging and impactful for the end-reader. Our book cover creators ensure the highest level of complexity and sophistication in their designs. These custom design book covers make sure to represent your book the way it is intended to. We design a book cover custom-tailored for you. Once we complete a project, we are never going to use that design again." />

<ThreeSidedSec   buttonData={buttonData}  buttonData2={button2} imageData={imageData} />;
</div>




<Contact_Sec/>
<Contact_Sec_Form/>
<Support_Slider img1={'https://writersclique.com/images/platforms/google-books.svg'} img2={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Amazon_Books_logo.svg/1024px-Amazon_Books_logo.svg.png'} img3={'https://assets-global.website-files.com/631ceae106796a334652c01e/6387c7128564600c06fcc08f_ingram-micro-services.webp'} img4={'https://1000logos.net/wp-content/uploads/2020/09/Barnes-Noble-Logo.png'}/>

<Footer />



    

    </>
  )
}

export default Cover_Design