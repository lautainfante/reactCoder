import "./App.css";
import Navbar from './components/Navbar';
import Cont from './components/ItemCounter' ;
import { useEffect, useState} from "react";
import item from './components/item/item'




const PRODUCTS =[
  {id:0, name:"Horno Electrico", descripcion:"descripcion del objeto", price:1500},
  {id:1, name:"Estufa Electrica", descripcion:"descripcion del objeto", price:6000},
  {id:2, name:"Heladera", descripcion:"descripcion del objeto", price:50.000},
];


function App() {
  const [products,setProducts]= useState([]);
  const [isLoading,setIsLoading]= useState(false);
  const [error,setError]= useState(null);
  
  useEffect(()=>{
    const URL = "http://localhost:3001/productos";
    setIsLoading(true);
    fetch(URL)
     .then((response)=> response.json())
     .then((json)=>setProducts(json))
     .catch((err)=>setError(err))
     .finally(()=> setIsLoading(false));
  },[]);

  if (isLoading) {
    return <p>Cargando productos..</p>;
  }else if (error) {
    return <p>Hubo un problema {error.message}</p>
  } else 
    return (
    <div className="App">
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <main>
        <div>
          <ul>
            {products.map((products)=>{
              return <item productos={products}/>
            })}
          </ul>
        </div>
        <Cont />
      </main>
    </div>
  );
};



export default App;
