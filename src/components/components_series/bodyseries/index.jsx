import Card from 'react-bootstrap/Card'

export const Bodyseries = () => {
    return (
        <div className='bodysoftapp'
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
                <Card.Img variant="top" src=""
                    style={{ maxHeight: "1000px", maxWidth: "1000px" }} />
                <Card.Body>
                    <Card.Text>
                        melhor app para assistir filmes e series
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
                <Card.Img variant="top" src=""
                    style={{ maxHeight: "1000px", maxWidth: "1000px" }} />
                <Card.Body>
                    <Card.Text>
                        series mais populares
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
                <Card.Img variant="top" src=""
                    style={{ maxHeight: "1000px", maxWidth: "1000px" }} />
                <Card.Body>
                    <Card.Text>
                        melhores series de 2022
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
                <Card.Img variant="top" src=""
                    style={{ maxHeight: "1000px", maxWidth: "1000px" }} />
                <Card.Body>
                    <Card.Text>
                        melhores plataformas de series
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}