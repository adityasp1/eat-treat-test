import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import HeadCards from "./components/HeadCards"
import Food from "./components/Food"
import Category from "./components/Category"
import Footer from "./components/Footer"


function App() {
   return (
    <div>
      <Navbar />
      <Hero />
      <HeadCards />
      <Food />
      <Category />
      <Footer />
    </div>
  )
}

export default App
