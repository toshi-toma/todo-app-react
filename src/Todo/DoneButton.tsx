import React, { FC } from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: #fff;
  border-color: gray;
  color: gray;
  width: 16px;
  height: 16px;
  margin: 5px;
  cursor: pointer;
  border-radius: 16px;

  &:hover {
    background-color: rgba(128, 128, 128, 0.2);
  }
`;

interface Props {
  handleClick: () => void;
}

const DoneButton: FC<Props> = ({ handleClick }) => (
  <Button onClick={handleClick} />
);

export default DoneButton;
