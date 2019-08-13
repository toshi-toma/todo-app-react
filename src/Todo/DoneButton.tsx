import React, { FC } from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: #454545;
  color: #fff;
  margin: 5px;
`;

interface Props {
  onClick: () => void;
}

const DoneButton: FC<Props> = () => <Button>Done</Button>;

export default DoneButton;
