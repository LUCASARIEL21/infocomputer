import React from 'react'
import { Bodycomp } from '../../components/components_computadores/bodycomp'
import { NavBarcomp } from '../../components/components_computadores/navbarcomp'
import { Footer } from "../../components/components_home/footer"

export const Computadores = () => {
  return (
    <div className='computadores'>
      <NavBarcomp/>
      <Bodycomp/>
      <Footer/>
    </div>
  )
}