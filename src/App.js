
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import loadable from '@loadable/component';
/*
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
*/
import { addUser } from "./redux/actions/loginActions";
import { connect } from "react-redux";
/*
import DeliveryAddress from "./Components/DeliveryAddress/DeliveryAddress";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
*/

const AboutUs = loadable(() => import('./Components/AboutUS/AboutUs'));
const Cart = loadable(() => import('./Components/Cart/Cart'));
const ContactUs = loadable(() => import('./Components/ContactUs/ContactUs'));
const FoodMenu = loadable(() => import('./Components/FoodMenu/FoodMenu'));
const Footer = loadable(() => import('./Components/Footer/Footer'));
const Header = loadable(() => import('./Components/Header/Header'));
const Jumbotron = loadable(() => import('./Components/Jumbotron/Jumbotron'));
const Login = loadable(() => import('./Components/Login/Login'));
const Map = loadable(() => import('./Components/Map/Map'));
const NavigationBar = loadable(() => import('./Components/NavigationBar/NavigationBar'));
const Subscribe = loadable(() => import('./Components/Subscribe/Subscribe'));
const DeliveryAddress = loadable(() => import('./Components/DeliveryAddress/DeliveryAddress'));
const PrivateRoute = loadable(() => import('./Components/PrivateRoute/PrivateRoute'));
const Reservation = loadable(() => import('./Components/Reservation/Reservation'));

function App(props) {

  return (
    <div className="App">
      <Router>

        <NavigationBar></NavigationBar>

        <Switch>
          <Route exact path="/cart">
            <Cart></Cart>
          </Route>
          <PrivateRoute exact path="/deliveryAddress">
            <DeliveryAddress></DeliveryAddress>
          </PrivateRoute>

          <Route exact path="/about">
            <Header></Header>
            <AboutUs></AboutUs>
            <Reservation></Reservation>
            <Subscribe></Subscribe>
            <Footer></Footer>
          </Route>

          <Route exact path="/reservation">
            <Header></Header>
            <Reservation></Reservation>
            <Subscribe></Subscribe>
            <Footer></Footer>
          </Route>

          <Route exact path="/contact">
            <Header></Header>
            <ContactUs></ContactUs>
            <Map></Map>
            <Subscribe></Subscribe>
            <Footer></Footer>
          </Route>

          <Route exact path="/login">
            <Login></Login>
            <Subscribe></Subscribe>
            <Footer></Footer>

            {/* {props && props.loginReducers && props.loginReducers.user && props.loginReducers.user.uid ? <Redirect to="/emailverification" /> : ''} */}

          </Route>

          {/* <Route exact path="/emailverification">
            <Emailverification user={props.loginReducers.user}></Emailverification>
            <Footer></Footer>
          </Route> */}

          <Route path="/">
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

const mapStateToProps = state => {
  return {
    loginReducers: state.loginReducers,
  }
}

const mapDispatchToProps = {
  addUser: addUser,

}
export default connect(mapStateToProps, mapDispatchToProps)(App);

