import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!!"),
    React.createElement(Pet, { name: "travis", animal: "Dog", breed: "pit" }),
    React.createElement(Pet, {
      name: "straw",
      animal: "Cat",
      breed: "white eye",
    }),
    React.createElement(Pet, { name: "handis", animal: "Bird", breed: "Mix" }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
