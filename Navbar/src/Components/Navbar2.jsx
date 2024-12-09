import React from "react";
import "./Navbar2.css"

function Navbar2 () {
    return(
        <>
      
        <nav className="navbar2">
            <img src="" alt="" className="logo"/>

                <h2>Eduford</h2>
                <ul>
                    <a href="#home"><li>Home</li></a>
                    <a href="#product"><li>product</li></a>
                    <a href="#features"><li>features</li></a>
                    <a href="#about"><li>about</li></a>
                </ul>
                <div className="search-box">
                   <input type="text" placeholder="search"/>
                   <img src="" alt=""/>
                   </div> 
            
                <img src="" alt="" className="toogle-icon"/>                  
                
            </nav>

        </>
    )
}

export default Navbar2
