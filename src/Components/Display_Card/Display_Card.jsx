import React, { useEffect } from 'react';
import './Display_Card.css';

const DisplayCards = () => {
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
    <div className='flex flex-wrap justify-center bg-white cardsPosition py-6 mt-12'>
      <div className="Offer-card">
        <img className='w-16  m-auto' src={"https://www.bookwritingfounders.com/img/icons/icon-fiction.png"} alt="Image 3" />
        <h1>From Research to Writing</h1>
        <p>We can all research on any subject with the help of the internet. However, writing on that research is a different ball game. A well sought out research relies on certain parameters. It may vary from one subject to another. All aspects related to a particular subject   must be studied.</p>
      </div>
      <div className="Offer-card">
        <img className='w-16  m-auto' src={"https://www.bookwritingfounders.com/img/icons/icons-nonfiction.png"} alt="Image 2" />
        <h1> Book Writing Services</h1>
        <p>Good customer service is vital for us. Book writer services are widely available in the market. Unfortunately, not everyone is offering these services with quality and class. Customer service is essential for customers. It is what bridges the gap between the creative team and the client.</p>
      </div>
      <div className="Offer-card">
        <img className='w-16  m-auto' src={"https://www.bookwritingfounders.com/img/icons/icon-biography.png"} alt="Image 1" />
        <h1>Native Speakers, Proficient, and Sensitive</h1>
        <p>All of our writers for hire are native English speakers. Our book writers have a high degree of language proficiency. The professional conduct of our book writers when dealing with sensitive topics is sublime. The perfect ratings on our website are a testament to our claims.</p>
      </div>
    </div>
  );
};

export default DisplayCards;
