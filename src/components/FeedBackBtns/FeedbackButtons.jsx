import { useState } from "react";

export const FeedbackButtons = ({ good = 0, neutral = 0, bad = 0 }) => {
  const [feedback, setFeedback] = useState({ good, neutral, bad });

  const handleFeedback = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
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
        </ul>
      </div>
    </>
  );
};
