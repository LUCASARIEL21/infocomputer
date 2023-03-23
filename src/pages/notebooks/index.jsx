import React from 'react'
import { Bodynotebooks } from '../../components/components_notebooks/bodynotebooks'
import { NavBarnotebooks } from '../../components/components_notebooks/navbarnotebooks'

export const Notebooks = () => {
  return (
    <div className='notebooks'>
      <NavBarnotebooks/>
      <Bodynotebooks/>
    </div>
  )
}