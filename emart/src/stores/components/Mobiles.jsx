import React from 'react';
import { mobileData } from '../data/mobiles';

const Mobiles = () => {
  const firstFiveimages = mobileData.slice(0, 5);
  
  return (
    <div id="">
      <h2>Mobiles</h2>
      <div className='prosection'>
        {
          firstFiveimages.map((item, index) => {
            return (
              <div className='imgsec' key={index}>
                <img className='proimg' src={item.image} alt={`Mobile ${index + 1}`} />
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default Mobiles;
