import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #3174b0;
  border: 0;
  border-radius: 8px;
  color: white;
  cursor: pointer;

  &.delete {
    border: 1px solid #3174b0;
    color: #3174b0;
    background-color: transparent;
  }

  &:hover {
    opacity: 0.9;
  }
`;
