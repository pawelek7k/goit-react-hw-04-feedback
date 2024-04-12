import styled from "styled-components";

const StatStyles = styled.div`
  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0px;
    padding: 1rem;
    border: 1px solid rgb(155, 155, 155);
    background-color: pink;
    border-radius: 1rem;
    li {
      letter-spacing: 2px;
    }
    li:last-child {
      color: #585858;
    }
  }
`;

export default StatStyles;
