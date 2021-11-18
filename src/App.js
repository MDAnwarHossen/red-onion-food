
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
import Emailverification from "./Components/Emailverification/Emailverification";
import { addUser } from "./redux/actions/loginActions";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import DeliveryAddress from "./Components/DeliveryAddress/DeliveryAddress";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";


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

