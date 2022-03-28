const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

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
