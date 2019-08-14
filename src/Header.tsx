import React, { FC } from "react";
import styled from "styled-components";

import InputForm from "./Form/InputForm";

const Head = styled.header``;

const H1 = styled.h1``;

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputText: string;
}

const Header: FC<Props> = ({ onChange, inputText }) => (
  <Head>
    <H1>ToDo App</H1>
    <InputForm onChange={onChange} placeholder="Your Todos" value={inputText} />
  </Head>
);

export default Header;
