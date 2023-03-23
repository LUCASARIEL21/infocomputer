import logo from "../../../assets/logo home.json"
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"
import Lottie from 'react-lottie'

export const NavBarnintendo = () => {
    const navegate = useNavigate()
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: logo,
    }

    return (
        <div className="App">
            <Navbar bg="dark" variant="dark"
                sticky="top" expand="lg"
                collapseOnSelect
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                <Navbar.Brand style={{
                    display: "flex",
                    alignItems: "center"
                }}>
                    <Lottie options={defaultOptions}
                        style={{
                            width: "60px",
                            height: "60px"
                        }} />
                    <h3 style={{ marginLeft: "20px", cursor: "pointer" }} onClick={() => [navegate("/home")]}>InfoComputing</h3>
                </Navbar.Brand>

                <Navbar.Toggle style={{ color: "black" }} />

                <Navbar.Collapse style={{ marginLeft: "10px" }}>
                    <Nav>
                        <NavDropdown title="Informática">
                            <NavDropdown.Item onClick={() => [navegate("/computadores e apps")]}>
                                Computadores
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={() => [navegate("/notebooks")]}>
                                Notebooks
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={() => [navegate("/perifericos")]}>
                                Periféricos
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={() => [navegate("/softwares e apps")]}>
                                Softwares e Apps
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={() => [navegate("/sistemas operacionais")]}>
                                Sistemas Operacionais
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={() => [navegate("/dicas")]}>
                                Dicas
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Videogames">
                            <NavDropdown.Item onClick={() => [navegate("/jogos")]}>
                                Jogos
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={() => [navegate("/playstation")]}>
                                Playstation
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={() => [navegate("/xbox")]}>
                                Xbox
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Streaming">
                            <NavDropdown.Item onClick={() => [navegate("/filmes")]}>
                                Filmes
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={() => [navegate("/series")]}>
                                Séries
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={() => [navegate("/animes")]}>
                                Animes
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Celulares">
                            <NavDropdown.Item onClick={() => [navegate("/android")]}>
                                Android
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={() => [navegate("/ios")]} >
                                IOS
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={() => [navegate("/apple")]}>
                                Apple
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={() => [navegate("/motorola")]}>
                                Motorola
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={() => [navegate("/samsung")]}>
                                Samsung
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={() => [navegate("/xiaomi")]}>
                                Xiaomi
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={() => [navegate("/outros celulares")]}>
                                Outros
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link onClick={() => [navegate("/outros")]}>Outros</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </div>
    )
} 