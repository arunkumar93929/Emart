import React from 'react'
import {furnitureData} from '../data/furniture'
const Furniture = () => {
    const firstFive = furnitureData.slice(0,5)
  return (
        <>
        <h2>Furnniture</h2>
        <div className='prosection'>
            {
                firstFive.map((item)=>{
                    return(
                        <div className='imgsec'>
                            <img className='proimg' src={item.image} alt="" />
                        </div>
                    )
                })
    
    }
        </div>
        </>
      )
    }
export default Furniture