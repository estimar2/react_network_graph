import React from "react";
import Graph from "react-graph-vis";

// by react-graph-vis
function LesMiserables(props) {
  const graph = {
    nodes: [
      { id: 0, label: "Myriel", group: 1 },
      { id: 1, label: "Napoleon", group: 1 },
      { id: 2, label: "Mlle.Baptistine", group: 1 },
      { id: 3, label: "Mme.Magloire", group: 1 },
      { id: 4, label: "CountessdeLo", group: 1 },
      { id: 5, label: "Geborand", group: 1 },
      { id: 6, label: "Champtercier", group: 1 },
      { id: 7, label: "Cravatte", group: 1 },
      { id: 8, label: "Count", group: 1 },
      { id: 9, label: "OldMan", group: 1 },
      { id: 10, label: "Labarre", group: 2 },
      { id: 11, label: "Valjean", group: 2 },
      { id: 12, label: "Marguerite", group: 3 },
      { id: 13, label: "Mme.deR", group: 2 },
      { id: 14, label: "Isabeau", group: 2 },
      { id: 15, label: "Gervais", group: 2 },
      { id: 16, label: "Tholomyes", group: 3 },
      { id: 17, label: "Listolier", group: 3 },
      { id: 18, label: "Fameuil", group: 3 },
      { id: 19, label: "Blacheville", group: 3 },
      { id: 20, label: "Favourite", group: 3 },
    ],
    edges: [
      { from: 1, to: 0 },
      { from: 2, to: 0 },
      { from: 3, to: 0 },
      { from: 3, to: 2 },
      { from: 4, to: 0 },
      { from: 5, to: 0 },
      { from: 6, to: 0 },
      { from: 7, to: 0 },
      { from: 8, to: 0 },
      { from: 9, to: 0 },
      { from: 11, to: 10 },
      { from: 11, to: 3 },
      { from: 11, to: 2 },
      { from: 11, to: 0 },
      { from: 12, to: 11 },
      { from: 13, to: 11 },
      { from: 14, to: 11 },
      { from: 15, to: 11 },
      { from: 17, to: 16 },
      { from: 18, to: 16 },
      { from: 18, to: 17 },
      { from: 19, to: 16 },
      { from: 19, to: 17 },
      { from: 19, to: 18 },
      { from: 20, to: 16 },
      { from: 20, to: 17 },
      { from: 20, to: 18 },
      { from: 20, to: 19 },
    ],
  };

  const options = {
    nodes: {
      shape: "dot",
      size: 16,
    },
    physics: {
      forceAtlas2Based: {
        gravitationalConstant: -26,
        centralGravity: 0.005,
        springLength: 230,
        springConstant: 0.18,
      },
      maxVelocity: 146,
      solver: "forceAtlas2Based",
      timestep: 0.35,
      stabilization: { iterations: 150 },
    },
    autoResize: false,
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
      <h2>LesMiserables</h2>
      <Graph
        graph={graph}
        options={options}
        events={events}
        style={{ height: "640px" }}
      />
    </div>
  );
}

export default LesMiserables;
