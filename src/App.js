import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Link, Routes } from "react-router-dom";
import './App.css'
import Addcloud from "./components/add-cloud.component"
import cloudList from "./components/cloud-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/tutorials" className="navbar-brand">
            bezKoder
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <h2>React Firestore CRUD</h2>
          <Routes>
            <Route path="/"  Element={<cloudList />} />
            <Route path="add" Element={<Addcloud />} />
          </Routes>
        </div>
      </div>
    );
  }
}
export default App;
