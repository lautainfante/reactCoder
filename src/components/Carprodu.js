import Item from "./Item/Item";
import { useEffect } from "react";
import {getFirestore} from "../Firebase";
import * as React from "react";

function Cards () {
  const [products,setData]= React.useState([]);
  const [isLoading,setIsLoading]= React.useState(false);
  const [error,setError]= React.useState(null);
  
  useEffect(() => {
    const db = getFirestore();
    const productsCollection = db.collection("productos");
    console.log(productsCollection);
    const getDataFromFirestore = async () => {
      setIsLoading(true);
      try {
        const response = await productsCollection.get();
        if (response.empty) {
          console.log("No hay producto");
          setData(response.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    getDataFromFirestore();
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