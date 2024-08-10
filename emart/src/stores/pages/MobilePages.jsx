import React from 'react';
import { mobileData } from '../data/mobiles';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const MobilePages = () => {
  return (
    <>
      <Navbar />
      <div id="mobile-pages" className='page-container'>
        {mobileData.map((item) => {
          return (
            <div id={`mobile-item-${item.id}`} className='mobile-item' key={item.id}>
              <Link to={`/mobiles/${item.id}`}>
                <div className="pageImg">
                  <img src={item.image} alt={`${item.company} ${item.model}`} />
                </div>
                <div className="promodel">
                  {item.company}, {item.model}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MobilePages;
