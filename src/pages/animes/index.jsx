import React from 'react'
import { Bodyanimes } from '../../components/components_animes/bodyanimes'
import { NavBaranimes } from '../../components/components_animes/navbaranimes'

export const Animes = () => {
  return (
    <div>
      <NavBaranimes />
      <Bodyanimes />
    </div>
  )
}