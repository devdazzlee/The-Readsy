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

const Author_Webite   = () => {
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
<Banner9/>
<div  className='py-20'  style={{"backgroundColor" : "#F8F9FA"}}>
  <Image_Text_Comp  paragraph={"Whether you are 'searching for website design services near me' or 'services for website design Seattle,' we are the answer to it. Our company is often regarded as the best local SEO company' by our fellow native customers. We actually specialize in SEO services in the USA. Our team is excep tionally knowledgeable when it comes to targeting the US audience with organic SEO. You may have heard that the US organic searches are the most completive. Despite that, we have previously helped many of our clients rank on some of the most competitive keywords. The secret to our web designs being in such high demand is our designing team. To make the best impression for your brand, we have in house artists. These professional designers do the dedicated task of making your website look unique. We are the best SEO services company for the job if you haven't already consulted a branding professional. Other companies usually charge a hefty fee for assigning a designer. Bookwriting Founder will provide a designer with no additional costs."}  head1={"Our Modern Web Designs Will Statically"} head2={"Decrease Your Website's Bounce Rate:"} img={"https://www.bookwritingfounders.com/img/webdesign-seo/webdesign-seo.jpg"}  />
  </div>
  <div    className='py-8'  style={{"background" : "#f8f9fa "}} >



<Text_Heading heading="Why Hire Us?" description="Do you want us to create top rated websites designs from scratch with all the necessary writing content? Do you want to hire an affordable SEO company? Do you need professional website development? Then there is no need to search the internet to find these services separately. Evermore, you don't even need to know how many services are necessary. Hire us to do all the work for you. Our teams will work together and provide you the best looking and performing website. No matter how specific the audience you are trying to target, we will get the work done." />
</div>
<div  className='fiction-image w-10/12  m-auto' >

<Image_Text_Reusable
title="Search Engine Optimized"
title2={"Writing"}
description={"The core pages of your websites should be perfect if you want to rank on Google. This ranking will provide you with free publicity, thereby eliminating the need for paid ads. We understand that a website should be publishing regular content to stay on top. But without a solid base of core pages, these pages will not perform as well as they should."}
button={"CONSULT WRITER"}
image={"https://www.bookwritingfounders.com/img/fiction/service-inner1.jpg"}
/>
</div>

<div   className='fiction-image2 w-10/12 m-auto	' >



<Image_Text_Reusable2
title="Web Development"
description={"The backbone of any web design and development are the developers. Our web development team has some of the most experienced developers in the business. The process of web development is crucial for the picture-perfect of your ideas. Having in-depth knowledge of programming will allow for unparalleled customization."}
button={"CONSULT WRITER"}
image={"https://www.bookwritingfounders.com/img/fiction/service-inner2.jpg"}
/>
</div>

<div   className='fiction-image2 w-10/12 m-auto	'  >


<Image_Text_Reusable
title="Breathtaking Modern"
title2="Website Design"
description={"Our website designing, SEO, and development team work side by side while planning your designer website. This corporation guarantees that you will get great looking websites without any compromises in functionality. The page speed will remain fast with good scores in FID, LCP, and CLS."}
button={"CONSULT WRITER"}
image={"https://www.bookwritingfounders.com/img/fiction/service-inner3.jpg  "}
/>
</div>


<div   className='fiction-image2 w-10/12 m-auto	' >



<Image_Text_Reusable2
title="Mobile-Friendly"
description={"Smartphones have caused a revolution worldwide. A good number of your potential clients will not be using a desktop or laptop screen to find your services. So it is more crucial than ever to optimize your website for mobile usage. Google actually prefers sites that are optimized for every form factor."}
button={"CONSULT WRITER"}
image={"https://www.bookwritingfounders.com/img/fiction/service-inner4.jpg"}
/>
</div>




<div  className='my-16' > 
<Image_Text_Comp2 head1={'Customer Support'}  button={'CONSULT WEB DESIGN & SEO?'} para={'Having good customer service is the key to keeping a client happy. We have held that in mind when selecting our customer support team. Our team consists of experienced professions that are quick to understand your needs. No matter your concern, our team will be quick and efficient at tackling your problem.'} img={'https://www.bookwritingfounders.com/img/author/attractive-student-uses-internet-technology-high-speed-wi-fi-connection-chat-with-friend.jpg'}  />
</div>


<div    className='py-14'  style={{"background" : "#f8f9fa "}} >



<Text_Heading heading="Why Bookwriting Founder Is The Perfect Fit For You?" description="We have been in the industry for more than a decade now which allows us to uniquely cater to all your web design needs." />
</div>
<div   className='my-16'  >
<Text_Heading heading="What Is The Process Of Getting A Website For My Business?" description="We are here to provide web design for small businesses, even though we have corporate clients. We will always keep your business's scale and budget in mind before quoting the price. Perhaps you are looking for a website creation company to get your business online. Our creative website design company will do everything from start to finish, all you need to do is contact us, and we will cover everything. If you are unsure how the whole process works, ask, and our customer service professional will guide you through the whole process. We will tell you the specific services you will need from us, along with an affordable price quote. We create the best responsive sites as well as static websites according to your business's needs." />

<ThreeSidedSec   buttonData={buttonData}  buttonData2={button2} imageData={imageData} />;
</div>




<Contact_Sec/>
<Contact_Sec_Form/>
<Support_Slider img1={'https://writersclique.com/images/platforms/google-books.svg'} img2={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Amazon_Books_logo.svg/1024px-Amazon_Books_logo.svg.png'} img3={'https://assets-global.website-files.com/631ceae106796a334652c01e/6387c7128564600c06fcc08f_ingram-micro-services.webp'} img4={'https://1000logos.net/wp-content/uploads/2020/09/Barnes-Noble-Logo.png'}/>

<Footer />



    

    </>
  )
}

export default Author_Webite             