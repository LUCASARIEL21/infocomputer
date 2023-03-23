import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export const Tabelas = () => {
  return (
    <Row xs={1} md={2} className="g-4"
    style={{
        display: "flex",
        background: "transparent",
        justifyContent: "center", 
        margin: "20px",
        padding: "20px",
        boxShadow: "0 0 5px 5px black"}}>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://t2.tudocdn.net/639252?w=1920" height={200}/>
            <Card.Body style={{display: "flex", flexDirection: "column", alignItems: 'center', justifyContent: "center"}}>
              <Card.Title>Celulares</Card.Title>
              <Card.Text>
                Aqui você verá dicas, informações e atualizações sobre os todos os tipos de celulares, 
                como Iphone, Readmi note, Moto G e entre outros.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://images6.alphacoders.com/648/648552.jpg" height={200}/>
            <Card.Body style={{display: "flex", flexDirection: "column", alignItems: 'center', justifyContent: "center"}}>
              <Card.Title>Informática</Card.Title>
              <Card.Text>
                Apresentaremos você ao mundo da tecnológia, 
                você vai ver informações sobre sistemas operacionais, softwares, notebooks e muito mais. 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://meuxbox.com.br/wp-content/uploads/2021/03/Xbox-PlayStation-Nintendo-Switch-PC.jpg" height={200}/>
            <Card.Body style={{display: "flex", flexDirection: "column", alignItems: 'center', justifyContent: "center"}}>
              <Card.Title>Videogames</Card.Title>
              <Card.Text>
                Esta é a área de jogos, com informações e atualizações sobre consoles e jogos das gerações atuais.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJuoDzAn8318SdfpTqqiVlu1T9z3qs73hazoU_0YcxnFCdzCF6NfMhxORVomKPZoi-bTE&usqp=CAU" height={200}/>
            <Card.Body style={{display: "flex", flexDirection: "column", alignItems: 'center', justifyContent: "center"}}>
              <Card.Title>Outros</Card.Title>
              <Card.Text>
                Informações variadas e curiosidades sobre assuntos diversos.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://wallpaperaccess.com/full/1810217.jpg" height={200}/>
            <Card.Body style={{display: "flex", flexDirection: "column", alignItems: 'center', justifyContent: "center"}}>
              <Card.Title>Streaming</Card.Title>
              <Card.Text>
                Informações e dicas sobre plataformas de streaming, filmes, séries e entre outros.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
  )
}