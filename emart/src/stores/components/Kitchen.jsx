import React from 'react'
import {kitchenData} from '../data/kitchen'
const Kitchen = () => {
    const firstFive = kitchenData.slice(0,5)
  return (
        <>
        <h2>Kitchen</h2>
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
export default Kitchen