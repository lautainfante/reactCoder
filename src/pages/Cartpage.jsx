import React from "react";
import { useCart } from "../contexts/CartContex";
import Navbar from "../components/Navbar";
import { Button } from "react-bootstrap";
import Footer from "../components/Footer";

const borrar = () =>{
    var producto = Document.getElementByid("conteiner");

    var Dproducto = producto.filter((element,index) => {
        return element - <p></p>
    })
};


function Cartpage(params) {
    const { cart } = useCart();
    return(
        <div>
            <h1>Carrito</h1>
            {cart.map((purchase) =>{
                return (
                    <Navbar />,
                    <div id="conteiner">
                        <p>{purchase.item.name}</p>
                        <p>{purchase.item.description}</p>
                        <p>{purchase.quantity}</p>
                        <Button onClick={ borrar } variant="danger">Borrar</Button>
                    </div>
                );
            })}
            <Footer />
        </div>
    );
};

export default Cartpage;