import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px #000 solid;
  width: 200px;
`;

export type Schedule = {
  title: string;
  startHour: number;
  startMin: number;
  endHour: number;
  endMin: number;
};

interface Props {
  schedule: Schedule;
}

const getTimeText = ({ startHour, startMin, endHour, endMin }: Schedule) => {
  return `${startHour}:${startMin === 0 ? "00" : startMin} ~ ${endHour}:${
    endMin === 0 ? "00" : endMin
  }`;
};

const Row: React.FC<Props> = ({ schedule }) => (
  <Wrapper>
    {schedule.title} {getTimeText(schedule)}
  </Wrapper>
);

export default Row;
