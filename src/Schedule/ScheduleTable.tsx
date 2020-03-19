import React from "react";

import TimeList from "./TimeList";
import Row, { Schedule } from "./Row";

export type ScheduleInfo = Schedule[];

interface Props {
  scheduleInfo: ScheduleInfo;
}

const ScheduleTable: React.FC<Props> = ({ scheduleInfo }) => {
  return (
    <div>
      <TimeList />
      <div>
        {scheduleInfo.map((schedule: Schedule) => (
          <Row schedule={schedule} />
        ))}
      </div>
    </div>
  );
};

export default ScheduleTable;
