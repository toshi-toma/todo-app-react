import React from "react";

import TodoContainer from "./Todo/TodoContainer";
import ScheduleContainer from "./Schedule/ScheduleContainer";

const Main = () => {
  return (
    <main>
      <TodoContainer />
      <ScheduleContainer />
    </main>
  );
};

export default Main;
