import React, { useState, useEffect } from 'react';
import './Banner.css';
// import '../../Components/Animation.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Banner7 = () => {
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
        
            <h1 class="mb-4 text-4xl md:text-6xl text-white font-bold">
            E-Book Typesetting And Cover Design Services At Affordable Rates.
</h1>

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

export default Banner7;
