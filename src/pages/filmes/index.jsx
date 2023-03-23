import React from 'react'
import { Bodyfilmes } from '../../components/components_filmes/bodyfilmes'
import { NavBarfilmes } from '../../components/components_filmes/navbarfilmes'

export const Filmes = () => {
  return (
    <div>
      <NavBarfilmes />
      <Bodyfilmes />
    </div>
  )
}