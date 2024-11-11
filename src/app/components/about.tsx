import React from 'react'
import Image from "next/image"

function About() {
  return (
    <div>
      <section className="about" id='about'>
        <Image src="/burger-1.png" alt="Burger 1" className="about-img" width={500} height={500} />
        <div className="about-content">
          <h2>About Us</h2>
          <p className="text">
            At Burger Haven we believe in crafting the juiciest, most flavorful burgers made from the finest local ingredients.
            Founded with a passion for great food we have been serving up mouthwatering burgers since Year.
            Whether you’re craving a classic cheeseburger or something a little more adventurous, we’ve got something for everyone.
            Our mission is simple: to deliver the ultimate burger experience that keeps you coming back for more.
          </p>
          <p className="text">
            "Join us for a bite, or let us bring our delicious burgers straight to your door—order online today!"
          </p>
        </div>
      </section>

    </div>
  )
}

export default About