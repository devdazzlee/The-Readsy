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
import { Link } from 'react-router-dom'

const Book_editing = () => {

  const buttonData = [
    {
      buttonTxt: 'Make sure you have a clear idea in mind.',
      parahraph: 'Before contacting us, you need to ensure that you have a clear idea that what do you need from our editors? Why do you need to edit your book? What is it that you want the editing to accomplish or tackle?',
    },
    {
      buttonTxt: 'Speak your mind',
      parahraph: 'Never be shy from speaking out if something is not going in the direction that you want. Just let us know, and we will be sure to structure it in a way that suits you best. Customer satisfaction is our prime goal.',
    },
    {
      buttonTxt: 'Making sure your story flows naturally.',
      parahraph: 'We will help you to make sure that the story flows naturally. What we are asking you is that you need to ensure that you have a clear vision in your head. All it takes to make a great story is an idea and a whole lot of editing.',
    },
   
    

  ];

  const button2 = [

    {
      buttonTxt: 'Conduct Extensive Research',
      parahraph: 'We encourage all our clients to conduct research extensively to make sure that you are familiar with the proper terminologies that are going to be used. It helps if you are familiar with how we operate to ensure the smoothness of your project.',
    },
    {
      buttonTxt: 'Helping you to decide how to edit the storyline',
      parahraph: 'You can tell us about the books storyline and how you want the story to turn out. This provides us with a clear objective so that we focus all our efforts to fulfill a singular goal',
    },
    {
      buttonTxt: 'Brainstorming different ideas on how you want to narrate the story',
      parahraph: 'We will help you brainstorm different ideas as to how you want the story to play out. Owing to our experienced team of writers, we will exhaust every possible opportunity to make sure that your story stays impactful and engaging.',
    },
  ]

  const imageData = {
    src: 'https://www.bookwritingfounders.com/img/services/books.jpg',
    alt: 'Book_Image',
  };



  return (
    <>
     <Navbar/>
     <Banner4/>
<div   className='py-12'     style={{"background" :"#0E1B21"}}>
<img  className='m-auto' src="https://www.bookwritingfounders.com/img/complogo.png" alt="" />
</div>
<Image_Text_Comp   head1={"We Provide The Services Of Professional"} head2={"Book Editors At Budget-Friendly Prices."} paragraph={"The services of book editors are required to ensure that all the errors in your writing are resolved. Hiring a book editor ensures that your book flows consistently. Fluidity is essential when writing a book. With professional book editors' help, you can pretty much guarantee that your work is as good as it can be. Every great writer needs a book editor. This provides them with an outsider's point of view on the quality of the book. It is true you can edit your book yourself. But hiring the services of a professional is the best way to go. We provide professional editing services at low prices. We also provide unmatched round the clock customer service. This ascertains that our customers are as satisfied with us as they can be."} img={"https://www.bookwritingfounders.com/img/editing/editing.jpg"}  />
<Text_Heading heading="Decide What You Need!" description="Book editing companies like ours exist to make your book better. We provide our services to make sure that your book has no flaws. This ensures that your book is as perfect as it can be. Many bestselling authors hire the services of professional book editors. This is because it provides them with an outsider's point of view about the book." />

<div  className='fiction-image w-10/12 	m-auto' >

<Image_Text_Reusable
title="Developmental Editing"
// title2="Ghostwriting Services"
description={"This type of editing involves an editor that focuses more on the big picture issues. This means that the editor will refine your ideas to shape and structure your narrative in an appealing way to the reader."}
button={"Consult Writer?"}
image={"https://www.bookwritingfounders.com/img/fiction/service-inner1.jpg"}
/>
</div>

<div   className='fiction-image2 w-10/12	m-auto	' >



<Image_Text_Reusable2
title="Editorial Assessment"
// title2="Ghostwriting Services"
description={"This is more or less dependent on the quality of your manuscript. This is done to make sure that your story is as perfect as it can be. An editor will make sure that the story flows naturally and highlights the proper things that need to be taken care of."}
button={"Consult Writer?"}
image={"https://www.bookwritingfounders.com/img/fiction/service-inner2.jpg"}
/>
</div>

<div   className='fiction-image2 w-10/12	m-auto	'  >


<Image_Text_Reusable
title="Structural Editing"
// title2="Ghostwriting Services"
description={"This type of editing is exactly how it sounds like; structurally editing your book includes improving the story's structure. A person may opt for this service to make sure that the story's flow is as good as it can be."}
button={"Consult Writer?"}
image={"https://www.bookwritingfounders.com/img/fiction/service-inner3.jpg  "}
/>
</div>
<div  className='fiction-image w-10/12 	m-auto' >

<Image_Text_Reusable
title="Copy Editing"
// title2="Ghostwriting Services"
description={"This type of editing is also called Mechanical Editing and sometimes referred to as Line Editing. The editor's singular job is to make sure the story has a more professional approach and fill any gaps in the original plot."}
button={"Consult Writer?"}
image={"https://www.bookwritingfounders.com/img/fiction/service-inner4.jpg"}
/>
</div>



<div  className='my-16' > 
<Image_Text_Comp2 head1={'Proofreading'}  para={'Proofreaders are the inspectors that make sure that nothing goes unchecked at the hands of editors and writers. They look at the entire book and make sure that everything is just the way you want it to be.'} img={'https://www.bookwritingfounders.com/img/fiction/woman-reading-book-evening-home-close-up.jpg'} button={'Proofreading'}  />
</div>


<div    className='py-14'  style={{"background" : "#f8f9fa "}} >



<Text_Heading heading="Why Should You Hire Our Fiction Ghostwriting Company?" description="We are too far ahead of other ghostwriting agencies. We say this concerning both reasonable prices and unparalleled quality!" />
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

export default Book_editing