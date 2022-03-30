import { Component } from "react";
import { withRouter } from "react-router-dom";

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
    console.log(this.state);
    if (this.state.myLoading) return <h2>Loading ...</h2>;
    const { animal, breed, city, state, description, name } = this.state;
    return (
      <div className="details">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${city}, ${state}`}</h2>
        <button>Adopt {name}</button>
        <p>{description}</p>
      </div>
    );
  }
}

export default withRouter(Details);
