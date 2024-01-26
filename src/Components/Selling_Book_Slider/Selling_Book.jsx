import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Selling_Book_Slider    = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0); // Go to the first slide
    }
  }, []);

  const sliderSettings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div    className="h-5/6	 container m-auto ">


<h1 className='text-5xl m-auto text-center font-bold py-12'  >Best Selling Books</h1>
      <Slider ref={sliderRef} {...sliderSettings} className="customer-logos">
        <div className="slide"><img    src="https://www.bookwritingfounders.com/img/home/books/5.jpg" alt="partner-logo" /></div>
        <div className="slide"><img  src="https://www.bookwritingfounders.com/img/home/books/6.jpg" alt="partner-logo" /></div>
        <div className="slide"><img src="https://www.bookwritingfounders.com/img/home/books/b1.jpg" alt="partner-logo" /></div>
        <div className="slide"><img src="https://www.bookwritingfounders.com/img/home/books/book_cover_1.jpg" alt="partner-logo" /></div>
        <div className="slide"><img src="https://www.bookwritingfounders.com/img/home/books/book_cover_2.jpg" alt="partner-logo" /></div>
        <div className="slide"><img src="https://www.bookwritingfounders.com/img/home/books/book_cover_3.jpg" alt="partner-logo" /></div>
        <div className="slide"><img src="https://www.bookwritingfounders.com/img/home/books/book_cover_4.jpg" alt="partner-logo" /></div>
      </Slider>
    </div>
  );
}

export default Selling_Book_Slider  ;
