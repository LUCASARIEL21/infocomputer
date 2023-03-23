import Card from 'react-bootstrap/Card'

export const Bodyfilmes = () => {
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
                        melhores filmes da decada
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
                        maiores bilheterias dos cinemas
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
                        melhores filmes do ano
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
                        maiores estudios de cinema
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
                        melhores filmes da marvel
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
                        melhores filmes da DC Comics
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}