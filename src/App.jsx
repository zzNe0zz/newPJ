
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Htmlcss from "./webtinh/htmlcss"
import Todolist from './todo/todolist';
import TodoApp from './todoReduxtoolkit/todoRedux/todoApp';
function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route  element={<Todolist></Todolist>} path="/"></Route>
        </Routes>
        <Routes>
            <Route element={<TodoApp></TodoApp>} path="redux"> </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App;
