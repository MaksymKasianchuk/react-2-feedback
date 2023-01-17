import React, { Component } from 'react';
import { FeedbackWrapper } from './Feedback.styled';
import Button from './Button';
import Statistics from './Statistics';
import Notification from './Notification'
import Section from 'components/Section';

const initState = {
    good: 0,
    neutral: 0,
    bad: 0
};

class Feedback extends Component {

    state = {
        ...initState
    };

    handleFeedback = (option) => {
        switch (option) {
            case 'good':
                this.setState( prevState => ({ good: prevState.good + 1 }) );
                break;
            case 'neutral':
                this.setState( prevState => ({ neutral: prevState.neutral + 1 }) );
                break;
            case 'bad':
                this.setState( prevState => ({ bad: prevState.bad + 1 }) );
                break;
            default:
                console.log('wrong option');
                break;
        };
    };

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        const totalFeedbacks = good + neutral + bad;
        return totalFeedbacks;
    };

    countPositiveFeedbackPercentage = (good, totalFeedbacks) => {
        return totalFeedbacks !== 0 ? Math.round((good * 100) / totalFeedbacks) : 0;
    };

    render() {
        const { good, neutral, bad } = this.state;
        const totalFeedbacks = this.countTotalFeedback();
        const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage(good, totalFeedbacks);
       
        return (
            <FeedbackWrapper>
                <Section title="Please leave feedback">
                    <Button onClickHendler={() => this.handleFeedback('good')} option="Good"/>
                    <Button onClickHendler={() => this.handleFeedback('neutral')} option="Neutral"/>
                    <Button onClickHendler={() => this.handleFeedback('bad')} option="Bad"/>
                </Section>

                {totalFeedbacks !== 0 ? 
                    (<Statistics 
                        good={good} 
                        neutral={neutral} 
                        bad={bad} 
                        total={totalFeedbacks} 
                        positivePercentage={positiveFeedbackPercentage}
                    />) : (
                    <Notification 
                        message="No feedbacks!"
                    />)
                }
            </FeedbackWrapper>
        )
    };
};

export default Feedback;