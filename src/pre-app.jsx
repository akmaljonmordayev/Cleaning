import React from 'react'
import Navbar from './assets/components/navbar'
import Showcase from './assets/components/showcase'
import Uslogy from './assets/components/usloviya'
import Man from './assets/components/man'
import Komanda from './assets/components/komanda'
import Works from './assets/components/works'
import Inputs from './assets/components/inputs'
import Footer from './assets/components/footer'
function Basic() {
  return (
    <>
        <Navbar/>
        <Showcase/>
        <Uslogy/>
        <Man/>  
        <Komanda/>
        <Works/>
        <Inputs/>
        <Footer/> 
    </>
  )
}

export default Basic