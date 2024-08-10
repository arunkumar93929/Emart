import React from 'react'
import { acData } from '../data/ac'
const Ac = () => {
    const firstFive =acData.slice(0,5)
  return (
    <>
    <h2>Air conditioners</h2>
    <div className='prosection'>
        {
            firstFive.map((item)=>{
                return(
                    <div className='imgsec'>
                        <img className='proimg'id='ac' src={item.image} alt="" />
                    </div>
                )
            })

}
    </div>
    </>
  )
}

export default Ac