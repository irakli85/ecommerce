import React from 'react'
import coverimg from '../assets/coverimg.png'

function Main() {
  return (
    <div>
      <main>
        <div>
          <h1>PROVIDING SERVICES AT YOUR DOOR</h1>
          <p><span>MACC Essentials</span> has an important role in making supplies and services available to customers and their patients during this critical time. This includes services from various domains. Our aim is to aid you. As much we can.</p>
          <button>LEARN MORE</button>
        </div>

        <div>
          <img src={coverimg} alt="coverimg"/>
        </div>
      </main>
    </div>
  )
}

export default Main