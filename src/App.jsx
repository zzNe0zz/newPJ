
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Htmlcss from "./webtinh/htmlcss"
import Todolist from './todo/todolist';
function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route  element={<Todolist></Todolist>} path="/"></Route>
        </Routes>
        
    </BrowserRouter>
  )
}

export default App;
