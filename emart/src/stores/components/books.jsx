import React from 'react'
import {booksData} from'../data/books'
const Books = () => {
    const firstFive = booksData.slice(0,5)
  return (
    <>
    <h2>Computers</h2>
    <div className='prosection'>
        {
            firstFive.map((item)=>{
                return(
                    <div className='imgsec'>
                        <img className='proimg'id='books' src={item.image} alt="" />
                    </div>
                )
            })

}
    </div>
    </>
  )
}

export default Books