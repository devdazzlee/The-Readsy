import React, { useEffect } from 'react';
import './Display_Card.css';

const DisplayCards5 = () => {
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
    <div  style={{"width" : "67%"}} className='flex flex-wrap justify-start bg-white cardsPosition py-6 mt-6 m-auto'>
      <div className="Offer-card">
        <img className='w-44 m-auto' src={"https://www.bookwritingfounders.com/img/pricing/6.png"} alt="Image 3" />
        <h1>BOOK MARKETING</h1>
        <p>We will help market your book so that it almost guarantees that you grow your audience drastically. Building custom marketing strategies is what we do best!</p>
      </div>
    </div>
  );
};

export default DisplayCards5;
