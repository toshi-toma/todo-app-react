import React from "react";

import { storiesOf } from "@storybook/react";
import ScheduleContainer from "../ScheduleContainer";
import ScheduleTable from "../ScheduleTable";

storiesOf("Schedule", module)
  .add("ScheduleContainer", () => <ScheduleContainer />)
  .add("ScheduleTable", () => <ScheduleTable />);
