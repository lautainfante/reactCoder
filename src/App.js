import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Mercadopage from "./pages/Mercadopage";
import Detallespage from "./pages/Detallepage";
import { CartProvider } from "./contexts/CartContex";
import Cartpage from "./pages/Cartpage";



function App() {
   return (
    <CartProvider>
      <BrowserRouter>
       <Routes>
         <Route path="/">
           <Route index element={<Homepage />} />
           <Route path="/Mercado">
             <Route index element={<Mercadopage />} />
             <Route path=":productId" element={<Detallespage />} />
           </Route>
           <Route path="/Carrito" element={<Cartpage />}></Route>
         </Route>
       </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};



export default App;
