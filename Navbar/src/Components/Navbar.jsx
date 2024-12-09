import React from "react";
// import "./Navbar.css"

function Navbar(){
    return (
        <>
            <nav>
                <h2>Logo</h2>
                <ul>
                    <li>Home</li>
                    <a href=""><li>About</li></a>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
                <div>
                    <button>Login</button>
                </div>
            </nav>
        </>
    )
}

export default Navbar