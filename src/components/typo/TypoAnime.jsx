import React from 'react'
import { TypeAnimation } from 'react-type-animation';
const TypoAnime = () => {
  return (
       <TypeAnimation
      sequence={[
        'Agrotech',
        1000, 
        'Forex/crypto',
        1000,
        'Real estate',
        1000,
        'Gold stock',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ display: 'block',fontFamily:"poppins",color:'rgb(88,120,232)', fontWeight:600 }}
      repeat={Infinity}
    />
  )
}

export default TypoAnime