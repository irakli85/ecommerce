import React from 'react'
import phoneimage from '../assets/phoneimage.png'
import discount from '../assets/discount.png'
import product2 from '../assets/product2.png'
import product3 from '../assets/product3.png'

function Discount() {
  return (
    <div>
      <div className='discount'>

        <div>
          <img src={phoneimage} alt="phoneimage"/>
        </div>

        <div>
          <div>
            <img src={discount} alt='discount'/>
            <button>VIEW ALL</button>
          </div>

          <div className='discount-items'>

            <div>
              <img src={product2} alt="product2"/>
              <p>Body Spray</p>
              <span>₹ 500</span><span>₹ 400</span>
            </div>

            <div>
              <img src={product3} alt="product3"/>
              <p>Stay Free Ultra Pad</p>
              <span>₹ 400</span><span>₹ 250</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Discount