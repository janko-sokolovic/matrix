import React, { Component } from 'react';
import './Symbol.css';
import chars from '../chars/chars';

export default class Symbol extends Component {
	constructor(props) {
		super(props);
		this.state = { char: this.getRandomChar() };
	}
	componentWillMount() {
		if (Math.random() >= 0.9 || this.props.primary) {
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
