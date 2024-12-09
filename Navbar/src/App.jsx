import Navbar from "./Components/Navbar"
import Navbar2 from "./Components/Navbar2"
import "./index.css"
import Home from "./Page/home"
import Product from "./Page/product"
import Features from "./Page/feautures"
import About from "./Page/about"
function App() {

  return (
 <>
 <div className="home">
   <Navbar2/>
   <Home/>
   <Product/>
   <Features/>
   <About/>
 </div>
 
  
 </>
  )
}

export default App
