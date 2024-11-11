import React from 'react'
import Image from "next/image"

function About() {
  return (
    <div>
      <section className="about" id='about'>
        <Image src={"/burger-1.png" }alt="Burger 1" className="about-img" width={500} height={500} />
        <div className="about-content">
          <h2>About Us</h2>
          <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati atque, impedit cum temporibus dolor iure ratione nam doloremque! Ducimus dignissimos delectus enim sunt vel nostrum expedita officia sapiente veritatis modi incidunt ipsum adipisci, eaque pariatur iusto quos labore voluptates deserunt ea! Sit nobis culpa nisi quia fuga sapiente, corrupti cumque?
          </p>
          <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, voluptas? Facilis rerum consequatur distinctio quibusdam saepe est minima cupiditate aperiam! Perferendis, voluptatem expedita! Consequuntur culpa error cum perferendis ipsum quae.
          </p>
        </div>
      </section>

    </div>
  )
}

export default About