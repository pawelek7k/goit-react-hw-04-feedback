import PropTypes from "prop-types";
import StatStyles from "./StatStyles";
StatStyles;

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatStyles>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total feedback: {total}</li>
        <li>Positive feedback percentage: {positivePercentage}%</li>
      </ul>
    </StatStyles>
  );
};
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
