import React, { Component } from 'react';
import './Symbol.css';
import chars from '../chars/chars';
// import _ from 'lodash';

export default class Symbol extends Component {
	constructor(props) {
		super(props);
		this.state = { char: this.getRandomChar() };
	}
	componentWillMount() {
		if (Math.random() >= 0.9) {
			setInterval(() => {
				this.setState({ char: this.getRandomChar() });
			}, 200);
		}
	}

	getRandomChar() {
		return chars[Math.floor(Math.random() * chars.length)];
	}

	render() {
		const randomChar = chars[Math.floor(Math.random() * chars.length)];
		const clazz = this.props.primary ? 'primary symbol' : 'symbol';
		return <div className={clazz}> {randomChar} </div>;
	}
}
