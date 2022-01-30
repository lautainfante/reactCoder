import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Mercadopage from "./pages/Mercadopage";
import Cards from "./components/Carprodu";



function App() {
   return (
      <BrowserRouter>
       <Routes>
         <Route path="/">
           <Route index element={<Homepage />} />
           <Route path="/Mercado" element={<Mercadopage />} />
         </Route>
       </Routes>
      </BrowserRouter>
  );
};



export default App;
