import React from 'react'

function Menu() {
    return (
        <div>
            <section className="menu" id='menu'>
                <h2>our Menu</h2>
                <p className="text">
                    Our menu is a delicious journey, offering everything from classic burgers to bold, unique creations, made with the freshest ingredients to satisfy every craving.
                </p>
                <div className="gallery">
                    <div className="gall-img">
                        <img src="/burger-2.png" alt="Burger 2" />
                        <div className="info">
                            <p className="price">$3.85</p>
                            <p className="name">Burger Name</p>
                            <a href="#" className="btn btn-2">
                                Order now!
                            </a>
                        </div>
                    </div>
                    <div className="gall-img">
                        <img src="/burger-3.png" alt="Burger 3" />
                        <div className="info">
                            <p className="price">$3.95</p>
                            <p className="name">Burger Name</p>
                            <a href="#" className="btn btn-2">
                                Order now!
                            </a>
                        </div>
                    </div>
                    <div className="gall-img">
                        <img src="/hero.png" alt="Burger 3" />
                        <div className="info">
                            <p className="price">$3.85</p>
                            <p className="name">Burger Name</p>
                            <a href="#" className="btn btn-2">
                                Order now!
                            </a>
                        </div>
                    </div>
                    <div className="gall-img">
                        <img src="/burger-5.png" alt="Burger 5" />
                        <div className="info">
                            <p className="price">$4.85</p>
                            <p className="name">Burger Name</p>
                            <a href="#" className="btn btn-2">
                                Order now!
                            </a>
                        </div>
                    </div>
                    <div className="gall-img">
                        <img src="/burger-6.png" alt="Burger 6" />
                        <div className="info">
                            <p className="price">$9.85</p>
                            <p className="name">Burger Name</p>
                            <a href="#" className="btn btn-2">
                                Order now!
                            </a>
                        </div>
                    </div>
                    <div className="gall-img">
                        <img src="/burger-7.png" alt="Burger 7" />
                        <div className="info">
                            <p className="price">$6.85</p>
                            <p className="name">Burger Name</p>
                            <a href="#" className="btn btn-2">
                                Order now!
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Menu;