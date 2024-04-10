import { useState } from "react";

// const Notification = ({ message }) => {
//   return <p>{message}</p>;
// };

export const FeedbackButtons = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });
  const [hasFeedback, setHasFeedback] = useState(false);

  const handleFeedback = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
    setHasFeedback(true);
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const { good } = feedback;
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  return (
    <>
      <div>
        <button onClick={() => handleFeedback("good")}>Good</button>
        <button onClick={() => handleFeedback("neutral")}>Neutral</button>
        <button onClick={() => handleFeedback("bad")}>Bad</button>
      </div>
      {hasFeedback ? (
        <div>
          <h2>Statistics</h2>
          <ul>
            {Object.entries(feedback).map(([type, value]) => (
              <li key={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}: {value}
              </li>
            ))}
            <li>Total feedback: {countTotalFeedback()}</li>
            <li>
              Positive feedback percentage: {countPositiveFeedbackPercentage()}%
            </li>
          </ul>
        </div>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
};
