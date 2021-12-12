import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import AppStack from "./AppStack";

function AppContainer() {
  return (
    <>
      <ToastContainer />
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <AppStack />
        </Switch>
      </div>
    </>
  );
}

export default AppContainer;
