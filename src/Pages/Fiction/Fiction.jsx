import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Banner3 from '../../Components/Banner/Banner3'
import Image_Text_Comp from '../../Components/Image_Text_Comp/Image_Text_Comp'
import Text_Heading from '../../Components/Text_Heading/Text_Heading'
import Image_Text_Reusable from '../../Components/Image_Text_Reusable/Image_Text_Reusable'
import './Fiction.css'
import Image_Text_Reusable2 from '../../Components/Image_Text_Reusable/Image_Text_Resuable2'
import Image_Text_Comp2 from '../../Components/Image_Text_Comp/Image_Text_Comp2'
import ThreeSidedSec from '../../Components/ThreeSidedSec/ThreeSidedSec'
import Contact_Sec from '../../Components/Call_Sec/Contact_Sec'
import Contact_Sec_Form from '../../Components/Contact_Sec/Contact_Sec'
import Support_Slider from '../../Components/Slider/Slider'
import Footer from '../../Components/Banner/Footer/Footer'


const Fiction = () => {


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
    <Banner3/>
  <div  className='py-20'  style={{"backgroundColor" : "#F8F9FA"}}>
  <Image_Text_Comp   head1={"Fiction Ghost Writing"} head2={"Services Are Available For You."} paragraph={"Are you here to turn your novel idea into a reality? Maybe you want to find top fiction ghostwriters for hire for writing a fiction novel. Is your idea a heartwarming romance, or maybe a thrilling mystery? Then professional fiction ghostwriters for books are here to help you. In this day and age, authors who use fiction ghostwriters are actually in great numbers. We provide all services to help fulfill your writing dreams. All we need is your idea. We at Bookwriting Founder believe that everyone has an exciting story to tell. But you do not want to go through the hard work of writing it page by page. Also, you must have an exceptional lingual ability to describe the events perfectly. Writing fiction books for publishing has been made extremely simple through our professional fiction ghostwriting services."} img={"https://www.bookwritingfounders.com/img/fiction/fiction.jpg"}  />
  </div>
  <Text_Heading heading="What Are The Types Of Fiction Genres Do We Ghostwrite?" description="Our team includes professional ghostwriters specialized in a variety of different genres. Moreover, some of our most versatile book ghostwriters are the best at writing on genres with a very niche reader base. According to our data, the fictional books we have mentioned below are only the most popular ones. This means that most of our customers are looking for a ghostwriter for hire!" />
<div  className='fiction-image w-10/12 	m-auto' >

<Image_Text_Reusable
title="Romance Fiction"
title2="Ghostwriting Services"
description={"If you are looking for books to target a mass audience, romance fiction is the way to go. Essentially these are written around two characters have or longing for a relationship. The story usually consists of the hurdles they face and their sacrifices to end up with one another. Most good fiction novel authors can write a compelling romance novels."}
button={"Consult Writer?"}
image={"https://www.bookwritingfounders.com/img/fiction/service-inner1.jpg"}
/>
</div>

<div   className='fiction-image2 w-10/12	m-auto	' >



<Image_Text_Reusable2
title="Action-Adventure Novel"
title2="Ghostwriting Services"
description={"You can see this genre on the opposite end of the romance genre. The romance genre is most popular with the female audience, while males primarily read action adventures. No wonder action-adventure fiction books are often called romance novels for males. In this case, the romance is of adventure filled with brave acts."}
button={"Consult Writer?"}
image={"https://www.bookwritingfounders.com/img/fiction/service-inner2.jpg"}
/>
</div>

<div   className='fiction-image2 w-10/12	m-auto	'  >


<Image_Text_Reusable
title="Science Fiction Novel"
title2="Ghostwriting Services"
description={"In science fiction, the writer is in a universe far ahead of us. The books are set in the future or sometimes in ancient times. The key is to imagine technologies that only exist in our minds. However, there should be a touch of realism in it. The best science fiction authors of the last century were even able to predict the future."}
button={"Consult Writer?"}
image={"https://www.bookwritingfounders.com/img/fiction/service-inner3.jpg  "}
/>
</div>




<div  className='my-16' > 
<Image_Text_Comp2 head1={'Suspense And Thriller Novel '} head2={'Ghostwriting Services'} para={'Some of the most popular fiction books feature detectives solving mysteries. These detective books fall under the suspense and thriller genre. As the name suggests, these books help the reader experience feelings of mystery and suspense. We understand that a thriller should never go stale. When tackling this genre, our ghostwriters know that the story should be fast-paced. It should have all the twists and turns. In the thriller genre, it is necessary to have a shock factor. By knowing what makes a good thriller, we provide the best-ghostwriting services.'} button={'Consult Fiction Writing'} img={'https://www.bookwritingfounders.com/img/fiction/woman-reading-book-evening-home-close-up.jpg'}  />
</div>


<div    className='py-14'  style={{"background" : "#f8f9fa "}} >



<Text_Heading heading="What Are The Few Things You Need To Take Care Of Before You Reach Out To Us?" description="We will do everything we can to provide you the best book editing services in the market. But before doing so, you need to take care of a few things on your end. While it is a no brainer, first you need to have a book written. If you do not have a book, we can write a book for you too. That is a separate service of ours. Let's assume you already have a book. This moves us on to the next step. The next step is to have a clear goal in mind. You must know what you are looking for? Editing can be done in a lot of different areas. These areas are:" />
</div>


<div    className='my-12' >


<Text_Heading heading="What Is Our Design Process For Fiction Ghostwriter Services?" description="For a fictional book, first, you need to decide the service you want. We provide fiction ghostwriters for hire, along with branding, editing, and publishing. You can get each service separately and also with any combination of the services. The most affordable is all in one package. In that, you will get all the benefits at a discounted price. After contacting our customer support, you would be prompted to fill a brief form. Then the ghostwriter will start writing your book chapter by chapter. We will ask you to approve each chapter along the way. After the novel is complete, it will be edited by our professional editing staff. You will get your finalized ghostwritten book to read after that. Once you approve the final product, only then your order would be considered complete." />

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

export default Fiction