import React from "react";
import Graph from "react-graph-network";

// const data = {
//   nodes: [
//     { id: "HkqEDLvxE" },
//     { id: "011jVS4rb" },
//     { id: "PXACjDxmR" },
//     { id: "kuVISwh7w" },
//     { id: "UIEjvLJMd" },
//     { id: "ZVi8fWDBx" },
//     { id: "H-06WvsfJ" },
//     { id: "Fbc9iwnJl" },
//   ],
//   links: [
//     { source: "HkqEDLvxE", target: "011jVS4rb" },
//     { source: "011jVS4rb", target: "PXACjDxmR" },
//     { source: "PXACjDxmR", target: "kuVISwh7w" },
//     { source: "PXACjDxmR", target: "Fbc9iwnJl" },
//     { source: "PXACjDxmR", target: "UIEjvLJMd" },
//     { source: "kuVISwh7w", target: "UIEjvLJMd" },
//     { source: "UIEjvLJMd", target: "ZVi8fWDBx" },
//     { source: "ZVi8fWDBx", target: "H-06WvsfJ" },
//     { source: "H-06WvsfJ", target: "Fbc9iwnJl" },
//   ],
// };

// const Sample = () => {
//     <div style={{height : '100vh'}}>
//         <Graph data={data}/>
//     </div>
// }

function Sample(props) {
  const data = {
    nodes: [
      { id: "1" },
      { id: "2" },
      { id: "3" },
      { id: "4" },
      { id: "5" },
      { id: "6" },
      { id: "7" },
      { id: "8" },
    ],
    links: [
      { source: "1", target: "2" },
      { source: "2", target: "3" },
      { source: "3", target: "4" },
      { source: "3", target: "8" },
      { source: "3", target: "5" },
      { source: "4", target: "5" },
      { source: "5", target: "6" },
      { source: "6", target: "7" },
      { source: "7", target: "8" },
    ],
  };

  return (
    <div className="App">
      <h2>Sample</h2>
      <Graph data={data} />
    </div>
  );
}

export default Sample;
