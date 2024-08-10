import React from 'react'
import {tvData} from '../data/tv'
const Tv = () => {
    const firstFive = tvData.slice(0,5)
  return (
        <>
        <h2>Television</h2>
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
export default Tv