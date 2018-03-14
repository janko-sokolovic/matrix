import React, { Component } from 'react';
import Symbol from './Symbol';
import _ from 'lodash';

import './Code.css';

const SYMBOL_HEIGHT = 26; // Empirically :) Depends on Symbol font-size!!
const MAX_CODE_LENGTH = 40;
const MIN_CODE_LENGTH = 10;
/**
 * Code is a stream of symbols
 */
export default class Code extends Component {
	constructor(props, state) {
		super(props);
		this.state = {
			codeLength: 0,
			yPosition: 0,
			xPosition: 0,
			transition: '',
			transform: ''
		};
	}

	componentWillMount() {
		const scaleRatio = _.random(1.0, 1.5);
		const codeLength = _.random(MIN_CODE_LENGTH, MAX_CODE_LENGTH);

		//Hacky solution to get the line above top=0
		const yPosition = (codeLength + 1) * SYMBOL_HEIGHT * scaleRatio;
		const xPosition = _.random(5, window.innerWidth - 20); // avoid edges
		const transition = ` top linear ${_.random(3, 10.5)}s`; //different speed
		const transform = `scale(${scaleRatio})`;

		this.setState({ codeLength, yPosition, xPosition, transition, transform });
	}

	componentDidMount() {
		const startTime = _.random(300, 10000); // each starts in different time

		setTimeout(() => {
			const newHeight = window.innerHeight + this.state.yPosition;
			this.setState({ yPosition: -newHeight }); //must be - b/c of start
		}, startTime);
	}

	render() {
		const code = _.times(this.state.codeLength).map((x, i) => (
			<Symbol key={i} />
		));
		const { xPosition, yPosition, transition, transform } = this.state;
		const styles = {
			left: this.state.xPosition,
			top: -this.state.yPosition,
			transition: this.state.transition,
			transform: this.state.transform
		};

		return (
			<div className="code" style={styles}>
				{code}
				<Symbol primary="true" />
			</div>
		);
	}
}
