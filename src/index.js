import React from "react";
import ReactDOM from "react-dom";
import Task from "./components/Task.component";
import { tasks } from "./fixtures";
import Paper from "@material-ui/core/Paper";

function App() {
  return (
    <Paper>
      {tasks.map(task => (
        <Task {...task} />
      ))}
    </Paper>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
