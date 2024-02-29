import React from "react";
import ReactDOM from "react-dom/client";

let heading =React.createElement("h1",{id:"Heading"},"This is Keshav's React element");
let root=ReactDOM.createRoot(document.getElementById("Heading"));
root.render(heading);
