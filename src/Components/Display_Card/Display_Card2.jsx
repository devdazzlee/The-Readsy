import React, { useEffect } from 'react';
import './Display_Card.css';

const DisplayCards2 = () => {
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
        <img className='w-16  m-auto' src={"https://www.bookwritingfounders.com/img/icons/icon-informative.png"} alt="Image 3" />
        <h1>Our Commitment to Secure Bookwriting</h1>
        <p>Privacy is the most critical factor when it comes to bookwriting. Keeping your data secure is our moral and social responsibility. We implement data security procedures to eliminate any instincts of malpractice. We assure you that your information is secure with us.</p>
      </div>
      <div className="Offer-card">
        <img className='w-16  m-auto' src={"https://www.bookwritingfounders.com/img/icons/icon-journalism.png"} alt="Image 2" />
        <h1>Affordable Book Writing</h1>
        <p>Not everyone can spare thousands of dollars on having a book written. The current market trends have affected people from all walks of life. We respect your situation. For this, we have developed flexible payment methods and decent service rates. Our bookwriting agency, we will charge you market competitive rates.</p>
      </div>
      <div className="Offer-card">
        <img className='w-16  m-auto' src={"https://www.bookwritingfounders.com/img/icons/icon-publishing.png"} alt="Image 1" />
        <h1>Your Trusted Partner in Project Completion</h1>
        <p>We have been working in the industry for over a decade now, which proves that we are capable, worthy of your reliance for project completion. Our vast experience allows you a chance to reassure yourself that you're paying for the best quality of services out there.</p>
      </div>
    </div>
  );
};

export default DisplayCards2;
