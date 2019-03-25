import React from "react";
import s from "styled-components";
import TaskControls from "./TaskControls";
import rand from "lodash/random";

const Task = s.div`
  font-size: 2rem;
  padding-left: 1rem;
  padding-top: .3rem;
  border-left: 2px solid ${({ color }) => color};
  width: 100%;
`;

const SubTasks = s.div`
  position: relative;
  left: 2.5%;
`;
const RenderTask = ({ title, color, dueAt, children = [] }) => (
  <Task color={color}>
    {title}
    <TaskControls
      total={children.length}
      completed={rand(0, children.length)}
      dueAt={dueAt}
    />
    {children && <SubTasks>{children.map(RenderTask)}</SubTasks>}
  </Task>
);

export default RenderTask;
