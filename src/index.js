import React from "react";
import ReactDOM from "react-dom";
import ReactDataGrid from "react-data-grid";
import "./styles.css";

const columns = [
  { key: "id", name: "", editable: false, width: 100 },
  { key: "", name: "", editable: false, width: 10 },
  {
    key: "monday",
    name: "Monday",
    editable: true,
    width: 100,
    resizable: true
  },
  { key: "", name: "", editable: false, width: 10 },
  { key: "tues", name: "Tuesday", editable: true, width: 100, resizable: true },
  { key: "", name: "", editable: false, width: 10 },
  {
    key: "wed",
    name: "Wednesday",
    editable: true,
    width: 100,
    resizable: true
  },
  { key: "", name: "", editable: false, width: 10 },
  {
    key: "thur",
    name: "Thursday",
    editable: true,
    width: 100,
    resizable: true
  },
  { key: "", name: "", editable: false, width: 10 },
  { key: "fri", name: "Friday", editable: true, width: 100, resizable: true }
];

const rows = [
  { id: "Activity", title: "", complete: "", rowheight: 3 },
  { id: "", title: "", complete: "", editable: false },
  { id: "Duration", title: "", complete: 60 },
  { id: "", title: "", complete: "" },
  { id: "Intensity", title: "Task 2", complete: 40 },
  { id: "", title: "", complete: "" },
  { id: "Mood", title: "Task 1", complete: 20 },
  { id: "", title: "", complete: "" },
  { id: "Notes", title: "Task 3", complete: 60 }
];

class Example extends React.Component {
  state = { rows };

  onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    this.setState((state) => {
      const rows = state.rows.slice();
      for (let i = fromRow; i <= toRow; i++) {
        rows[i] = { ...rows[i], ...updated };
      }
      return { rows };
    });
  };
  render() {
    return (
      <ReactDataGrid
        columns={columns}
        rowGetter={(i) => this.state.rows[i]}
        rowsCount={9}
        onGridRowsUpdated={this.onGridRowsUpdated}
        enableCellSelect={true}
      />
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Example />, rootElement);
