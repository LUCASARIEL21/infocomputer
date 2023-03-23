import { NavBar } from "../../components/components_home/navbar"
import { Carrosel } from "../../components/components_home/carrosel"
import { Tabelas } from "../../components/components_home/tabelas"
import { Temas } from "../../components/components_home/temas"
import { Footer } from "../../components/components_home/footer"

export const Home = () => {
  return (
    <div>
      <NavBar/>
      <Carrosel/>
      <Tabelas/>
      <Temas/>
      <Footer/>
    </div>
  )
}