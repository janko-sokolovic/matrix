import React, { Component } from "react";
import "./Symbol.css";
import chars from "../chars/chars";

export default class Symbol extends Component {
  constructor(props) {
    super(props);
    this.state = { char: this.getRandomChar() };
  }

  componentWillMount() {
    if (this.props.primary) {
      this.makeSymbolDynamic();
    }
  }

  getRandomChar() {
    return chars[Math.floor(Math.random() * chars.length)];
  }

  makeSymbolDynamic() {
    setInterval(() => {
      this.setState({ char: this.getRandomChar() });
    }, 500);
  }

  render() {
    const randomChar = this.getRandomChar();
    const clazz = this.props.primary ? "primary symbol" : "symbol";
    const styles = {
      opacity: this.props.opacity
    };
    return (
      <div className={clazz} style={styles}>
        {randomChar}
      </div>
    );
  }
}
