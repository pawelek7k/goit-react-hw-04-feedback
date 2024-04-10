import PropTypes from "prop-types";
import NotificationStyles from "./NotificationStyles";

export const Notification = ({ message }) => {
  return (
    <NotificationStyles>
      <p>{message}</p>
    </NotificationStyles>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
