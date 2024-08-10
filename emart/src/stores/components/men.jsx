import React from 'react'
import {menData} from '../data/men'
const Men = () => {
    const firstFive = menData.slice(0,2)
  return (
        <>
        <h2>Men</h2>
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
export default Men