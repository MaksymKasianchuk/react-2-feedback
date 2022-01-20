import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({option, onLeaveFeedback, className}) => {
    return(
        <button type='button' className={className} onClick={onLeaveFeedback}>{option}</button>
    );
}

FeedbackOptions.propTypes = {
    option: PropTypes.string.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;