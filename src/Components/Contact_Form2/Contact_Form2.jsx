import axios from 'axios';
import React, { useState } from 'react';

const Contact_Form2 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    textarea: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async () => {
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
    number: '',
    textarea: '',
  });  

} catch (error) {
  console.error('Error sending message:', error);
  alert('There was an error sending your message. Please try again later.');
}
  };



  
  return (
    <>
    

<div class="container my-24 mx-auto md:px-6">
  <section class="mb-32">
    <div class="flex flex-wrap">
      <div class="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
        <h2 class="mb-6 text-3xl font-bold">Our Contacts</h2>
        <p class="mb-6 text-neutral-500 ">
        Discover seamless connectivity with 'Our Contacts' on our website. This feature serves as a centralized directory, providing instant access to essential contact details for individuals, departments, and key entities within our network. Easily navigate through organized information, making internal and external communication a breeze. 
        </p>
      

        



        <p class="mb-2 text-neutral-500">
        Our Office In Texas:
        </p>
        <p class="font-bold  mb-2 text-neutral-500 ">
        5900 Balcones Drive STE 100
        </p> 

        <p class="mb-2 text-neutral-500 ">
        Phone: +1 737-222-7373
        </p>
        <p class="font-bold  mb-2 text-neutral-500">
        Email: contact@thereadsy.com
        </p> 



        

       
      </div>
      <div   class="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
                     <form>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    style={{ border: "1px solid #737373" }}
                    className="peer block min-h-[auto] w-full rounded border-0 py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 peer-focus:text-primary dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder-opacity-0"
                    id="exampleInput90"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    name="name"
                  />
                </div>

                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    style={{ border: "1px solid #737373" }}
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 peer-focus:text-primary dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder-opacity-0"
                    id="exampleInput90"
                    placeholder="Phone Number"
                    value={formData.number} 
                    onChange={handleInputChange}
                    name="number"
                  />
                </div>

                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="email"
                    style={{ border: "1px solid #737373" }}
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 peer-focus:text-primary dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder-opacity-0"
                    id="exampleInput91"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    name="email"
                  />
                </div>

                <div className="relative mb-6" data-te-input-wrapper-init>
                  <textarea
                    style={{ border: "1px solid #737373" }}
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 data-[te-input-state-active]:placeholder-opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder-opacity-0"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Your message"
                    value={formData.textarea}
                    onChange={handleInputChange}
                    name="textarea"
                  />
                </div>

                <button
                  type="button"
                  className="mb-6 inline-block w-full rounded bg-primary-blue px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  style={{ "background": "#10AFD0" }}
                  onClick={handleFormSubmit}
                >
                  Send
                </button>
              </form>

      </div>
    </div>
  </section>
</div>

    
    </>
  )
}

export default Contact_Form2