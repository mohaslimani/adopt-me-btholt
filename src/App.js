import { render } from 'react-dom'
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt MEE!</h1>
      <Pet name="ww" animal="dog" breed="havan"/>
      <Pet name="zz" animal="cat" breed="cocktail"/>
      <Pet name="aa" animal="Shark" breed="Mix"/>
    </div>
  )
};

render(<App />, document.getElementById("root"));
