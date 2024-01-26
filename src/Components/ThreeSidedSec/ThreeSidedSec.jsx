import React from 'react';
import Button_Text from './Button_Text';

const ThreeSidedSec = ({ buttonData,buttonData2,  imageData }) => {
  return (
    <div className='flex flex-wrap justify-center'>
      <div>
        {buttonData.map((data, index) => (
          <Button_Text
            key={index}
            buttonTxt={data.buttonTxt}
            parahraph={data.parahraph}
          />
        ))}
      </div>

      <div>
        <img src={imageData.src} alt={imageData.alt} />
      </div>

      <div>
        {buttonData2.map((data, index) => (
          <Button_Text
            key={index}
            buttonTxt={data.buttonTxt}
            parahraph={data.parahraph}
          />
        ))}
      </div>
    </div>
  );
};

export default ThreeSidedSec;
