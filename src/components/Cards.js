import { Card } from "react-bootstrap";

function Cards () {
    return (
        <Card style={{ width: '18rem', marginLeft: '2rem',marginBottom:'2rem', marginTop:'2rem'}}>
          <Card.Body>
            <Card.Title>Horno</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Carta de Bootstrap</Card.Subtitle>
            <Card.Text> Usando la galeria de Bootstrap.
            </Card.Text>
            <Card.Link href="#">Link de Compra</Card.Link>
            <Card.Link href="#">Otro Link</Card.Link>
          </Card.Body>
        </Card>
    );
}

export default Cards;