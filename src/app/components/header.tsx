import React from 'react'
import Link from "next/link"

function Header() {
    return (
        <div>
            <header>
                <div className="logo">Burger</div>
                <div className="navigation">
                    <input type="checkbox" className="toggle" />
                    <div className="hamburger">
                        <div className="icon" />
                    </div>
                    <div className="nav">
                        <div className="background">
                            <div className="center">
                                <ul>
                                    <li>
                                        <Link href="#home">Home</Link>
                                    </li>
                                    <li>
                                        <Link href="#about">About</Link>
                                    </li>
                                    <li>
                                        <Link href="#menu">Menu</Link>
                                    </li>
                                    <li>
                                        <Link href="#expert">Experts</Link>
                                    </li>
                                    <li>
                                        <Link href="#services">Services</Link>
                                    </li>
                                    <li>
                                        <Link href="#contact">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </div>
    )
}

export default Header