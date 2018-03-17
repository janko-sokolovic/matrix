import React, { Component } from "react";
import Code from "./Code";
import "./Matrix.css";
import _ from "lodash";

const CODE_LINES_COUNT = 1;

export default class Matrix extends Component {
  render() {
    const codes = _.times(CODE_LINES_COUNT).map((x, i) => <Code key={i} />);
    return <div className="Matrix">{codes}</div>;
  }
}
