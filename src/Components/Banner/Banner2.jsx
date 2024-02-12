import React, { useState, useEffect } from 'react';
import './Banner.css';
// import '../../Components/Animation.css';
// import { Link } from 'react-router-dom';
import axios from 'axios';
const Banner2 = () => {
  const [showPopup, setShowPopup] = useState(false);



  return (
    <div style={{ paddingTop : "100px" }} className="main-banner h-auto">
      <div className="w-full container mx-auto md:px-6">
        <div className="flex flex-col md:flex-row justify-between py-6  animation-from-left">

          <div  style={{"margin" :"auto"}} className=" md:mt-0 fade-up-element mb-10 w-full md:w-7/12 px-6 md:px-3 lg:px-6">
          <h1 class="mb-4 text- xl md:text-6xl text-white font-bold">
          Let's Discuss About Your Project.
</h1>

          </div>

         
        </div>
      </div>

    
    </div>
  );
};

export default Banner2;
