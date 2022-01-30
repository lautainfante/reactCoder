import Navbar from "../components/Navbar";
import React from "react";
import Logo from "../components/Logo";
import "../App.css"

function Homepage() {
    return(
        <body>
            <header>
                <Navbar />
            </header>
            <main>
               <Logo /> 
            </main>
        </body>
    )
}

export default Homepage;