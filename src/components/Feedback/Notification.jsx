import PropTypes from 'prop-types';
import { NotificationStyled } from './Feedback.styled';

const Notification = ({message}) => {
    return(
        <NotificationStyled>
            <p>{message}</p>
        </NotificationStyled>
    )
};

Notification.propTypes = {
    message: PropTypes.number.isRequired,
};

export default Notification;