import React from 'react'
import { watchData} from '../stores/data/watch'
import { useParams } from 'react-router-dom'
const Watch = () => {
    const {id} = useParams()
    const product =watchData.find((item)=>item.id===id)
  return (
    <div className='ind-page'>
      <div className="ind-img">
        <img src={product.image} alt="" />
      </div>
      <div className="ind-model">
        <h3>{product.model}</h3>
      </div>
      <div className="ind-price">
        <h2> {product.price}</h2>
      </div>
      <div className="ind-desc">
        <p>{product.description}</p>
      </div>
    </div>
  )
}

export default Watch