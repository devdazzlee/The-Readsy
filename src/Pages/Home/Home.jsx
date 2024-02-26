import React, { useState , useEffect } from "react";
import './Home.css'
import axios from "axios";
import Navbar from "../../Components/Navbar/Navbar";
import Banner from "../../Components/Banner/Banner";
import Support_Slider from "../../Components/Slider/Slider";
import Selling_Book_Slider from "../../Components/Selling_Book_Slider/Selling_Book";
import Image_Card from "../../Components/Image_Text/Image_Text";
import What_Offer from "../../Components/What_Offer/What_Offer";
import Book_Writing_Sec from "../../Components/Book_Writing_sec/Book_Writing_Sec";
import Card from "../../Components/Card/Card";
import Card2 from "../../Components/Card/Card2";
import Testimonal_Slider from "../../Components/Testimonal_Slider/Testimonal_Slider";
import Contact_Sec from "../../Components/Call_Sec/Contact_Sec";
import Contact_Sec_Form from "../../Components/Contact_Sec/Contact_Sec";
import Footer from "../../Components/Banner/Footer/Footer";
import { Helmet } from 'react-helmet';

const Home = () => {
  <Helmet>
  <title>Readsy - Book Publishing Servicess</title>
  <meta name="description" content="Welcome to Readsy, your premier destination for professional book publishing services. Explore our range of offerings including book marketing, writing assistance, audio book production, customized cover design, video book trailers, author websites, and more. Whether you're delving into fiction, children's books, biographies, or other genres, we're here to support your publishing journey." />
  <meta name="keywords" content="book marketing, book writing, audio book, book publishing, fiction, children books, biography, customized cover design, video book trailers, author website, publishing services, writing assistance, book promotion" />
  <meta property="og:title" content="Readsy - Book Publishing Services" />
  <meta property="og:description" content="Welcome to Readsy, your premier destination for professional book publishing services. Explore our range of offerings including book marketing, writing assistance, audio book production, customized cover design, video book trailers, author websites, and more." />
  <meta property="og:image" content="https://thereadsy.com/static/media/Asset%2016%20(1).6e752b7d2661927bcf02.png" />
  <meta property="og:url" content="https://thereadsy.com" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="https://thereadsy.com/static/media/Asset%2016%20(1).6e752b7d2661927bcf02.png" />
  <meta name="twitter:title" content="Readsy - Book Publishing Services" />
  <meta name="twitter:description" content="Welcome to Readsy, your premier destination for professional book publishing services. Explore our range of offerings including book marketing, writing assistance, audio book production, customized cover design, video book trailers, author websites, and more." />
  <meta name="twitter:image" content="https://thereadsy.com/static/media/Asset%2016%20(1).6e752b7d2661927bcf02.png" />
</Helmet>
const [hidden,setHidden] = useState(false)
const [hidden2,setHidden2] = useState(false)
const [showPopup, setShowPopup] = useState(false);
const [showOnScroll, setShowOnScroll] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    // Adjust the scroll threshold as needed
    const scrollThreshold = 200; // Adjust this value as needed

    if (scrollPosition > scrollThreshold) {
      setShowOnScroll(true);
    } else {
      setShowOnScroll(false);
    }
  };

  window.addEventListener('scroll', handleScroll);
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);


  useEffect(() => {
    if (showPopup) {
      const timeout = setTimeout(() => {
        setShowPopup(false);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [showPopup]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    textarea: '',
    number : ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!formData.name || !formData.email ||!formData.number ||  !formData.textarea) {
      alert('Please fill out all fields before submitting.');
      return;
    }
    // Process the form submission logic here
     console.log('Form submitted:', formData);

    try {
      // Make API call using Axios
      const response = await axios.post('https://agreeable-apron-bass.cyclic.app/api/messages', formData);
      console.log('API response:', response.data);
      // Handle success (optional)
      alert('Your Message has been successfully sent!');
      setHidden2(false)

      setFormData({
        name: '',
        email: '',
        textarea: '',
        number: '',
      });  

    } catch (error) {
      console.error('Error sending message:', error);
      alert('There was an error sending your message. Please try again later.');
    }
  };
    const handleHover = () => {
      setHidden(true);
    };

    const handleHoverOut = () => {
      setHidden(false);
    };

    const handleHover2 = () => {
      setHidden2(true);
    };

    const handleHoverOut2 = () => {
      setHidden2(false);
    };

  return (
    <div>
      <>
        <Navbar />
        <div style={{ background: "white" }}>
          <Banner />
          <Support_Slider
            img1={"https://writersclique.com/images/platforms/google-books.svg"}
            img2={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Amazon_Books_logo.svg/1024px-Amazon_Books_logo.svg.png"
            }
            img3={
              "https://assets-global.website-files.com/631ceae106796a334652c01e/6387c7128564600c06fcc08f_ingram-micro-services.webp"
            }
            img4={
              "https://1000logos.net/wp-content/uploads/2020/09/Barnes-Noble-Logo.png"
            }
          />




<div
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
        onClick={() => setHidden(!hidden)}
        className={`text-14xl p-4 text-white flex items-center ${!showOnScroll && 'hidden'}`}
        style={{
          position: "fixed",
          right: "0px",
          bottom: "300px",
          zIndex: "1",
          backgroundColor: "#10AFD0",
          borderRadius: "10px 0px 0px 10px"
        }}
      >
        <i className="fa-solid fa-phone mr-2"></i>
        {hidden ? (
          <>
            <hr style={{ width: "1px", height: "20px", margin: "0 10px", border: "none", backgroundColor: "black" }} />
            <a className="font-bold" href="tel:+17372227373">+1 737-222-7373</a>
          </>
        ) : ''}
      </div>
      <div
        onMouseEnter={handleHover2}
        onMouseLeave={handleHoverOut2}
        className={`flex ${!showOnScroll && 'hidden'}`}
        style={{
          position: "fixed",
          right: "0px",
          bottom: "90px",
  
          zIndex: "1",
          borderRadius: "10px 0px 0px 10px",  
        }}
      >
        <div style={{ 
          borderRadius: "10px 0px 0px 10px",
          maxHeight: "200px", // You can adjust the maximum height here
          overflowX :"hidden", 
          backgroundColor: "#10AFD0",
      }} className="text-white py-4 h-min" onClick={() => setHidden2(!hidden2)}>
          <p className="get-a-quote font-black">Get A Quote</p>
        </div>
        <div>
          {hidden2 ? (
            <form style={{ "background": "#F0F0F0", "border": "1px solid black" }} className="px-4 slide-in-right" onSubmit={handleSubmit}>
            <div className='flex flex-col justify-center'>
              <h2 style={{ color: 'black' }} className="mb-2 text-2xl font-bold m-auto text-center">Get Our Experts</h2>
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                type="text"
                id="name"
                autoComplete="given-name"
                placeholder="Full Name"
                className= "md:w-96 mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                type="email"
                id="email"
                autoComplete="email"
                placeholder="Email Address"
                className="md:w-96  mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                type="Phone Number"
                id="Phone Number"
                autoComplete="Phone Number"
                placeholder="Phone Number"
                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                name="number"
                value={formData.number}
                onChange={handleInputChange}
              />
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <textarea
                id="textarea"
                name="textarea"
                rows="3"
                placeholder="Write your message..."
                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 sm:mb-0"
                value={formData.textarea}
                onChange={handleInputChange}
              />
            </div>
            <button
              type="submit"
              style={{ background: 'black' }}
              className="mb-6 inline-block w-full rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            >
              Contact With Us
            </button>
          </form>
          ) : ""}
        </div>
      </div>








        </div>
        <div className="image_setter">
          <Selling_Book_Slider />
        </div>
        <Image_Card />
        <What_Offer />
        <Book_Writing_Sec />
        <Card />
        <Card2 />
        {/* <Testimonal_Slider /> */}
        <Contact_Sec />
        <Contact_Sec_Form />
        <Support_Slider
          img1={"https://writersclique.com/images/platforms/google-books.svg"}
          img2={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Amazon_Books_logo.svg/1024px-Amazon_Books_logo.svg.png"
          }
          img3={
            "https://assets-global.website-files.com/631ceae106796a334652c01e/6387c7128564600c06fcc08f_ingram-micro-services.webp"
          }
          img4={
            "https://1000logos.net/wp-content/uploads/2020/09/Barnes-Noble-Logo.png"
          }
        />
        <Footer />
      </>
    </div>
  );
};

export default Home;
