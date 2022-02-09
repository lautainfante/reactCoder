import React from "react";
import { useCart } from "../contexts/CartContex";
import Navbar from "../components/Navbar";
import { Button } from "react-bootstrap";

function Cartpage(params) {
    const { cart } = useCart();
    return(
        <div>
            <h1>Carrito</h1>
            {cart.map((purchase) =>{
                return (
                    <Navbar />,
                    <div>
                        <p>{purchase.item.name}</p>
                        <p>{purchase.item.description}</p>
                        <p>{purchase.quantity}</p>
                        <Button variant="danger">Borrar</Button>
                    </div>
                );
            })}
        </div>
    );
};

export default Cartpage;