import "./App.css";
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Cont from './components/ItemCounter' ;
import Item from "./components/item/item";
import { useEffect } from "react";



const PRODUCTS =[
  {id:0, name:"Horno Electrico", descripcion:"descripcion del objeto", price:1500},
  {id:1, name:"Estufa Electrica", descripcion:"descripcion del objeto", price:6000},
  {id:2, name:"Heladera", descripcion:"descripcion del objeto", price:50.000},
];


function App() {
  useEffect(() =>{
    const getProducts = () =>{
      return new Promise((resolve,reject)=>{
        setTimeout(() => resolve(PRODUCTS),reject(new Error("Se cayo el sistema")),4000);
      });
    };
  });
  return <div className="App">
    <header>
      <nav>
        <Navbar />
      </nav>
    </header>
    <main>
      <Item key={PRODUCTS.id} Product={PRODUCTS[0]} />
      <Item key={PRODUCTS.id} Product={PRODUCTS[1]} />
      <Item key={PRODUCTS.id} Product={PRODUCTS[2]} />
      <Cont />
    </main>
  </div>
  
}

export default App;
