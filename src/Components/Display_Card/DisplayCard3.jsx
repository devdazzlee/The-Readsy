import React, { useEffect } from 'react';
import './Display_Card.css';
import img1 from '../../Images/5.png'
const DisplayCards3 = () => {
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
        <img className='w-44 m-auto' src={img1} alt="Image 3" />
        <h1>BOOK COVER DESIGN</h1>
        <p>Our designers will make sure they provide a book cover design that perfectly encapsulates your book’s unique identity. We do everything we do from scratch, which guarantees every book cover that we produce is unique.</p>
      </div>
      <div className="Offer-card">
        <img className='w-96 h-52    m-auto' src={"https://www.bookwritingfounders.com/img/pricing/Edition.png"} alt="Image 2" />
        <h1>PREMIUM BOOK VIDEOS</h1>
        <p>Have your book trailers created by the best designers in the industry. We create elaborate cinematic videos for your books that are intricate and creative simultaneously, which helps build your book’s awareness in the best way possible.</p>
      </div>
      <div className="Offer-card">
        <img className='w-96 h-52   m-auto' src={"https://www.bookwritingfounders.com/img/pricing/2.png"} alt="Image 1" />
        <h1>AUTHOR WEBSITE</h1>
        <p>Have your very own website created where you can showcase the person behind the book. You can build a huge fan following just with the help of your website.</p>
      </div>
    </div>
  );
};

export default DisplayCards3;
