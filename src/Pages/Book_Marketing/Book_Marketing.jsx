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


const Book_Marketing = () => {


  const buttonData = [
    {
      buttonTxt: 'Think Like An Analyst',
      parahraph: 'Branding is more than coming up with a catchy slogan. Instead, it depends on the skill and ability of the designer. It would help if you thought like a marketing manager rather than an owner.',
    },
    {
      buttonTxt: 'Consistency Is Key',
      parahraph: 'Make sure that the efforts that go into your business  brand management are as consistent as possible. You cannot focus heavily on one timespan and ignore it in the next.',
    },
    {
      buttonTxt: 'Know Your Audience',
      parahraph: 'Make sure that everything that you are doing to target your share of the market. Do the things they like and pay attention to your audience only and not someone else',
    },
    {
        buttonTxt: 'Define Your Budget',
        parahraph: 'Budgeting is a very important process because marketing depends on how much to spend on it, the more you spend, the better results you’ll get.',
      },
     
    

  ];

  const button2 = [

    {
      buttonTxt: 'Commitment Is Vital',
      parahraph: 'While branding may not bear instant fruits, wait for a while. You need to completely believe in your brand and make the best decisions available to you.',
    },
    {
      buttonTxt: 'Stand Out',
      parahraph: 'Chance are, your business is not the first of its kind. The market is already highly competitive. Make sure that you are doing all you can to distinguish yourself.',
    },
    {
      buttonTxt: 'Having A Dedicated Plan',
      parahraph: 'It always helps to have a plan before doing anything in particular. The same goes for branding, have a plan set in motion, and make sure that you follow it perfectly.',
    },
    {
        buttonTxt: 'Start building an Online Presence Early',
        parahraph: 'We will start making your online presence like website, social media account, and reviews platforms.',
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
    <div   className='py-12'     style={{"background" :"#0E1B21"}}>
<img  className='m-auto' src="https://www.bookwritingfounders.com/img/complogo.png" alt="" />
</div>

  <div  className='py-20'  style={{"backgroundColor" : "#F8F9FA"}}>
  <Image_Text_Comp   head1={"We Appreciate Our Clients"} head2={"Who Put Their Faith In Us."} paragraph={"Good branding will amplify all your marketing efforts. It would be best if you had many different kinds of designs to print or digitally post. But it takes more than that to make a trustworthy brand. It is a good idea to hire one company to design all your stationery, covers, and logos. Doing this will ensure that your style will remain consistent across all places. Hiring one company will also save you time and money. You will not have to search for individual services. It takes much effort to find experienced professionals to do your job."} img={"https://www.bookwritingfounders.com/img/branding/branding.jpg"}  />
  </div>


  <div    className='py-8'  style={{"background" : "#f8f9fa "}} >



<Text_Heading heading="What Is Book Marketing & Why Should You Go For It?" description="Book marketing is the most crucial part after book publishing because with marketing you capture the eye of your target audiences, and we understand the importance of it quite well. Our book promotion and marketing strategies are customized to fit any writer's book marketing needs. We execute our marketing strategies in a way that makes your book stands out from others." />
</div>
  {/* <Text_Heading heading="What Are The Types Of Fiction Genres Do We Ghostwrite?" description="Our team includes professional ghostwriters specialized in a variety of different genres. Moreover, some of our most versatile book ghostwriters are the best at writing on genres with a very niche reader base. According to our data, the fictional books we have mentioned below are only the most popular ones. This means that most of our customers are looking for a ghostwriter for hire!" /> */}
<div  className='fiction-image w-10/12  m-auto' >

<Image_Text_Reusable
title="Increased Brand"
title2="Recognition"
description={"By running a successful branding strategy, you can grow your reach by showcasing your brand on a wider platform. This, in turn, helps grow your brand recognition."}
button={"CONSULT AN EXPERT"}
image={"https://www.bookwritingfounders.com/img/fiction/service-inner1.jpg"}
/>
</div>

<div   className='fiction-image2 w-10/12 m-auto	' >



<Image_Text_Reusable2
title="Loyalty "
title2="Retention"
description={"You can also take this chance to connect with your audience better, which helps increase your customer loyalty and retention."}
button={"CONSULT AN EXPERT"}
image={"https://www.bookwritingfounders.com/img/fiction/service-inner2.jpg"}
/>
</div>

<div   className='fiction-image2 w-10/12 m-auto	'  >


<Image_Text_Reusable
title="Cost-Effective Marketing"
title2="Strategy"
description={"Branding is cost-effective in terms of having the biggest platform to market your product. This makes branding a key strategy vital to a business's growth."}
button={"CONSULT AN EXPERT"}
image={"https://www.bookwritingfounders.com/img/fiction/service-inner3.jpg  "}
/>
</div>


<div   className='fiction-image2 w-10/12 m-auto	' >



<Image_Text_Reusable2
title="Ability To Stand Out"
title2="Amongst Your Competition"
description={"You can take the opportunity of branding, which can help you stand out from the rest of your competition, attracting more customers to your brand."}
button={"CONSULT AN EXPERT"}
image={"https://www.bookwritingfounders.com/img/fiction/service-inner4.jpg"}
/>
</div>




<div  className='my-16' > 
<Image_Text_Comp2 head1={'Increased Leads & Sales'}  button={'CONSULT BRANDING & PUBLICITY?'} para={'Combining all of the above-mentioned facts, branding helps increase your audience drastically, which directly impacts your sales and cashflows.'} img={'https://www.bookwritingfounders.com/img/publishing/bearded-man-reading-book-sitting-table1.jpg'}  />
</div>


<div    className='py-14'  style={{"background" : "#f8f9fa "}} >



<Text_Heading heading="WHY SHOULD YOU HIRE OUR BRANDING COMPANY?" description="We are the best in the business at what we do, don't you believe us? Contact us and find out for yourself." />
</div>
<div   className='my-16'  >

<ThreeSidedSec   buttonData={buttonData}  buttonData2={button2} imageData={imageData} />;
</div>



<div   className='my-16'  >

{/* <ThreeSidedSec   buttonData={buttonData}  buttonData2={button2} imageData={imageData} />; */}
</div>


<Contact_Sec/>
<Contact_Sec_Form/>
<Support_Slider img1={'https://writersclique.com/images/platforms/google-books.svg'} img2={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Amazon_Books_logo.svg/1024px-Amazon_Books_logo.svg.png'} img3={'https://assets-global.website-files.com/631ceae106796a334652c01e/6387c7128564600c06fcc08f_ingram-micro-services.webp'} img4={'https://1000logos.net/wp-content/uploads/2020/09/Barnes-Noble-Logo.png'}/>

<Footer />
    </>
  )
}

export default Book_Marketing