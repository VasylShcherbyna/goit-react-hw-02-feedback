import React from 'react';
import PropTypes from 'prop-types';

const Statistik = ({ good, neutral, bad, total, positivePercentage }) => (
  <div class='statistik'>
    <span class='good'>Good: {good}</span>
    <span class='neutral'>Neutral: {neutral}</span>
    <span class="bad">Bad: {bad}</span>
    <span class='total'>Total: {total}</span>
    <span class='positive'>PositiveFeedback: {positivePercentage}%</span>
  </div>
);
Statistik.prototype = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
export default Statistik;
