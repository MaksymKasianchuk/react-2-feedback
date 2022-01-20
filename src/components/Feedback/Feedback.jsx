import React, { Component } from 'react';
import styles from './Feedback.module.scss'
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from '../Section';
import Notification from './Notification';

class Feedback extends Component {
    
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    handleIncrementGood = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
        }));
    };
    handleIncrementNeutral = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }));
    };
    handleIncrementBad = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }));
    };
      

    countTotalFeedback = () => {
        const {good, neutral, bad} = this.state;
        let allFeedBacks = good + neutral + bad;
        return allFeedBacks;
    };

    countPositiveFeedbackPercentage = () => {
        const total = this.countTotalFeedback();
        const {good} = this.state;
        let percent = good / total * 100;
        return percent ? Math.round(percent * 100) / 100 : 0;
    };

    render() {
        let total = this.countTotalFeedback();
        let posFeedb = this.countPositiveFeedbackPercentage();
        return (
            <div className={styles.Feedback}>
                <Section title="Leave your feedback">
                    <FeedbackOptions option="Good" onLeaveFeedback={this.handleIncrementGood} className={styles.FeedbackBtn}/>
                    <FeedbackOptions option="Neutral" onLeaveFeedback={this.handleIncrementNeutral} className={styles.FeedbackBtn}/>
                    <FeedbackOptions option="Bad" onLeaveFeedback={this.handleIncrementBad} className={styles.FeedbackBtn}/>
                </Section>
                {total ? 
                    <Section title="Statistics">
                        <Statistics 
                            good={this.state.good} 
                            neutral={this.state.neutral} 
                            bad={this.state.bad} 
                            total={total} 
                            positivePercentage={posFeedb}
                            classObj={
                                {
                                    goodCls: styles.Good,
                                    neutralCls: styles.Neutral,
                                    badCls: styles.Bad,
                                }
                            }
                        />
                    </Section>
                 : 
                    <Notification message="There is no feedback"/>
                }
            </div>
        );
    }
}

export default Feedback;