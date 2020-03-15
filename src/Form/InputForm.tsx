import React, { FC } from "react";
import styled from "styled-components";

const Input = styled.input``;

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string;
}

const InputForm: FC<Props> = props => <Input {...props} />;

export default InputForm;
