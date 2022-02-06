import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Mercadopage from "./pages/Mercadopage";
import Detallespage from "./pages/Detallepage";



function App() {
   return (
      <BrowserRouter>
       <Routes>
         <Route path="/">
           <Route index element={<Homepage />} />
           <Route path="/Mercado">
             <Route index element={<Mercadopage />} />
             <Route path=':productId' element={<Detallespage />} />
           </Route>
         </Route>
       </Routes>
      </BrowserRouter>
  );
};



export default App;
