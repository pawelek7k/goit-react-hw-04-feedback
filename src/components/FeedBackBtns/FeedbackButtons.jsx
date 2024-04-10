export const FeedbackButtons = ({ good = 0, neutral = 0, bad = 0 }) => {
  return (
    <>
      <button>Good {good}</button>
      <button>Neutral {neutral}</button>
      <button>Bad {bad}</button>
    </>
  );
};
