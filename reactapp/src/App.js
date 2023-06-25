import './App.css';
import Home from './pages/home/Home';
import Login from './components/login_comp/Login.js';
import Register from './components/login_comp/Register.js';
import Book from './components/book/Book.js';
import IndividualEvent from './pages/events/Event';
import createEvent from "../src/components/createEvent/createEvent"
import { BrowserRouter as  Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <Router>

     
        <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exach path ="/list" component={Book}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/event" component={createEvent}></Route>
        <Route exact path="/event/:id" component={IndividualEvent}></Route>
        </Switch>
      
    </Router>  
  );
}

export default App;
