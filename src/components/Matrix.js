import React, { Component } from 'react';
import Code from './Code';
import './Matrix.css';
import _ from 'lodash';

export default class Matrix extends Component {
	render() {
		const codes = _.times(150).map((x, i) => <Code key={i} />);
		return <div className="Matrix">{codes}</div>;
	}
}
