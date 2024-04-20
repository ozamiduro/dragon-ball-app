import React from "react";

export class Error extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {}

  render() {
    console.log(this.state);
    if (this.state.hasError) {
      return (
        <h2>
          Ocurrio un error en el Micro-Frontend, favor de validarlo.{" "}
          {this.state.error.message}
        </h2>
      );
    }

    return this.props.children;
  }
}
