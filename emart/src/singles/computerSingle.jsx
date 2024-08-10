import React from 'react'
import { computerData } from '../stores/data/computers'
import { useParams } from 'react-router-dom'
const ComputerSingle = () => {
    const {id} = useParams()
    const product =computerData.find((item)=>item.id===id)
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

export default ComputerSingle