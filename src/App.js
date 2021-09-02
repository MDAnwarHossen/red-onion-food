
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AboutUs from './Components/AboutUS/AboutUs';
import Cart from "./Components/Cart/Cart";
import ContactUs from "./Components/ContactUs/ContactUs";
import FoodMenu from './Components/FoodMenu/FoodMenu';
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Jumbotron from './Components/Jumbotron/Jumbotron';
import Login from "./Components/Login/Login";
import Map from "./Components/Map/Map";
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Reservation from './Components/Reservation/Reservation';
import Subscribe from "./Components/Subscribe/Subscribe";


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
            <Header></Header>
            <AboutUs></AboutUs>
            <Reservation></Reservation>
            <Subscribe></Subscribe>
            <Footer></Footer>
          </Route>

          <Route path="/reservation">
            <Header></Header>
            <Reservation></Reservation>
            <Subscribe></Subscribe>
            <Footer></Footer>
          </Route>

          <Route path="/contact">
            <Header></Header>
            <ContactUs></ContactUs>
            <Map></Map>
            <Subscribe></Subscribe>
            <Footer></Footer>
          </Route>

          <Route path="/login">
            <Login></Login>
            <Subscribe></Subscribe>
            <Footer></Footer>
          </Route>

          <Route exact path="/">
            <Jumbotron></Jumbotron>
            <AboutUs></AboutUs>
            <FoodMenu></FoodMenu>
            <Reservation></Reservation>
            <Subscribe></Subscribe>
            <Footer></Footer>
          </Route>

        </Switch>
      </Router>






    </div>
  );
}

export default App;
