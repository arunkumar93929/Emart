import React from 'react'
import {furnitureData} from '../data/furniture'
import Navbar from '../components/Navbar'
const Furniture = () => {
  return (
    <>
    <Navbar/>
    <div className='pageSection'>
        {furnitureData.map((item)=>{
            return(
                <div>
                    <div className="pageImg">
                        <img src={item.image} alt="" />
                    </div>
                </div>
            )
        })}
    </div>
    </>
  )
}
export default Furniture