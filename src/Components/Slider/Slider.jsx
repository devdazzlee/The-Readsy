import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Support_Slider = ({img1,img2,img3,img4}) => {
  return (
    <div style={{"margin" :"auto"}} className="text-center sm:flex sm:flex-wrap sm:justify-evenly sm:items-center container p-6">
      <div className="w-44 mx-auto mb-4">
        <img src={img1} alt="partner-logo" />
      </div>
      <div className="w-44 mx-auto mb-4">
        <img src={img2} alt="partner-logo" />
      </div>
      <div className="w-44 mx-auto mb-4 sm:w-56 sm:mb-0">
        <img src={img3} alt="partner-logo" />
      </div>

      <div className="w-36 mx-auto mb-4 sm:w-40 sm:mb-0 ">
        <img src={img4} alt="partner-logo" />
      </div>
      {/* <div className="w-12 mx-auto sm:w-44">
        <img src={img4} alt="partner-logo" />
      </div> */}
    </div>
  );
}

export default Support_Slider;
