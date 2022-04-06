import { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary.js";
import ThemeContext from "./ThemeContext";

class Details extends Component {
  state = { myLoading: true };

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const json = await res.json();
    console.log(json);
    this.setState(Object.assign({ myLoading: false }, json.pets[0]));
  }

  render() {
    console.log("details.state", this.state);
    if (this.state.myLoading) return <h2>Loading ...</h2>;
    const { animal, breed, city, state, description, name, images } =
      this.state;
    return (
      <div className="details">
        <Carousel images={images} />
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${city}, ${state}`}</h2>
        <ThemeContext.Consumer>
          {([th]) => (
            <button style={{ backgroundColor: th }}>Adopt {name}</button>
          )}
        </ThemeContext.Consumer>
        <p>{description}</p>
      </div>
    );
  }
}

const DetailsWithRouter = withRouter(Details);

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <DetailsWithRouter {...props}></DetailsWithRouter>
    </ErrorBoundary>
  );
}
