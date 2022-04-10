import React from "react";
import 'App.css';

import thumb from "./assets/images/thumb1.jpg";

const App = () => {
  return (
    <div className="container">
      <h1>Hello React!!</h1>

      <img src={thumb} alt="" />
    </div>
  );
};

export default App;
