import { Card,Button } from "react-bootstrap";
import {useNavigate} from "react-router-dom";


function Item({ productos }) {
    
    let navigate = useNavigate();

    const goToDeteails = () => {
        navigate ("productId")
    };

    return (
        <Card  style={{ width: '18rem', marginLeft: '2rem', marginBottom: '2rem', marginTop: '2rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{productos.name}</Card.Title>
                <Card.Text>{productos.price}</Card.Text>
                <Button variant="primary">Comprar</Button>
                <Button onClick={goToDeteails} style={{marginLeft:'2rem'}} variant="primary">ver mas</Button>
                <div id="caja">
                <Card.Text>{productos.descripcion}</Card.Text>
                </div>
            </Card.Body>
        </Card>         
    );
}

export default Item;