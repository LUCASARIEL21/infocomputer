import Card from 'react-bootstrap/Card'

export const Bodyoutros = () => {
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
                        alexa
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
                        melhores TV's
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
                        actions figures baratos
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
                        melhores itens na shoope
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}