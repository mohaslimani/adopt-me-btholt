import { render } from "react-dom";
import { StrictMode } from "react/cjs/react.production.min";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt MEE!</h1>
      <SearchParams />
    </div>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
