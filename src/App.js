import React, { Component } from 'react';
import { Route, Link, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

import Addcloud from "./components/add-cloud.component"
import CloudList from "./components/cloud-list.component";


class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/" className="navbar-brand">
            Cloud Sport
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                List
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3 bg-withe mx-auto">
          <h2>Cloud Sport</h2>
          <Routes>
            <Route path="/"  element={<CloudList />} />
            <Route path="add" element={<Addcloud />} />
          </Routes>
        </div>
      </div>
    );
  }
}
export default App;