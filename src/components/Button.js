import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 216px;
  height: 60px;
  background: #000;
  border: 3px solid #fff;
  font-family: Quicksand;
  font-weight: 300;
  font-size: 22px;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  margin-top: 50px;
  cursor: pointer;
  transition: all 1s ease;

  &:hover {
    animation: pulse 0.3s ease;
    animation-iteration-count: 1;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(1.05);
    }
    50% {
      transform: scale(1);
    }

    75% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const Button = ({ text, handleClick }) => {
  return <StyledButton onClick={handleClick}>{text}</StyledButton>;
};

export default Button;
