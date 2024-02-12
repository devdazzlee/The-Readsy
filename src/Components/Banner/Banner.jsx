import React, { useState, useEffect } from 'react';
import './Banner.css';
// import '../../Components/Animation.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Banner = () => {
  const [showPopup, setShowPopup] = useState(false);

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


  return (
    <div style={{ paddingTop : "100px" }} className="main-banner h-auto">
      <div className="w-full container mx-auto md:px-6">
        <div className="flex flex-col md:flex-row justify-between py-6  animation-from-left">

          <div  style={{"margin" :"auto"}} className=" md:mt-0 fade-up-element mb-10 w-full md:w-7/12 px-6 md:px-3 lg:px-6">
            <h1 style={{ color: '#9AADAB' }} className="text-2xl font-bold">It's Time You Share Your Amazing Story!</h1>
            <h1 class="mb-4 text-4xl md:text-6xl text-white font-bold">
    Best Professional Book <br class="md:hidden"/> Writing Services
</h1>

            <p className="text-xl mb-6 text-white">
            Get your book written by New York Times best seller book writer.
            </p>
              
            <Link to={'/contact'}>
              <button style={{ background: '#10AFD0' }} className="w-full mr-4 md:w-auto text-white font-bold py-3 px-3  rounded mb-4 md:mr-2">
              Consult an Expert
              </button>
            </Link>
            <Link to={'/contact'}>


            <button style={{ background: '#10AFD0' }} className="w-full md:w-auto text-white font-bold py-3 px-3  rounded">
            Get a Quote
            </button>
            </Link>
          </div>

          <div style={{background: '#10AFD0' }} className='mt-4 fade-up-element w-full md:w-1/3 pt-4 md:ml-6 rounded-2xl'>
          <form className="px-4"   onSubmit={handleSubmit}   >
              <div className='flex flex-col justify-center '>
                <h2 style={{ color: '#000000' }} className="mb-2 text-2xl font-bold m-auto text-center w-64">Get In Touch With  Our Experts</h2>
                
                


                <p className="w-70 m-auto text-black">
                To Schedule a consultation please send us your details or call now
                </p>


                <span className='font-bold m-auto mb-6' >+1 737-222-7373</span>
              </div>

              <div className="relative mb-6" data-te-input-wrapper-init>
              <input
 type="text"
 id="name"
 autoComplete="given-name"
 placeholder="Full Name"
 className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
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
                 className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
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
className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
value={formData.textarea}
onChange={handleInputChange}

/>

              </div>

              <button
                 type="submit"
                style={{ background: '#000000' }}
                data-te-ripple-init
                data-te-ripple-color="light"
                className="mb-6 inline-block w-full rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
               Contact With Us
              </button>
            </form>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="popup">
          <p>Form submitted successfully!</p>
        </div>
      )}
    </div>
  );
};

export default Banner;
