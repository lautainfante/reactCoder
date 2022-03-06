import Navbar from "../components/Navbar";
import React from "react";
import Cards from "../components/Carprodu";
import "../App.css";
import Footer from "../components/Footer";

function Mercadopage() {
    return(
        <body style={{backgroundColor:'yellow'}}>
            <div>
                <Navbar />
                <Cards  />
                <Footer />
            </div>
        </body>
    )
}

export default Mercadopage;