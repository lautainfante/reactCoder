import Navbar from "../components/Navbar";
import React from "react";
import Logo from "../components/Logo";
import "../App.css"

function Homepage() {
    return(
        <body style={{backgroundColor:'black'}}>
            <header>
                <Navbar />
            </header>
            <main className="text-center">
               <Logo  /> 
            </main>
            <div class="container">
                <footer class="py-3 my-4" style={{backgroundColor:'black',}}>
                    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Features</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Pricing</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
                    </ul>
                    <p class="text-center text-muted">© 2021 Company, Inc</p>
                </footer>
            </div>
        </body>
    )
}

export default Homepage;