import React, { useEffect } from 'react';
import './Display_Card.css';

const DisplayCards4 = () => {
  useEffect(() => {
    // Add your scroll animation logic here
    const cards = document.querySelectorAll('.card');

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
    <div className='flex flex-wrap justify-center bg-white cardsPosition py-6 mt-6'>
      <div className="Offer-card">
        <img className='w-44 m-auto' src={"https://www.bookwritingfounders.com/img/pricing/3.png"} alt="Image 3" />
        <h1>PROFESSIONAL AUDIOBOOKS</h1>
        <p>You can make your audiobooks simply by contacting us on this website. It’s that easy! We welcome any queries you might have with open arms.</p>
      </div>
      <div className="Offer-card">
        <img className='w-44 m-auto' src={"https://www.bookwritingfounders.com/img/book_cover/fiction/f1.jpg"} alt="Image 2" />
        <h1>CUSTOM BOOK ILLUSTRATIONS</h1>
        <p>We can help create your customer illustrations at just a fraction of the cost! We will provide the best quality of products at the most affordable prices.</p>
      </div>
      <div className="Offer-card">
        <img className='w-44  h-72  m-auto' src={"https://www.bookwritingfounders.com/img/pricing/5.png"} alt="Image 1" />
        <h1>BOOK PUBLISHING</h1>
        <p>Our book publishers are the best in the business at what they do. We will make all your dreams come true by making you the next bestselling author.</p>
      </div>
    </div>
  );
};

export default DisplayCards4;
