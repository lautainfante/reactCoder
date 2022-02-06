import { Card,Button } from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import Cont from "../ItemCounter";



function Item({ productos }) {
    
    let navigate = useNavigate();

    const goToDeteails = () => {
        navigate (":productId")
    };

    return (
        <Card border="light"  style={{ width: '18rem', marginLeft: '13rem', marginBottom: '2rem', marginTop: '2rem', backgroundColor:'black' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title style={{color:'whitesmoke'}}>{productos.name}</Card.Title>
                <Card.Text style={{color:'whitesmoke'}}>{productos.price}</Card.Text>
                <Card.Text style={{color:'whitesmoke'}}>Stock: {productos.stock}</Card.Text>
                <Button variant="primary">Comprar</Button>
                <Button onClick={goToDeteails} style={{marginLeft:'2rem'}} variant="primary">ver mas</Button>
                <Cont />
                <div id="caja">
                <Card.Text style={{color:'whitesmoke'}}>{productos.descripcion}</Card.Text>
                </div>
            </Card.Body>
        </Card>         
    );
}

export default Item;