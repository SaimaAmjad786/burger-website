import React from 'react'

function Card() {
  return (
    <div>
        <section className="services">
  <h2>Our Experts</h2>
  <p className="text">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
  </p>
  <div className="cards">
    <div className="card">
      <img src="/chef-1.png" alt="Chef 1" />
      <p className="chef-name">John Doe</p>
    </div>
    <div className="card">
      <img src="/chef-2.png" alt="Chef 2" />
      <p className="chef-name">John Doe</p>
    </div>
    <div className="card">
      <img src="/chef-3.png" alt="Chef 3" />
      <p className="chef-name">John Doe</p>
    </div>
    <div className="card">
      <img src="/chef-4.png" alt="Chef 4" />
      <p className="chef-name">John Doe</p>
    </div>
  </div>
</section>

        </div>
  )
}

export default Card;