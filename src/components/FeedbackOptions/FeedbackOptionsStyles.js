import styled from "styled-components";

const FeedbackOptionStyles = styled.div`
  div {
    display: flex;
    gap: 2rem;
    justify-content: center;
    button {
      border: none;
      padding: 0.5rem 1.5rem;
      border-radius: 0.5rem;
      cursor: pointer;
      background-color: transparent;
      color: white;
      text-transform: uppercase;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        border-radius: 0.5rem;
        width: 0;
        background-color: pink;
        z-index: -1;
        -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
        box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
        transition: all 250ms;
      }
      &:hover {
        box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.7);
      }
      &:hover::before {
        width: 100%;
      }
    }
  }
`;

export default FeedbackOptionStyles;
