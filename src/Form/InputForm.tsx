import React, { FC } from "react";
import styled from "styled-components";
import { ENTER_KEY } from "./keyCode";

const Input = styled.input``;

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  placeholder: string;
  value: string;
}

const handleKeyDown = (
  e: React.KeyboardEvent<HTMLInputElement>,
  handleSubmit: () => void
) => {
  if (e.keyCode === ENTER_KEY) {
    handleSubmit();
  }
};

const InputForm: FC<Props> = props => (
  <Input {...props} onKeyDown={e => handleKeyDown(e, props.handleSubmit)} />
);

export default InputForm;
