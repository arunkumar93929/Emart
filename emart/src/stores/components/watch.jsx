
import React from 'react'
import {watchData} from '../data/watch'
const Watch = () => {
    const firstFive = watchData.slice(0,5)
  return (
        <>
        <h2>Wathces</h2>
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
export default Watch