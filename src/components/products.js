import React from 'react'
import newProducts from '../assets/newproducts.png'
import product1 from '../assets/product1.png'
import product2 from '../assets/product2.png'
import product3 from '../assets/product3.png'


function Products() {
  return (
    <div>
      <div>
        <img src={newProducts} alt="new products"/>
      </div>
      <div className='product-items'>
        <div>
          <img src={product1} alt="product1"/>
          <p>Face Masks</p>
        </div>

        <div>
          <img src={product2} alt="product2"/>
          <p>Body Spray</p>
        </div>

        <div>
          <img src={product3} alt="product3"/>
          <p>Stay Free Ultra Pad</p>
        </div>
      </div>
    </div>
  )
};

export default Products;