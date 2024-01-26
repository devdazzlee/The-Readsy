import React from 'react';
import logo from '../../../Images/CompanyLogo.png'
import './Footer.css';

function Footer() {
  return (
    <footer className="text-black   md:px-6 px-6  sm:py-8 md:py-8  footer-image">
      <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          <div className="mt-4 sm:col-span-1">
            <div to={'/'}>
              <img    width={"150px"} src={logo} alt="WorldTour Logo" />
            </div>
            <p className="text-sm py-4 sm:py-6 text-black">
            Let's turn your Billionaire dream into a reality together.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="https://www.facebook.com" >
              <i class="fa-brands fa-2x  fa-facebook-f"></i>
              </a>
              <a href="https://www.twitter.com" >
              <i class="fa-brands fa-2x  fa-x-twitter"></i>
              </a>
              <a href="https://www.instagram.com" >
              <i class="fa-brands fa-2x  fa-instagram"></i>

              </a>
              <a href="https://www.divedin.com" >

                {/* <FontAwesomeIcon icon={fadivedin}   style={{"color" : "#FF9903"}} size="2x" /> */}
              </a>
            </div>
          </div>
     
          <div className="mt-8">
            <h2  style={{"color" : "#197BD6"}} className="text-2xl   font-bold mb-2">Services</h2>
            <ul className="mt-4 space-y-2">
              <li   className='text-black' >
                <div to="/AMAZON-FBA">Book Marketing</div>
              </li>
              <li   className='text-black' >
                <div to="/shopify-dropshipping">Video Book Trailers</div>
              </li>
              <li   className='text-black' >
                <div to="/shopify-dropshipping">Authors Website</div>
              </li>
              <li   className='text-black' >
                <div to="/AMAZON-FBA">Audio Book</div>
              </li>
              <li   className='text-black' >
                <div to="/AMAZON-FBA">Cover Design and Typesetting</div>
              </li>
              <li   className='text-black' >
                <div to="/AMAZON-FBA">Business Book Writing</div>
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <h2  style={{"color" : "#197BD6"}} className="text-2xl font-bold mb-2">Pages</h2>
            {/* <div className="border-b-2 border-red-600 w-10"></div> */}
            <ul className="mt-4 space-y-2">
            <li   className='text-black' >
                <div to="/">Home</div>
              </li>
              <li   className='text-black' >
                <div to="/AMAZON-FBA">About Us</div>
              </li>
              <li   className='text-black' >
                <div to="/about-us">Editing</div>
              </li>
              <li   className='text-black' >
                <div to="/Contact-us">Publishing</div>
              </li>
              <li   className='text-black' >
                <div to="/Contact-us">Pricing</div>
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <h2  style={{"color" : "#197BD6"}}  className="text-2xl font-bold mb-2">About Us</h2>
            {/* <div className="border-b-2 border-red-600 w-10"></div> */}
            



            <ul className="mt-4 space-y-2">
              <li  className='text-black'   ><a href="#">Authors</a></li>
              <li  className='text-black'   ><a href="#">Testimonials</a></li>
              <li  className='text-black'   ><a href="#">FAQs</a></li>
              <li  className='text-black'   ><a href="#">Contact</a></li>
          
            </ul>
          </div>
          
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <hr className="w-4/5 sm:w-3/5 border border-gray-300" />
      </div>

      <div className="flex flex-col justify-center items-center ">
  <div className="text-sm text-black mt-2 font-2xl">
    <div to="https://radiantcortex.com/" target="_blank">
      &copy; 2024 <span style={{ textDecoration: "underline" }}>Radiant Cortex</span>. All rights reserved.
    </div>
  </div>
</div>

    </footer>
  );
}

export default Footer;
