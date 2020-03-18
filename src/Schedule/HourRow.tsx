import React from "react";
import styled from "styled-components";

const TimeTd = styled.td`
  width: 15%;
`;

const ContentTd = styled.td`
  width: 75%;
`;

const HourRow: React.FC<{ time: string }> = ({ time }) => (
  <>
    <tr key={`${time}-1`}>
      <TimeTd>{time} | </TimeTd>
      <ContentTd>
        <hr />
      </ContentTd>
    </tr>
    <tr key={`${time}-2`}>
      <td />
      <td />
    </tr>
    <tr key={`${time}-2`}>
      <td />
      <td />
    </tr>{" "}
    <tr key={`${time}-3`}>
      <td />
      <td />
    </tr>
    <tr key={`${time}-4`}>
      <td />
      <td />
    </tr>
  </>
);

export default HourRow;
