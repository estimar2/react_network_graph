import React from "react";
import Graph from "react-graph-vis";

function BasicUsage(props) {
  const graph = {
    nodes: [
      { id: 1, label: "Node 1", color: "#e04141" },
      { id: 2, label: "Node 2", color: "#e09c41" },
      { id: 3, label: "Node 3", color: "#e0df41" },
      { id: 4, label: "Node 4", color: "#7be041" },
      { id: 5, label: "Node 5", color: "#41e0c9" },
      { id: 6, label: "Node 5", color: "#f79e31" },
      { id: 7, label: "Node 5", color: "#c2ffc8" },
      { id: 8, label: "Node 5", color: "#d4cbf5" },
      { id: 9, label: "Node 5", color: "#ff99f0" },
      { id: 10, label: "Node 5", color: "#97a386" },
    ],
    edges: [
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 2, to: 4 },
      { from: 2, to: 5 },
      { from: 2, to: 6 },
      { from: 2, to: 7 },
      { from: 2, to: 8 },
      { from: 2, to: 9 },
      { from: 2, to: 10 },
    ],
  };

  const options = {
    layout: {
      hierarchical: false,
    },
    edges: {
      color: "#000",
    },
    height: "500px",
  };

  const events = {
    select: function (event) {
      var { nodes, edges } = event;

      console.log(events.graph);
      console.log("Selected nodes : ");
      console.log(nodes);
      console.log("Selected edges : ");
      console.log(edges);
    },
  };

  return (
    <div className="App">
      <h2>BasicUsage</h2>
      <Graph
        graph={graph}
        options={options}
        events={events}
        style={{ height: "640px" }}
      />
    </div>
  );
}

export default BasicUsage;
