import React from 'react';
import logo from '../../../Images/Asset 15.png'
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="text-black  md:px-6 px-6  sm:py-8 md:py-8  footer-image">
      <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          <div className="mt-4 sm:col-span-1">
            <div to={'/'}>
              <img    width={"150px"} src={logo} alt="WorldTour Logo" />
            </div>
            <p className="text-sm py-4 sm:py-6 text-black font-bold">
            Your trusted partner for comprehensive book publishing solutions, ensuring every aspect of your literary journey is expertly handled.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="https://www.facebook.com/thereadsy" >
              <i class="fa-brands fa-2x  fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/thereadsy/" >
              <i class="fa-brands fa-2x  fa-instagram"></i>

              </a>
              <a href="https://www.divedin.com" >

                {/* <FontAwesomeIcon icon={fadivedin}   style={{"color" : "#FF9903"}} size="2x" /> */}
              </a>
            </div>
          </div>
     
          <div className="mt-8">
            <h2   className="text-2xl  text-white font-bold mb-2">Services</h2>
            <ul className="mt-4 space-y-2">
              <li   className='text-black  font-bold' >
                <Link to="/book-marketing">Book Marketing</Link>
              </li>
              <li   className='text-black  font-bold' >
                <Link to="/video-book-trailer">Video Book Trailers</Link>
              </li>
              <li   className='text-black  font-bold' >
                <Link to="/author-website">Authors Website</Link>
              </li>
              <li   className='text-black  font-bold' >
                <Link to="/audio-book">Audio Book</Link>
              </li>
              <li   className='text-black  font-bold' >
                <Link to="/cover-design">Cover Design and Typesetting</Link>
              </li>
              <li   className='text-black  font-bold' >
                <Link to="/book-marketing">Business Book Writing</Link>
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <h2   className="text-white text-2xl font-bold mb-2">Quick Links</h2>
            {/* <div className="border-b-2 border-red-600 w-10"></div> */}
            <ul className="mt-4 space-y-2">
            <li   className='text-black font-bold' >
                <div to="/">Home</div>
              </li>
              {/* <li   className='text-black' >
                <Link to="/about">About Us</Link>
              </li> */}
              <li   className='text-black font-bold' >
                <Link to="/publishing">Publishing</Link>
              </li>
<li    className='font-bold'  >
<Link to="/Privacy-policy">Privacy Policy</Link>

</li>
<li   className='font-bold' >

<Link to="/Terms-Condition">Terms & Condition </Link>
</li>



            
            </ul>
          </div>
          <div className="mt-8">
            <h2    className="text-white text-2xl font-bold mb-2">About Us</h2>
            {/* <div className="border-b-2 border-red-600 w-10"></div> */}
            <ul className="mt-4 space-y-2">
             
             <li  className='font-bold  font-bold'  ><i class="fa-solid fa-location-dot mr-2 "></i> Our Address</li>
            <li  className='font-bold  font-bold'  >5900 Balcones Drive STE 100</li>
            <li  className='font-bold  font-bold'  >  <i class="fa-solid fa-phone-volume mr-2 py-4 "></i> +1 737-222-7373</li>



<li  className='font-bold  font-bold'  ><i class="fa fa-envelope mr-2  " aria-hidden="true"></i> contact@thereadsy.com </li>
          
            </ul>
          </div>
          
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <hr className="w-4/5 sm:w-3/5 border border-gray-300" />
      </div>

      <div className="flex flex-col justify-center items-center ">
  <div className="text-sm text-blackmt-2 font-2xl">
    <div  className='my-3' > 
      &copy; 2024 <Link   className='font-bold' to="https://radiantcortex.com/" target="_blank" style={{ textDecoration: "underline"}}>Radiant Cortex</Link>. All rights reserved.
    </div>
  </div>
</div>

    </footer>
  );
}

export default Footer;
