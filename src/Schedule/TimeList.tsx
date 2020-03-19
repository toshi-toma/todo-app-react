import React from "react";
import styled from "styled-components";
import times from "./times";

const Time = styled.div`
  &::after {
    content: "";
    position: absolute;
    margin: 9px;
    border-top: 1px solid;
    width: 200px;
  }
`;

const TimeList = () => (
  <div>
    {times.map(time => (
      <Time>{time}</Time>
    ))}
  </div>
);

export default TimeList;
