import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({good = 0, neutral = 0, bad = 0, total = 0, positivePercentage = 0, classObj}) => {
    const {goodCls, neutralCls, badCls} = classObj;
    return(
        <ul>
            <li>Good: <span className={goodCls}>{good}</span></li>
            <li>Neutral: <span className={neutralCls}>{neutral}</span></li>
            <li>Bad: <span className={badCls}>{bad}</span></li>
            <li>Total: {total}</li>
            <li>Positive feedback: {positivePercentage}%</li>
        </ul>
    );
}

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
    classArr: PropTypes.object,
};

export default Statistics;