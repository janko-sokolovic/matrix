import React, { Component } from 'react';
import Symbol from './Symbol';
import _ from 'lodash';

import './Code.css';

const SYMBOL_HEIGHT = 26; // Empirically :) Depends on Symbol font-size!!
const SYMBOL_WIDTH = 18;
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
		// Some lines are zoomed-in, some zoomed-out
		const scaleRatio = _.random(0.8, 1.4);

		//Min code height is height of screen - no good reason but - why not
		const minCodeHeight = _.round(window.innerHeight / SYMBOL_HEIGHT);
		const codeLength = _.random(minCodeHeight, minCodeHeight * 2);

		//Hacky solution to get the line above top=0
		const yPosition = (codeLength + 1) * SYMBOL_HEIGHT * scaleRatio;

		// we don't want to have partially overlaping lines - make columns
		const stepCount = _.round((window.innerWidth - 20) / SYMBOL_WIDTH);
		const xPosition = _.random(0, stepCount) * SYMBOL_WIDTH;

		// we divide by scale ratio because if it is small it is probably far => thus slower :)
		const transition = ` top linear ${_.random(5, 10) / scaleRatio}s`; //different speed
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
			<Symbol key={i} opacity={i <= 4 ? i / 4 : 1} />
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
