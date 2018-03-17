import React, { Component } from "react";
import "./Symbol.css";
import chars from "../chars/chars";

export default class Symbol extends Component {
  constructor(props) {
    super(props);
    this.state = { char: this.getRandomChar() };
  }

  componentWillMount() {
    if (this.props.primary || Math.random() > 0.95) {
      this.makeSymbolDynamic();
    }
  }

  getRandomChar() {
    return chars[Math.floor(Math.random() * chars.length)];
  }

  makeSymbolDynamic() {
    setInterval(() => {
      this.setState({ char: this.getRandomChar() });
    }, 550);
  }

  render() {
    const { primary, opacity } = this.props;
    return (
      <div
        className={"symbol " + (primary ? "primary" : "")}
        style={{ opacity }}
      >
        {this.getRandomChar()}
      </div>
    );
  }
}
