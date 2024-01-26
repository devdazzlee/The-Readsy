import React from 'react';
import './Flip_Card.css'
const FlipCard = ({ frontContent, backContent, imgSrc, imgAlt, imgStyle }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          {frontContent}
        </div>
        <div className="flip-card-back">
          <p className='text-center text-md  font-bold' >{backContent}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
