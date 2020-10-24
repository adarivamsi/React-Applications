import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Checkout from "./components/checkout/Checkout";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Header from "./components/shared/header/Header";
import { useStateValue } from "./data-layer/StateProvider";
import { auth } from "./services/firebase";

function App() {
  const [{ user }, dispatch] = useStateValue();

  // useEffectHook
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
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
