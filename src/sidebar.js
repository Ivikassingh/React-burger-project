import React from "react";
import { scaleRotate as Menu } from "react-burger-menu";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default props => {
  return (
    // Pass on our props
    <Router>
      <Menu {...props}>
        <a className="menu-item" href="/">
          Home
        </a>

        <a className="menu-item" href="/burgers">
          Burgers
        </a>

        <a className="menu-item" href="/pizzas">
          Pizzas
        </a>

        <a className="menu-item" href="/desserts">
          Desserts
        </a>
      </Menu>
    </Router>
  );
};
