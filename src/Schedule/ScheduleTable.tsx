import React from "react";

import styled from "styled-components";
import times from "./times";

const Table = styled.table`
  width: 50%;
  border: solid black 1px;
`;

const TableHeader = () => (
  <thead>
    <tr>
      <th />
      <th />
    </tr>
  </thead>
);

const ScheduleTable = () => {
  return (
    <Table>
      <TableHeader />
      <tbody>
        {times.map(time => (
          <tr key={time}>
            <td>{time}</td>
            <td />
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ScheduleTable;
