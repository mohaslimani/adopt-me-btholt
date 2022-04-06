import { Component } from "react";

class Carousel extends Component {
  state = { active: 0 };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };
  handleIndexClick = (event) => {
    this.setState({
      //Operator + returns a value for objects which have implemented method valueOf
      //here convert string to number
      active: +event.target.dataset.index,
    });
    console.log(event);
  };

  render() {
    const { active } = this.state;
    //hada ghi destruction dial l props lli ayjiw mn Details.js
    const { images } = this.props;

    console.log(this.props);
    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              className={index === active ? "activate" : ""}
              alt="animal thumbnail"
              // data-* attributes allow us to store extra information on standard, semantic HTML elements without other hacks such as non-standard attributes, or extra properties on DOM.
              data-index={index}
              onClick={this.handleIndexClick}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
