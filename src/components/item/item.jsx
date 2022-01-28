import { Card,Button } from "react-bootstrap";

function Item({ productos }) {
    return (
        <Card style={{ width: '18rem', marginLeft: '2rem', marginBottom: '2rem', marginTop: '2rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{productos.name}</Card.Title>
                <Card.Text>{productos.descripcion}</Card.Text>
                <Card.Text>{productos.price}</Card.Text>
                <Button variant="primary">Comprar</Button>
            </Card.Body>
        </Card>
    );
}

export default Item;