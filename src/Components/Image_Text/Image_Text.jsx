import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Image_Card = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.animation-from-left');
    const handleScroll = () => {
      cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight) {
          card.classList.add('fade-up-element');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className='ImageCard py-2 m-auto w-full		'>
      <div className="flex flex-wrap animation-from-left">
        
        <div className="   md:px-0 w-full m-auto md:w-1/2">
        <h2 className="mb-6 text-4xl text-black font-bold">
              <span className='mb-6'> </span> <br />We Are Here To Help You!</h2>
            <p className="w-auto mb-6 md:w-3/4 w-full	 text-black">
            We believe that every story is worth sharing. Our book writer for hire put effort into executing your idea to perfection. Nothing can be accomplished without hard work and dedication. Our team has these attributes to create an exciting product. To shape words into a story, we are going to need the appropriate information. We refer our manuscript writing project brief as the first stepping stone towards your success. Our bookwriting services embed the true essence of our words in the right manner. We assure our clients that quality will never be compromised.


            </p>

            




       

<div className='flex flex-wrap text-black w-3/4	mb-4 justify-between' >
           <ul>
              <li   className='mb-2' ><i  style={{"color" : "#10AED0"}} class="fa fa-check-circle mr-2" aria-hidden="true"></i>Ghostwriting</li>
              <li   className='mb-2' ><i  style={{"color" : "#10AED0"}} class="fa fa-check-circle mr-2" aria-hidden="true"></i>Proof Reading</li>
              <li   className='mb-2' ><i  style={{"color" : "#10AED0"}} class="fa fa-check-circle mr-2" aria-hidden="true"></i>Book Editing</li>
            </ul>
            

            <ul>
              <li   className='mb-2' ><i  style={{"color" : "#10AED0"}} class="fa fa-check-circle mr-2" aria-hidden="true"></i> Audiobook Service</li>
              <li   className='mb-2' ><i  style={{"color" : "#10AED0"}} class="fa fa-check-circle mr-2" aria-hidden="true"></i> Book Publishing</li>
              <li   className='mb-2' ><i  style={{"color" : "#10AED0"}} class="fa fa-check-circle mr-2" aria-hidden="true"></i> Book Marketing</li>
            </ul>
           </div>
           <Link to={'/contact'}>
            
            
           <button style={{ background: '#10AFD0' }} className="w-full md:w-auto text-white font-bold py-4 px-2  rounded">
           LOOKING FOR A Book WRITER

            </button>
                    </Link>

        </div>
        <div className=" md:w-2/5	md:ml-20 flex flex-col h-full	 mb-4 md:mb-0">
        {/* <img className='w-full md:w-11/12' src={'https://www.bookwritingfounders.com/img/home/section3/man-with-laptop.jpg'} alt="Testimonial Image" /> */}
        <img className=' mt-16 w-full md:w-11/12  rounded-lg' src={'https://www.bookwritingfounders.com/img/home/section3/writing-girl.jpg'} alt="Testimonial Image" />


        </div>
      </div>
    </div>
  );
}

export default Image_Card;
