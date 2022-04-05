import { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false, myRedirect: false };
  static getDrivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("i caught :", error, info);
  }
  componentDidUpdate() {
    if (this.state.hasError)
      setTimeout(() => this.setState({ myRedirect: true }), 5000);
  }
  render() {
    if (this.state.myRedirect) return <Redirect to="/" />;
    else if (this.state.hasError) {
      return (
        <h2>
          There was an error with this listing. <Link to="/">Click here</Link>{" "}
          to back to the home page or wait five seconds.
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
