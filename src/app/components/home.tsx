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
                            Welcome to Burger Shop burger every bite is a flavor explore our mouthwatering menu of handcrafted burgers made from the freshest ingredients
                            Order now and experience the best burgers in town, delivered straight to your door.
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