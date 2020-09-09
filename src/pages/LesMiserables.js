import React from "react";
import Graph from "react-graph-vis";

// by react-graph-vis
function LesMiserables(props) {
  const graph = {
    nodes: [
      { id: 0, label: "1", group: 1 },
      { id: 1, label: "2", group: 1 },
      { id: 2, label: "3", group: 2 },
      { id: 3, label: "4", group: 2 },
      { id: 4, label: "5", group: 3 },
      { id: 5, label: "6", group: 3 },
      { id: 6, label: "7", group: 4 },
      { id: 7, label: "8", group: 4 },
      { id: 8, label: "9", group: 5 },
      { id: 9, label: "10", group: 5 },
      { id: 10, label: "11", group: 6 },
      { id: 11, label: "12", group: 6 },
      { id: 12, label: "13", group: 7 },
      { id: 13, label: "14", group: 7 },
      { id: 14, label: "15", group: 8 },
      { id: 15, label: "16", group: 8 },
      { id: 16, label: "17", group: 9 },
      { id: 17, label: "18", group: 9 },
      { id: 18, label: "19", group: 10 },
      { id: 19, label: "20", group: 10 },
      { id: 20, label: "21", group: 11 },
      { id: 21, label: "22", group: 11 },
      { id: 22, label: "23", group: 12 },
      { id: 23, label: "24", group: 12 },
      { id: 24, label: "25", group: 13 },
      { id: 25, label: "26", group: 13 },
      { id: 26, label: "27", group: 14 },
      { id: 27, label: "28", group: 14 },
      { id: 28, label: "29", group: 15 },
      { id: 29, label: "30", group: 15 },
      { id: 30, label: "31", group: 16 },
      { id: 31, label: "32", group: 16 },
    ],
    edges: [
      { to: 0, from: 1 },
      { to: 0, from: 3 },
      { to: 0, from: 5 },
      { to: 0, from: 7 },
      { to: 0, from: 9 },
      { to: 1, from: 2 },
      { to: 1, from: 4 },
      { to: 3, from: 6 },
      { to: 3, from: 8 },
      { to: 5, from: 10 },
      { to: 5, from: 11 },
      { to: 7, from: 12 },
      { to: 7, from: 13 },
      { to: 9, from: 14 },
      { to: 9, from: 15 },
      { to: 9, from: 15 },
      { to: 2, from: 16 },
      { to: 4, from: 17 },
      { to: 6, from: 18 },
      { to: 8, from: 19 },
      { to: 10, from: 20 },
      { to: 11, from: 21 },
      { to: 12, from: 22 },
      { to: 13, from: 23 },
      { to: 14, from: 24 },
      { to: 15, from: 25 },
      { to: 0, from: 26 },
      { to: 0, from: 27 },
      { to: 0, from: 28 },
      { to: 0, from: 29 },
      { to: 0, from: 30 },
      { to: 0, from: 31 },
    ],
  };

  const options = {
    nodes: {
      borderWidth: 0,
      borderWidthSelected: 0,
      fixed: {
        x: true,
        y: true,
      },
      shape: "dot",
      shapeProperties: {
        borderRadius: 1,
      },
    },
    edges: {
      color: {
        inherit: "to",
      },
      smooth: false,
    },
    // layout: {
    //   hierarchical: {
    //     enabled: true,
    //     levelSeparation: -150,
    //     nodeSpacing: 255,
    //     treeSpacing: 400,
    //     direction: "DU",
    //     sortMethod: "directed",
    //   },
    // },
    interaction: {
      dragNodes: false,
    },
    physics: {
      forceAtlas2Based: {
        gravitationalConstant: -26,
        centralGravity: 0.005,
        springLength: 230,
        springConstant: 0.18,
      },
      hierarchicalRepulsion: {
        centralGravity: 0,
      },
      minVelocity: 0.75,
      solver: "hierarchicalRepulsion",
    },
  };

  const events = {
    select: function (event) {
      var { nodes, edges } = event;

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
