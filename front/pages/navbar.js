import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <a href="http://localhost:1000/" className="navbar-brand">Covid_19 Tracker</a>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <a href="http://localhost:1000/" className="nav-link">Home</a>
          </li>
          <li className="navbar-item">
          <a href="http://localhost:1000/Map" className="nav-link">Map</a>
          </li>
          <li className="navbar-item">
          <a href="http://localhost:1000/statistics" className="nav-link">Statistics</a>
          </li>
          <li className="navbar-item">
          <a href="/merci" className="nav-link">Merci</a>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}