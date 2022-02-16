import Item from "./Item/Item";
import {useEffect, useState} from "react";
import {getFirestore} from "../../firebase";
import * as React from "react";

function Cards () {
  const [products,setData]= React.useState([]);
  const [isLoading,setIsLoading]= React.useState(false);
  const [error,setError]= React.useState(null);
  
  React.useEffect(() => {
    const db = getFirestore();
    const productsCollection = db.collection("productos");
    
    const getDataFromFirestore = async () => {
      setIsLoading(true);
      try{
        const response = await productsCollection.get();
        if (response.empty) {console.log("No hay producto");
          setData(response.docs.map((doc) => ({...doc.data(), id: doc.id})));
        } catch (err) {
          setError (err);
        }finally{
          setIsLoading(false);
        }
      }
    };
    getDataFromFirestore();

   // const URL = "http://localhost:3001/productos";
   // setIsLoading(true);
   // fetch(URL)
   //  .then((response)=> response.json())
   //  .then((json)=>setProducts(json))
   //  .catch((err)=>setError(err))
   // .finally(()=> setIsLoading(false));
  },  []);

  if (isLoading) {
    return <p>Cargando productos..</p>;
  }else if (error) {
    return <p>Hubo un problema {error.message}</p>
  } else 
    return (
      <div>
          <ul>
            {products.map((products)=>{
              return <Item key={products.id} productos={products}/>
            })};
          </ul>
      </div>
    )
};

export default Cards;