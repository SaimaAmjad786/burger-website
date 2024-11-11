import React from 'react'

function Home() {
    return (
        <div>
            <div className="main" id='home'>
                <section className="home">
                    <img src="/hero.png" alt="Hero Image" className="home-img" />
                    <div className="home-content">
                        <h1>Tasty Burger</h1>
                        <p className="text">
                            Welcome to Burger Shop where every bite is a flavor explosion
                            Explore our mouthwatering menu of handcrafted burgers made from the freshest ingredients
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