import React from "react";
import { useCart } from "../contexts/CartContex";

function Cartpage(params) {
    const { cart } = useCart();
    return(
        <div>
            <h1>Carrito</h1>
            {cart.map((purchase) =>{
                return (
                    <div>
                        <p>{purchase.item.name}</p>
                        <p>{purchase.quantity}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Cartpage;