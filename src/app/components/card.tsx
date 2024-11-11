import React from 'react'
import Image from "next/image"
function Card() {
  return (
    <div>
        <section className="services" id='expert'>
  <h2>Our Experts</h2>
  <p className="text">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
  </p>
  <div className="cards">
    <div className="card">
      <Image  src="/chef-1.png" alt="Chef 1" width={600}  height={600}/>
      <p className="chef-name">John Doe</p>
    </div>
    <div className="card">
      <Image src={"/chef-2.png"} alt="Chef 2" width={600}  height={600}/>
      <p className="chef-name">John Doe</p>
    </div>
    <div className="card">
      <Image src={"/chef-3.png"} alt="Chef 3" width={600} height={600} />
      <p className="chef-name">John Doe</p>
    </div>
    <div className="card">
      <Image src={"/chef-4.png"} alt="Chef 4" width={600} height={600} />
      <p className="chef-name">John Doe</p>
    </div>
  </div>
</section>

        </div>
  )
}

export default Card;