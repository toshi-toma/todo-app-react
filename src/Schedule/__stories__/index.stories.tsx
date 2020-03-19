import React from "react";

import { storiesOf } from "@storybook/react";
import ScheduleContainer from "../ScheduleContainer";
import ScheduleTable from "../ScheduleTable";

const schedule = [
  {
    title: "todo1",
    startHour: 9,
    startMin: 0,
    endHour: 10,
    endMin: 0
  },
  {
    title: "todo2",
    startHour: 10,
    startMin: 0,
    endHour: 10,
    endMin: 30
  },
  {
    title: "todo3",
    startHour: 10,
    startMin: 30,
    endHour: 11,
    endMin: 30
  },
  {
    title: "todo4",
    startHour: 13,
    startMin: 0,
    endHour: 16,
    endMin: 0
  }
];

storiesOf("Schedule", module)
  .add("ScheduleContainer", () => <ScheduleContainer scheduleInfo={schedule} />)
  .add("ScheduleTable", () => <ScheduleTable scheduleInfo={schedule} />);
