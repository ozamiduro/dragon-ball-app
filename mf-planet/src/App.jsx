import React from "react";
import ReactDOM from "react-dom";
import Planet from "./components/Planet";

import "./index.scss";

const App = () => (
  <div className="text-center mt-10">
    <Planet />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
