import PropTypes from "prop-types";
import FeedbackOptionStyles from "./FeedbackOptionsStyles";
FeedbackOptionStyles;
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackOptionStyles>
      <div>
        {options.map((option) => (
          <button key={option} onClick={() => onLeaveFeedback(option)}>
            {option}
          </button>
        ))}
      </div>
    </FeedbackOptionStyles>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func,
};
