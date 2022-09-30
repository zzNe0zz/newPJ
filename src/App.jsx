
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Login from "../src/compunent/Login"
import Sigup from "../src/compunent/Sigup"
import Home from './compunent/Home';
function App() {
  return(
  <BrowserRouter>
      <Routes>
      <Route path='/' element= {<Login></Login>}>  </Route>
      <Route path='/Sigup'  element = {<Sigup></Sigup>}>  </Route>
      <Route path='/App' element = {<Home></Home>}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
