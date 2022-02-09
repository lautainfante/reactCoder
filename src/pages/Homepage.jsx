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
               <Logo className="position-absolute top-50 start-50 translate-middle" /> 
            </main>
        </body>
    )
}

export default Homepage;