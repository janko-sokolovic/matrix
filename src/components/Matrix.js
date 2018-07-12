import React from 'react';
import Code from './Code';
import './Matrix.css';
import _ from 'lodash';
import FadeText from './AnimateText';
import messages from '../data/messages.json';

const Message = () => (
  <div id="MESSAGE" className="Message">
    {messages[Math.floor(Math.random() * messages.length)]}
  </div>
);

const CODE_LINES_COUNT = 100;

const Matrix = () => (
  <div className="Matrix">
    {_.times(CODE_LINES_COUNT).map((_, i) => <Code key={i} />)}
    <Message />
  </div>
);

setTimeout(() => {
  FadeText.applyAnimation('MESSAGE');
}, 500);

export default Matrix;
