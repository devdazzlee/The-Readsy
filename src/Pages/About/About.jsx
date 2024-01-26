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

const About   = () => {
    const buttonData = [
        {
          buttonTxt: 'Planning',
          parahraph: 'We will set a meeting to understand your needs comprehensively. Only after that will we do comprehensive research on your potential customers and the overall market.',
        },
        {
          buttonTxt: 'SEO content',
          parahraph: 'Our expert SEO writers will then initiate working on creating the content for your website. We are the best SEO service providers, so naturally, we have the best writers.',
        },
        {
          buttonTxt: 'Testing',
          parahraph: 'When all the different aspects of your project are ready, we move into the testing phase. The testing phase consists of checking functionality and random bugs. We will be testing the websites to check if they are working on all the different browsers and screen sizes. Any and every problem that appears is fixed. Once the quality is assured, we send it to you for your approval.',
        },

    
      ];
    
      const button2 = [
    
        {
          buttonTxt: 'Site map and keyword research',
          parahraph: 'After knowing your audience and competition, we will research the keywords. We will find the most common search phrase used by the people you want to target. Thus, we will find the most suitable content.',
        },
        {
          buttonTxt: 'Create a mockup website',
          parahraph: 'While our writers are hard words, our design team will be working on the website s future appearance. You will receive a mockup, which is essentially a concept piece. We will send the mockup to you for review. In order to save time and maintain high efficiency, the content and mockup phases will be done independently to save time.',
        },
        {
          buttonTxt: 'Going Live',
          parahraph: 'The website has already gone through our vigorous testing and your approval. All we need to do is go live for all your potential customers worldwide to see.',
        },
    
      ]
    
      const imageData = {
        src: 'https://www.bookwritingfounders.com/img/services/books.jpg',
        alt: 'Book_Image',
      };


  return (
    <>
    <Navbar/>
<Banner10/>
<div  className='py-20'  style={{"backgroundColor" : "#F8F9FA"}}>
  <Image_Text_Comp3    button={'Get Free Consultation'} img={"https://www.bookwritingfounders.com/img/about/about_1.png"} head1={'Providing Ghostwriting Solutions '}  head2={"To Satisfy All Your Publication Needs"}  para={"Each and every great work of art was born out of inspiration, and we will give your book the boost it needs to turn into the work of art that it deserves to be. Bookwriting Founder authors will perfectly encapsulate your ideas. Our team of experienced professionals will guide you towards the path of being a bestselling novel. We invite you to work alongside the best of what the ghostwriting industry has to offer. Give your ideas the limelight they deserve and spread your voice to the masses."} />

  </div>
  <div  className='py-20'  style={{"backgroundColor" : "#F8F9FA"}}>
  <Image_Text_Comp2    button={'Get Free Consultation'} img={"https://www.bookwritingfounders.com/img/about/about_2.jpg"} head1={'We Inspire Creativity With'}  head2={"Our Ghostwriting Services"}  para={"While our extensive back and forth may sound a little extensive, we do it all in the name of customer service. We believe in 100% transparency. This allows us to keep our customers up to date with the progress of their projects. Our customer service professionals are accommodating and friendly and will help you with any queries you might have. Our designers are more than capable of catering to your every whim. We provide unlimited revisions to your content and designs, and this helps to ensure that you are satisfied with what you receive."} />

  </div>

  <div    className='py-14'  style={{"background" : "#f8f9fa "}} >



<Text_Heading heading="Our Achievements" description="We have a massive portfolio of completed projects. We have helped thousands of people realize their dreams and will continue to do so. Our platform has enabled us to make sure that we do all we can to help people fulfill all they dream of. With the relentless effort of our staff, we have satisfied our clients to the fullest. Going above and beyond in the name of customer service is what we do best. We are all about maximizing customer retention and satisfaction. The impressive team that we have built over here is our greatest accomplishment. Our team enabled us to manage a platform whose prime goal is to help people realize their dreams." />
</div>




<div  className='my-16' > 
<Image_Text_Comp2 head1={'Customer Support'}  button={'CONSULT WEB DESIGN & SEO?'} para={'Having good customer service is the key to keeping a client happy. We have held that in mind when selecting our customer support team. Our team consists of experienced professions that are quick to understand your needs. No matter your concern, our team will be quick and efficient at tackling your problem.'} img={'https://www.bookwritingfounders.com/img/author/attractive-student-uses-internet-technology-high-speed-wi-fi-connection-chat-with-friend.jpg'}  />
</div>


<div    className='py-14'  style={{"background" : "#f8f9fa "}} >



<Text_Heading heading="Why Bookwriting Founder Is The Perfect Fit For You?" description="We have been in the industry for more than a decade now which allows us to uniquely cater to all your web design needs." />
</div>





<Contact_Sec/>
<Contact_Sec_Form/>
<Support_Slider img1={'https://writersclique.com/images/platforms/google-books.svg'} img2={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Amazon_Books_logo.svg/1024px-Amazon_Books_logo.svg.png'} img3={'https://assets-global.website-files.com/631ceae106796a334652c01e/6387c7128564600c06fcc08f_ingram-micro-services.webp'} img4={'https://1000logos.net/wp-content/uploads/2020/09/Barnes-Noble-Logo.png'}/>

<Footer />



    

    </>
  )
}

export default About             