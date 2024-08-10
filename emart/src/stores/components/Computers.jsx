import React from 'react'
import {computerData} from '../data/computers'
const Computers = () => {
    const firstFive=computerData.slice(0,5)
  return (
    <>
    <h2>Computers</h2>
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
export default Computers
