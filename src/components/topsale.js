import React from 'react'
import topsell from '../assets/topsell.png'
import product2 from '../assets/product2.png'
import product1 from '../assets/product1.png'
import featureimg from '../assets/featureimg.png'

function Topsale() {
  return (
    <div className='top-sell'>
      <div>
        <div>
          <img src={topsell} alt="topsell"/>
          <button>VIEW ALL</button>
        </div>

        <div className='topsell-item'>
          <div>
            <img src={product2} alt="product2"/>
            <p>Body Spray</p>
            <p>₹ 400</p>
          </div>

          <div>
            <img src={product1} alt="product1"/>
            <p>Body Spray</p>
            <p>₹ 400</p>
          </div>
        </div>
      </div>

        <div>
          <img src={featureimg} alt="fetureimg"/>
        </div>
    </div>
    
  )
}

export default Topsale