import React from 'react'
import { watchData } from '../data/watch'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
const WatchPage = () => {
  return (
    <>
    <Navbar/>
    <div className='pageSection'>
        {watchData.map((item)=>{
            return(
                <div>
                    <Link to={`/watches/${item.id}`}>
                    <div className="pageImg">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="promodel">
                        {item.brand} {item.model}
                    </div>
                    </Link>
                </div>
            )
        })}
    </div>
    </> 
  )
}

export default WatchPage