import React from "react";

import ScheduleTable, { ScheduleInfo } from "./ScheduleTable";

interface Props {
  scheduleInfo: ScheduleInfo;
}

const ScheduleContainer: React.FC<Props> = ({ scheduleInfo }) => {
  return (
    <>
      <h2>{new Date().toDateString()}</h2>
      <ScheduleTable scheduleInfo={scheduleInfo} />
    </>
  );
};

export default ScheduleContainer;
