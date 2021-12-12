import "./login.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link, useHistory } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("nguyenkiet1250@gmail.com");
  const [password, setPassword] = useState("kietnguyen250");
  let history = useHistory();

  const _login = (email, password) => {
    if (
      email === "" ||
      email === null ||
      password === null ||
      password === ""
    ) {
      toast("Vui lòng nhập đủ!");
      return;
    } else {
      toast("Đăng nhập thành công!");
      // return <Link to="/main" />;
      history.push("/");
    }
  };

  return (
    <div className="container">
      <h1>Energy Mobile</h1>
      <h4>Welcome to Dashboard</h4>
      <div className="FormLoginContainer">
        <h2>LOGIN</h2>

        <div className="inputBlock">
          <input
            className="inputLogin"
            type="text"
            value={email}
            placeholder="Input username"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="inputBlock">
          <input
            className="inputLogin"
            type="password"
            value={password}
            placeholder="••••••••••••"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* <Link to="/main"> */}
        <div onClick={() => _login(email, password)} className="signInBtn">
          <p className="signInTextBtn">SIGN IN</p>
        </div>
        {/* </Link> */}
      </div>
    </div>
  );
}

export default Login;
