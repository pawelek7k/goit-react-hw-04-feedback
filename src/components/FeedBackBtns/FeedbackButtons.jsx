import { useState } from "react";

export const FeedbackButtons = ({ good = 0, neutral = 0, bad = 0 }) => {
  const [feedback, setFeedback] = useState({ good, neutral, bad });

  const handleFeedback = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
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
        {Object.keys(feedback).map((type) => (
          <button key={type} onClick={() => handleFeedback(type)}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>
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
    </>
  );
};
