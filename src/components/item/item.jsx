import { useState } from "react";
import { Card,Button } from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import { useCart } from "../../contexts/CartContex";
import Cont from "../ItemCounter";



function Item({ productos }) {

    let navigate = useNavigate();

    const goToDeteails = () => {
        navigate (":productId")
    };
    
    const {cart,  addItem } = useCart();
    const [counter , setCounter] = useState(0);

    const handleClick = () =>{
        addItem(productos, counter)
    };

    return (
        <Card border="light"  style={{ width: '18rem', marginLeft: '13rem', marginBottom: '2rem', marginTop: '2rem', backgroundColor:'black' }}>
            <Card.Img style={{width:'17rem', marginLeft:'10px'}} variant="top" src={productos.img} />
            <Card.Body>
                <Card.Title style={{color:'whitesmoke'}}>{productos.name}</Card.Title>
                <Card.Text style={{color:'whitesmoke'}}>{productos.price}</Card.Text>
                <Card.Text style={{color:'whitesmoke'}}>Stock: {productos.stock}</Card.Text>
                <Button variant="primary" onClick={handleClick}>Agregar carrito</Button>
                <Button onClick={goToDeteails} style={{marginLeft:'2rem'}} variant="primary">ver mas</Button>
                <Cont counter={counter} setCounter={setCounter}  />
                <div id="caja">
                <Card.Text style={{color:'whitesmoke'}}>{productos.description}</Card.Text>
                </div>
            </Card.Body>
        </Card>         
    );
}

export default Item;