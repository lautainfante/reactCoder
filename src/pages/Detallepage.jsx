import React from "react";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { Params, useParams } from "react-router-dom";
import { useState } from "react";



const Detallespage = () => {
    const { productId } = useParams;
    const [productos, setProduct] = useState();

    useEffect(() =>{
        const URL = 'http://localhost:3001/productos/${productId}'
        fetch(URL)
         .then(res => res.json())
         .then((data)=> setProduct(data));
    }, [productId]);


    
    if (productos) {
        return( 
            <div>
                <Navbar />
                <h1>{productos.name}</h1>
                <p>{productos.price}</p>
            </div>
        )  
    }
    return null;
};

export default Detallespage;