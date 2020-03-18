import React from "react";
import styled from "styled-components";

import times from "./times";
import TableHeader from "./TableHeader";
import HourRow from "./HourRow";

const Table = styled.table`
  width: 50%;
  border: solid black 1px;
`;

const ScheduleTable = () => {
  return (
    <Table>
      <TableHeader />
      <tbody>
        {times.map(time => (
          <HourRow time={time} />
        ))}
      </tbody>
    </Table>
  );
};

export default ScheduleTable;
