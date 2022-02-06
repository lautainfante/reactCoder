import Navbar from "../components/Navbar";
import React from "react";
import Cards from "../components/Carprodu";
import "../App.css";

function Mercadopage() {
    return(
        <body style={{backgroundColor:'yellow'}}>
            <div>
                <Navbar />
                <Cards  />
            </div>
        </body>
    )
}

export default Mercadopage;