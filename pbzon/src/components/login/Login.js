import { auth } from "../../services/firebase";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault(); // Prevents refresh
    // do the login logic
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // Logged in successfully => Redirect
        history.push("/");
      })
      .catch((event) => alert(event.message));
  };

  const register = (event) => {
    event.preventDefault(); // Prevents refresh
    // do the register logic

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // Registered in Successfully => Redirect
        history.push("/");
      })
      .catch((event) => alert(event.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="http://2.bp.blogspot.com/-1LnyWj6XB84/Ww7_0Ir51mI/AAAAAAAAAHQ/vc-hk5UcDR09cdfQuoj07k6t_BfT_8HXwCK4BGAYYCw/s1600/Passionate%2BBurger%2BBlog%2BLogo.jpg"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <button onClick={login} type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the PBZon Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>

        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
