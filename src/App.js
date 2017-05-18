import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import '../public/styles.css';
import Home from './components/home'

const RouteHub = () => (
  <Router>
    <div className="wrapper">

      <ul className="mini-nav">
        <li><a className="glyphicon glyphicon-search" href="#"></a></li>
        <li><a className="min-down" href="#">Downloads</a></li>
        <li><a href="#">Support</a></li>
        <li>
          <a className="si" href="#">Sign In</a>
          <a>/</a>
          <a className="min-reg" href="#">Register</a>
        </li>
        <li><a className="min-con" href="#">Contact Us</a></li>
      </ul>

      <Navbar className="navI">
        <Nav className="main-nav">
          <NavItem className="Logo"></NavItem>
          <NavItem className="mn" href="/">Home</NavItem>
          <NavItem className="mn" href="/learn">Learn</NavItem>
          <NavItem className="mn" href="/build">Build</NavItem>
          <NavItem className="mn" href="/connect">Connnect</NavItem>
        </Nav>
      </Navbar>

      <Route exact path="/" component={Home}/>
      <Route/>
      <Route/>
      <Route/>

    </div>
  </Router>
)

export default RouteHub;
