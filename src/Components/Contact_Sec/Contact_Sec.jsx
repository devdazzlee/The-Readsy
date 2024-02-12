import axios from 'axios';
import React from 'react'
import './Contact_Sec.css'
import { useState } from 'react';
const Contact_Sec_Form = () => {


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    textarea: '',
  });

  const handleInputChange =  (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGetQuote =  async () => {
    // Access the values from the state
    const { name, email, number, textarea } = formData; 
    // Log input values to console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', number);
    console.log('Message:', textarea);
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
    <>
  <div>
      <section    style={{"background" : "#F0F0F0"}}   className="text-gray-700 my-12 body-font relative ">
        <div className="container px-4 py-18 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
        

<h1  className='text-4xl font-bold m-4'>Looking To Turn Your Words Into A <br />Compelling Story?</h1>
    <p  className='m-4'>We are one-stop shop offering all writing, editing, publishing, and marketing solutions. Get connected through the below form for <br /> expert consultation and exclusive discounts.</p>
          </div>
         <div   className='w-full'    >
         <div  className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-2/6">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-black font-bold">
                    Name
                  </label>
                  <input
                  style={{"border" : "1px solid black"}}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}                  
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-2/6">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm text-black font-bold"
                  >
                    Email
                  </label>
                  <input
                  style={{"border" : "1px solid black"}}

                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
  onChange={handleInputChange}
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-2/6">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm text-black font-bold"
                  >
                    Phone
                  </label>
                  <input
                  style={{"border" : "1px solid black"}}

  type="tel" 
  id="phone"
  name="number"
  value={formData.number}
  onChange={handleInputChange}
  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"

                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 text-sm text-black font-bold"
                  >
                    Message
                  </label>
                  <textarea
                  style={{"border" : "1px solid black"}}

                     id="message"
                     name="textarea"
                     value={formData.textarea}
                     onChange={handleInputChange}
                     className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"                    
                  ></textarea>
                </div>
              </div>
              <div className="p-2  m-auto">
              <button 
  
              onClick={handleGetQuote}
              className="hover-button-bg bg-black w-full md:w-auto text-white font-bold py-2 px-6  rounded">
Get a Quote
            </button>
              </div>
        
            </div>
          </div>
         </div>
        </div>
      </section>
    </div>
    
    </>
  )
}

export default Contact_Sec_Form