import React from 'react';
import PropTypes from 'prop-types';
import Controls from './controls.js';
import Statistik from './statistik.js';
import FeedbacksModule from './feedbackModule.css';

class feedback extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };
  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };
  goodIncrement = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  neutralIncrement = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  badIncrement = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const result = good + neutral + bad;
    return result;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return Math.round((this.state.good * 100) / total);
  };

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const good = this.state.good;
    const neutral = this.state.neutral;
    const bad = this.state.bad;
    const goodIncrement = this.goodIncrement;
    const neutralIncrement = this.neutralIncrement;
    const badIncrement = this.badIncrement;
    return (
      <div>
        <span>Please leave feedback</span>
        <Controls
          goodIncrement={goodIncrement}
          neutralIncrement={neutralIncrement}
          badIncrement={badIncrement}
        />
        {total === 0 ? (
          <p>No feedback given!</p>
        ) : (
          <Statistik
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </div>
    );
  }
}
export default feedback;
