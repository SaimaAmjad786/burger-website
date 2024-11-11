import React from 'react'
import Image from "next/image"
function Home() {
    return (
        <div>
            <div className="main" id='home'>
                <section className="home">
                    <Image src={"/hero.png"} alt="Hero Image" className="home-img" width={600}
                    height={600}
                    />
                    <div className="home-content">
                        <h1>Tasty Burger</h1>
                        <p className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse laboriosam optio amet voluptatibus ab cupiditate doloribus sapiente! In qui tenetur, cum, reiciendis eius ex iure pariatur, eum fuga ea voluptatum.
                        </p>
                        <div className="button">
                            <a href="#" className="btn btn-1">
                                view menu
                            </a>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default Home;