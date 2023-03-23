import Card from 'react-bootstrap/Card'

export const Bodycomp = () => {
    return (
        <div className='bodycomp'
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: 'center',
                justifyContent: "center",
                padding: "20px"
            }}>
            <Card style={{
                display: "flex",
                flexDirection: "column",
                alignItems: 'center',
                justifyContent: "center"
            }}>
                <Card.Img variant="top" src="https://cdn-62cb22a2c1ac1835ecef9f37.closte.com/wp-content/uploads/2020/11/hardware-25.jpg"
                    style={{ maxHeight: "1000px", maxWidth: "1000px" }} />
                <Card.Body>
                    <Card.Text>
                        melhor site para comprar PC
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
            <Card style={{
                display: "flex",
                flexDirection: "column",
                alignItems: 'center',
                justifyContent: "center"
            }}>
                <Card.Img variant="top" src="https://www.videogameschronicle.com/files/2019/03/pc.jpg"
                    style={{ maxHeight: "1000px", maxWidth: "1000px" }} />
                <Card.Body>
                    <Card.Text>
                        definição de um computador
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
            <Card style={{
                display: "flex",
                flexDirection: "column",
                alignItems: 'center',
                justifyContent: "center"
            }}>
                <Card.Img variant="top" src="https://www.teahub.io/photos/full/29-298437_apple-imac-uhd-4k-wallpaper-imac-2017-wallpaper.jpg"
                    style={{ maxHeight: "1000px", maxWidth: "1000px" }} />
                <Card.Body>
                    <Card.Text>
                        informações sobre o imac
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
            <Card style={{
                display: "flex",
                flexDirection: "column",
                alignItems: 'center',
                justifyContent: "center"
            }}>
                <Card.Img variant="top" src="https://www.promobit.com.br/blog/wp-content/uploads/2019/07/16173006/pc-gamer-como-montar.jpg"
                    style={{ maxHeight: "1000px", maxWidth: "1000px" }} />
                <Card.Body>
                    <Card.Text>
                        como montar um PC do zero
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
            <Card style={{
                display: "flex",
                flexDirection: "column",
                alignItems: 'center',
                justifyContent: "center"
            }}>
                <Card.Img variant="top" src="https://img.olhardigital.com.br/wp-content/uploads/2021/12/montar-pc-gamer-shutterstock_1430140055-1920x1080.jpg"
                    style={{ maxHeight: "1000px", maxWidth: "1000px" }} />
                <Card.Body>
                    <Card.Text>
                        melhores acessorios para seu pc
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
            <Card style={{
                display: "flex",
                flexDirection: "column",
                alignItems: 'center',
                justifyContent: "center"
            }}>
                <Card.Img variant="top" src="https://thumbs.web.sapo.io/?W=1920&H=0&crop=center&delay_optim=1&epic=OTY5BLKnibH+GCT8mQQHLzKzqosJRMmWmeVxo/Z+GnCecStcbK3NfOk4XACh60FOtEgA1LDGa8WnOzWmnalpSUJzXh+KKzlDFsFXadg2x4l6zCM="
                    style={{ maxHeight: "1000px", maxWidth: "1000px" }} />
                <Card.Body>
                    <Card.Text>
                        placas de video
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}