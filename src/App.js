import Cartitem from "./Components/Cartitem";
import Home from "./Components/Home";
import {BrowserRouter , Route,Routes} from "react-router-dom";
import Header from "./Components/Header";
import './App.css';
//import Context from "./Context";



function App() {
  
  return ( 
   // <Context>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cartitems" element={<Cartitem/>}  />
      </Routes>
    </BrowserRouter>
   // </Context> 
    
  );
}

export default App;
