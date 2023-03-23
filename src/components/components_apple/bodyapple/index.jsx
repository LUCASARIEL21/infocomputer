import Card from 'react-bootstrap/Card'

export const Bodyapple = () => {
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
                        o que é a apple
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
                        melhores produtos da apple
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
                        steve jobs
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
                        smatwatch
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
                        apple store
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}