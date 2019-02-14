import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { Provider } from "react-redux";

import "./App.css";
import TodoList from "../TodoList";

import store from "../store";
import Mood from "../Mood";

const headerTitle = "Todoifier";

const headerDisplay = title => (
  <Navbar color="dark" dark expand="md">
    <NavbarBrand href="/">{title}</NavbarBrand>
  </Navbar>
);

const App = () => (
  <Provider store={store}>
    <div className="App">
      {headerDisplay(headerTitle)}
      <br />
      <Mood />
      <br />
      <TodoList />
    </div>
  </Provider>
);

export default App;
