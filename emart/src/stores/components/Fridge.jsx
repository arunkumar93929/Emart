import React from 'react'
import {fridgeData} from'../data/fridge'
const Fridge = () => {
    const firstFive = fridgeData.slice(0,5)
  return (
    <>
    <h2>Fridge</h2>
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

export default Fridge