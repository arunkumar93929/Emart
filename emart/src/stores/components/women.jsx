import React from 'react'
import {womanData} from '../data/woman'
const Women = () => {
    const firstFive = womanData.slice(0,2)
  return (
        <>
        <h2>Women</h2>
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
export default Women