// CardSlider.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Card_Slider.css'; // Create this CSS file for styling

const CardSlider = () => {
  const cardData = [
    {imageUrl: 'https://www.bookwritingfounders.com/img/extrat-16.jpg'},
    {imageUrl: 'https://www.bookwritingfounders.com/img/extrat-17.webp'},
    {imageUrl: 'https://www.bookwritingfounders.com/img/extrat-18.webp'},
    {imageUrl: 'https://www.bookwritingfounders.com/img/extrat-19.webp'},
    {imageUrl: 'https://www.bookwritingfounders.com/img/extrat-20.webp'},
    {imageUrl: 'https://www.bookwritingfounders.com/img/extrat-1.webp'},
    {imageUrl: 'https://www.bookwritingfounders.com/img/extrat-2.webp'},
    {imageUrl: 'https://www.bookwritingfounders.com/img/extrat-3.webp'},
    {imageUrl: 'https://www.bookwritingfounders.com/img/extrat-4.webp'},
    {imageUrl: 'https://www.bookwritingfounders.com/img/extrat-5.webp'},
    {imageUrl: 'https://www.bookwritingfounders.com/img/extrat-6.webp'},
    {imageUrl: 'https://www.bookwritingfounders.com/img/extrat-7.jpg'},

    // Add more card data as needed
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="card-slider-container">
      <Slider {...settings}>
        {cardData.map((card) => (
          <div key={card.id} className="card_slider">
            <img src={card.imageUrl} alt={card.title} />
            <div className="card_slider-title">{card.title}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
