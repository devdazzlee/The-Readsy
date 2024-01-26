import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Banner4 from '../../Components/Banner/Banner4'
import Support_Slider from '../../Components/Slider/Slider'
import Image_Text_Comp from '../../Components/Image_Text_Comp/Image_Text_Comp'
import Image_Text_Reusable from '../../Components/Image_Text_Reusable/Image_Text_Reusable'
import Image_Text_Reusable2 from '../../Components/Image_Text_Reusable/Image_Text_Resuable2'
import Image_Text_Comp2 from '../../Components/Image_Text_Comp/Image_Text_Comp2'
import Text_Heading from '../../Components/Text_Heading/Text_Heading'
import ThreeSidedSec from '../../Components/ThreeSidedSec/ThreeSidedSec'
import Contact_Sec from '../../Components/Call_Sec/Contact_Sec'
import Contact_Sec_Form from '../../Components/Contact_Sec/Contact_Sec'
import Footer from '../../Components/Banner/Footer/Footer'
import Banner5 from '../../Components/Banner/Banner5'
// import ReactCardSlider from 'react-card-slider-component';

const Audio_Book = () => {

  const buttonData = [
    {
      buttonTxt: 'Confirm',
      parahraph: 'Confirm if you have the audio rights to the book by double checking the book contracts (if you have). If you do, you’re considered as a Rights Holder.',
    },
    {
      buttonTxt: 'Apply Online',
      parahraph: 'Fill out the form on our website and one of our team members will connect with you to get all the information for producing your audiobook.',
    },
    {
      buttonTxt: 'Narrators',
      parahraph: 'Once you’ve shared your views, we will hire audiobook narrators from our pool for you to review their samples of reading different parts of your book. The one you connect with the most will then be hired to narrate your work.',
    },
   
    

  ];

  const button2 = [

    {
      buttonTxt: 'Approval',
      parahraph: 'Recordings of every chapter will be shared with you so that you can review and approve them to get the final product.',
    },
    {
      buttonTxt: 'Distribution',
      parahraph: 'Once finalized and approved, your audiobook will then be distributed on all platform for maximum results.',
    },
    {
      buttonTxt: 'Promotion',
      parahraph: 'Our team of exceptional marketers will take the lead in promoting your book on all social platforms so that everyone can hear about your book.',
    },
    {
        buttonTxt: 'Sit back and Earn',
        parahraph: 'Once we start we make sure that you get your earnings starting from the first month. So let us help you in making your audiobook a best seller.',
      },
  ]

  const imageData = {
    src: 'https://www.bookwritingfounders.com/img/services/books.jpg',
    alt: 'Book_Image',
  };



  return (
    <>
     <Navbar/>
     <Banner5/>
<div   className='py-12'     style={{"background" :"#0E1B21"}}>
<img  className='m-auto' src="https://www.bookwritingfounders.com/img/complogo.png" alt="" />
</div>

<div className='my-24' >
<Image_Text_Comp   head1={"We Are The Best Professional "} head2={"Audiobook Services Agency Online."} paragraph={"You've come to the right place if you're having trouble with your digital audiobook. At Book Writing Founder, we don't only write books; we also edit and narrate them, so you know your audiobook will be of the greatest quality. Being one of the top audiobook services agency we can also assist you with distributions on iTunes, Audible, Kindle etc. We have produced more than two hundred audiobooks so far, so when we say we’re the best we mean THE BEST."} img={"https://www.bookwritingfounders.com/img/audio-books/audio-books.jpg"}  />

</div>

<Text_Heading heading="Why Should You Hire An Audiobook Services Provider?" description="You may be wondering if hiring audiobook experts is even worth it. Well, let us tell you why you should hire us:" />

<div  className='fiction-image w-10/12 	m-auto' >

<Image_Text_Reusable
title="Do You Need Audiobook"
title2="Narrators For Hire?"
description={"If you’ve written a book you most certainly need a narrator. At BWS we have the industry’s best narrators on board with us to fulfill all your requirements. Whether you need someone with a dark gloomy voice or a young cheerful one, our voice artists are capable of producing these sounds and tempo based on the genre of your book. So click below and book our narrator for yourself."}
button={"Consult Writer?"}
image={"https://www.bookwritingfounders.com/img/fiction/service-inner1.jpg"}
/>
</div>

<div   className='fiction-image2 w-10/12	m-auto	' >



<Image_Text_Reusable2
title="We Have The Best"
title2="Audiobook Narrators"
description={"Being a an audiobook company that has operated for over a decade, we take pride in having the industries best narrators on board with us that not only make your story sound compelling but make it addictive for listeners. This is why we take pride in calling ourselves No 1 in the entire USA."}
button={"Consult Writer?"}
image={"https://www.bookwritingfounders.com/img/fiction/service-inner2.jpg"}
/>
</div>

<div   className='fiction-image2 w-10/12	m-auto	'  >


<Image_Text_Reusable
title="Get Your Audiobook"
title2="Subscription."
description={"Amongst other benefits, we offer unlimited audiobook subscription so that you can make the most out of it from our platform. The audiobook price are reasonable for one-time purchase if you’re selective and if you want to explore the vast sea of audiobooks, getting our unlimited audiobook subscription is the best way to go. Our Human-Read Audiobook services will make you feel inclusive of the story."}
button={"Consult Writer?"}
image={"https://www.bookwritingfounders.com/img/fiction/service-inner3.jpg  "}
/>
</div>
<div  className='fiction-image w-10/12 	m-auto' >

<Image_Text_Reusable2
title="Worried About The Cost"
title2="For An Audiobook?"
description={"Don’t be, here we make sure that the budget is reasonable enough to not constraint the pockets of the author and at the same time they can avail the max types of services we offer. We also provide marketing services with a cut which covers the extra cost the author might have to bear otherwise. We’re flexible, reliable, and trustworthy because we want you to succeed. In your success lies our success."}
button={"Consult Writer?"}
image={"https://www.bookwritingfounders.com/img/fiction/service-inner4.jpg"}
/>


</div>



<div  className='my-16' > 
<Image_Text_Comp2 head1={'Why Should You Hire Our Audiobook Services?'}  para={'You can make an Audiobook to ensure audience attention is grasped at all times. Every second of the audiobook recording should be captivating. Top audiobook services come with a price.'} img={'https://www.bookwritingfounders.com/img/audio-books/fountain-pen-antique-handwritten-letter.jpg'} button={'Proofreading'}  />
</div>
{/* <ReactCardSlider slides={slides}/> */}

<div    className='py-14'  style={{"background" : "#f8f9fa "}} >



<Text_Heading heading="Looking For Audiobook Service Near Me For Hire?" description="Getting an audiobook agency for your book maybe troublesome or perhaps you can be skeptical about it too. Give us a chance to show you what we bring on the table to help you achieve your goals and dreams." />
</div>


<div    className='my-12' >


<Text_Heading heading="What Is Our Whole Audiobook Process?" description="Every audiobook company has their way of going on about the work. Here at Book Writing Founder, we have a very seamless process." />

</div>


<div   className='my-16'  >

<ThreeSidedSec   buttonData={buttonData}  buttonData2={button2} imageData={imageData} />;
</div>


<Contact_Sec/>
<Contact_Sec_Form/>
<Support_Slider img1={'https://writersclique.com/images/platforms/google-books.svg'} img2={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Amazon_Books_logo.svg/1024px-Amazon_Books_logo.svg.png'} img3={'https://assets-global.website-files.com/631ceae106796a334652c01e/6387c7128564600c06fcc08f_ingram-micro-services.webp'} img4={'https://1000logos.net/wp-content/uploads/2020/09/Barnes-Noble-Logo.png'}/>

<Footer />

    </>
  )
}

export default Audio_Book