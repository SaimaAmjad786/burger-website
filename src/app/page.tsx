import React from 'react'
import About from './components/about'
import Menu from './components/menu'
import Home from './components/home'
import Card from './components/card'
import Reviews from './components/reviews'
import Contact from './components/contact'

function page() {
  return (
    <div>
      <Home/>
      <About/>
      <Menu/>
      <Card/>
      <Reviews/>
      <Contact/>
    </div>
  )
}
export default page