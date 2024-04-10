import styled from "styled-components";

const FeedbackOptionStyles = styled.div`
  div {
    display: flex;
    gap: 2rem;
    justify-content: center;
    button {
      border: none;
      padding: 10px 15px;
      border-radius: 0.5rem;
      cursor: pointer;
      background-color: grey;
      color: white;
      text-transform: uppercase;
    }
  }
`;

export default FeedbackOptionStyles;
