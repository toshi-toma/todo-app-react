import React from "react";
import ScheduleTable from "./ScheduleTable";

const ScheduleContainer = () => {
  return (
    <>
      <h2>{new Date().toDateString()}</h2>
      <ScheduleTable />
    </>
  );
};

export default ScheduleContainer;
