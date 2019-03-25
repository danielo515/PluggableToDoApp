import React from "react";
import s from "styled-components";
import LinearProgress from "@material-ui/core/LinearProgress";
import Icon from "@material-ui/core/Icon";
import Alarm from "@material-ui/icons/Alarm";
import distanceInWordsToNow from "date-fns/distance_in_words_to_now";

const ControlsWrapper = s.div`
  width: 100%;
  border: 1px solid red;
  display: flex;
`;

const Row = s.div`
 flex-grow: 1;
`;

const normalise = (total, completed) => (completed * 100) / total;

const Due = ({ dueAt }) =>
  !dueAt ? null : (
    <Row>
      {distanceInWordsToNow(dueAt)} <Alarm />
    </Row>
  );

const TaskControls = ({ total, completed = 0, dueAt }) => (
  <ControlsWrapper>
    <Due dueAt={dueAt} />
    {!total ? null : (
      <Row>
        <LinearProgress
          variant="determinate"
          value={normalise(total, completed)}
        />
        {completed} / {total}
      </Row>
    )}
  </ControlsWrapper>
);

export default TaskControls;
