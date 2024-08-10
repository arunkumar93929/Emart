import React from 'react'
import { acData } from '../data/ac'
import Navbar from '../components/Navbar'
const Ac = () => {
  return (
    <>
    <Navbar/>
    <div className='pageSection'>
        {acData.map((item)=>{
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

export default Ac