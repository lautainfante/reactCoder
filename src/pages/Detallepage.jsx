import React from "react";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Item from "../components/Item/Item";
import Footer from "../components/Footer";



const Detallespage = () => {
    const {productId} = useParams;
    const [products, setProduct] = useState();
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() =>{
        const URL = `http://localhost:3001/productos/${productId}`
        fetch(URL)
         .then(res => res.json())
         .then((data)=> setProduct(data))
         .finally(() => setIsLoading(false));
    }, [productId]);

    
    if (isLoading || !products) return <p>Cargando...</p>;
    return (
        <div>
            <Navbar />
            <Item productos={products}/>
            <Footer />
        </div>
    )
        
};

export default Detallespage;