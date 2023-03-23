import { Fragment } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Android } from "../pages/android"
import { Animes } from "../pages/animes"
import { Apple } from "../pages/apple"
import { Celulares } from "../pages/celulares"
import { Computadores } from "../pages/computadores"
import { Dicas } from "../pages/dicas"
import { Filmes } from "../pages/filmes"
import {Home} from "../pages/home"
import { Informatica } from "../pages/informatica"
import { Ios } from "../pages/ios"
import { Jogos } from "../pages/jogos"
import { Motorola } from "../pages/motorola"
import { Nintendo } from "../pages/nintendo"
import { Notebooks } from "../pages/notebooks"
import { Outros } from "../pages/outros"
import { Outroscelulares } from "../pages/outros_celulares"
import { Perifericos } from "../pages/perifericos"
import { Playstation } from "../pages/ps"
import { Samsung } from "../pages/samsung"
import { Series } from "../pages/series"
import { So } from "../pages/so"
import { SoftApp } from "../pages/softwares"
import { Streaming } from "../pages/streaming"
import { Videogames } from "../pages/videogames"
import { Xbox } from "../pages/xbox"
import { Xiaomi } from "../pages/xiaomi"

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/android" element={<Android/>} />
          <Route exact path="/animes" element={<Animes/>} />
          <Route exact path="/apple" element={<Apple/>} />
          <Route exact path="/celulares" element={<Celulares/>} />
          <Route exact path="/computadores" element={<Computadores/>} />
          <Route exact path="/dicas" element={<Dicas/>} />
          <Route exact path="/filmes" element={<Filmes/>} />
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/computadores" element={<Informatica/>} />
          <Route exact path="/ios" element={<Ios/>} />
          <Route exact path="/jogos" element={<Jogos/>} />
          <Route exact path="/motorola" element={<Motorola/>} />
          <Route exact path="/nintendo" element={<Nintendo/>} />
          <Route exact path="/notebooks" element={<Notebooks/>} />
          <Route exact path="/outros" element={<Outros/>} />
          <Route exact path="/outros celulares" element={<Outroscelulares/>} />
          <Route exact path="/perifericos" element={<Perifericos/>} />
          <Route exact path="/playstation" element={<Playstation/>} />
          <Route exact path="/samsung" element={<Samsung/>} />
          <Route exact path="/series" element={<Series/>} />
          <Route exact path="/sistemas operacionais" element={<So/>} />
          <Route exact path="/softwares e apps" element={<SoftApp/>} />
          <Route exact path="/streaming" element={<Streaming/>} />
          <Route exact path="/videogames" element={<Videogames/>} />
          <Route exact path="/xbox" element={<Xbox/>} />
          <Route exact path="/xiaomi" element={<Xiaomi/>} />
          <Route path="*" element={<Home/>} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  )
}