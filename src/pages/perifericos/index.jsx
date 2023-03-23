import React from 'react'
import { Bodyperifericos } from '../../components/components_perifericos/bodyperifericos'
import { NavBarperifericos } from '../../components/components_perifericos/navbarperifericos'

export const Perifericos = () => {
  return (
    <div className='perifericos'>
      <NavBarperifericos/>
      <Bodyperifericos/>
    </div>
  )
}