import React, { FC } from "react";
import styled from "styled-components";

import DoneButton from "./DoneButton";

const Item = styled.li``;

interface Props {
  handleComplete: () => void;
  todo: string;
}

const Todo: FC<Props> = ({ handleComplete, todo }) => (
  <Item>
    <DoneButton handleClick={handleComplete} />
    {todo}
  </Item>
);

export default Todo;
