import {Card, Col, Button} from "react-bootstrap"

const CardNoticia = () => {

    return(
        <Col>
        <Card className="mb-2">
            <Card.Img className="img-fluid" src="" alt=""></Card.Img>
            <Card.Body>
                <Card.Title>Noticia</Card.Title>
                <h6 className="lead fs-6">Fuente:</h6>
                <hr className="my-1"/>
                <Card.Text>Descripcion</Card.Text>
                <Button variant="primary">Ver noticia completa</Button>
            </Card.Body>
        </Card>
        </Col>
    )
}

export default CardNoticia;