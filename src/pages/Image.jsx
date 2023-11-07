import React from 'react'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'

const Image = () => {
  return (
   <div 
   style={
    {
        margin: '0 auto',
        width: '100%',
        padding0: '0 20px',
    }
   }
    className="image">
   <img src={img1} alt="img1" />
    <img src={img2} alt="img2" />
   </div>
  )
}

export default Image