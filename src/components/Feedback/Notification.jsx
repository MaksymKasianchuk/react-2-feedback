import React from 'react';
import PropTypes from 'prop-types';
// import styles from './Feedback.module.scss';

const Notification = ({message}) => {
    return(
        <div>
            <p>{message}</p>
        </div>
    );
}
Notification.propTypes = {
    message: PropTypes.string.isRequired
}
export default Notification;