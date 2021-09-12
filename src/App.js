import './App.css';
import Nav from "./Nav";
import AddTodoPage from "./AddTodoPage";
import DoneTodoPage from "./DoneTodoPage";
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>

        <Switch>
          <Route path= "/runningTodo" component={AddTodoPage}/ >
          <Route path ="/completedTodo" component={DoneTodoPage}/ > 
        </Switch>
        
      
      </div>
    </Router>
  );
}

export default App;
