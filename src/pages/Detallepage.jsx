import { Card } from "react-bootstrap";
import React from "react";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Detallespage = () => {
    const {productId} = useParams();
    const [productos, setProduct] = useState();

    useEffect(()=>{
        const URL = 'http://http://localhost:3000/Mercado/${productId}'
        fetch(URL)
         .then((res)=> res.json())
         .then((data) => setProduct(data));
    },   []);

    if(productos){
        return(
            <Navbar />,
            <div>
                <Card style={{ width: '18rem', marginLeft: '2rem', marginBottom: '2rem', marginTop: '2rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{productos.name}</Card.Title>
                        <Card.Text>{productos.price}</Card.Text>
                        <Card.Text>{productos.descripcion}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Detallespage;