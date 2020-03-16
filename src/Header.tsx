import React from "react";
import styled from "styled-components";

const Head = styled.header`
  background-color: #fff;
  color: #000;
`;

const H1 = styled.h1``;

const Header = () => (
  <Head>
    <H1>A-Day</H1>
  </Head>
);

export default Header;
