
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AboutUs from './Components/AboutUS/AboutUs';
import Cart from "./Components/Cart/Cart";

import FoodMenu from './Components/FoodMenu/FoodMenu';

import Jumbotron from './Components/Jumbotron/Jumbotron';
import NavigationBar from './Components/NavigationBar/NavigationBar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar></NavigationBar>


        <Switch>
          <Route path="/cart">
            <Cart></Cart>
          </Route>
          <Route path="/about">
            <AboutUs></AboutUs>
          </Route>


          <Route exact path="/">
            <Jumbotron></Jumbotron>
            <FoodMenu></FoodMenu>
            <AboutUs></AboutUs>
          </Route>



        </Switch>
      </Router>






    </div>
  );
}

export default App;
