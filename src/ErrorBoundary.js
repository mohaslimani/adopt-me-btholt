import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
    state = {hasError: false};
    static getDrivedStateFromError(){
        return { hasError: true }
    }
    componentDidCatch(error, info){
        console.error('i caught :', error, info);
    }
    render(){
        if (this.state.hasError){
            return (
                <h2>
                There was an error with this listing. <Link to="/">Click here</Link>{" "}
                to back to the home page or wait five seconds.
              </h2>
            );
        }
        return (this.props.children);
    }
}

export default ErrorBoundary;