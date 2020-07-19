import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import {auth} from "./firebase"
import { useStateValue } from './StateProvider';


function App() {
    // eslint-disable-next-line no-unused-vars
    const [{ user }, dispatch] = useStateValue();

    // useEffect < Powerful
    // Piece of code which runs based on a given condition
  
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          // the user is logged in
          dispatch({
            type: "SET_USER",
            user: authUser,
          });
        } else {
          // the user is logged out
          dispatch({
            type: "SET_USER",
            user: null,
          });
        }
      });
  
      return () => {
        // Any cleanup operations go in here
        unsubscribe();
      };
    }, [dispatch]);
  
    console.log("USER IS >>", user);
  
  return (
    <Router>    
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header></Header>
            <Checkout></Checkout>
          </Route>
          <Route path="/login">
            <Login>
            </Login>
          </Route>
          {/* {This is the default route - if nothing matches} */}
          <Route path="/">
            <Header></Header>
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
