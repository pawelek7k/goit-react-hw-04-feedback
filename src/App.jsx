import "./App.css";
import { FeedbackButtons } from "./components/FeedBackBtns/FeedbackButtons";
import { Notification } from "./components/Notification/Notification";
function App() {
  return (
    <>
      <h2>Please leave feedback</h2>
      <FeedbackButtons></FeedbackButtons>
      <Notification message="There is no feedback" />
    </>
  );
}

export default App;
