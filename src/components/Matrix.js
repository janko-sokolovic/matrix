import React, { Component } from 'react';
import Code from './Code';
import './Matrix.css';
import _ from 'lodash';

const CODES_COUNT = 150;

export default class Matrix extends Component {
	render() {
		const codes = _.times(CODES_COUNT).map((x, i) => <Code key={i} />);
		return <div className="Matrix">{codes}</div>;
	}
}
