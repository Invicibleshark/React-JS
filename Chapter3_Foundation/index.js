import React from "react";
import ReactDOM from "react-dom/client";

// Create a root for rendering
let root = ReactDOM.createRoot(document.getElementById("root"));
// heading => React element =>js Object
let Heading=React.createElement("h1",{},"this is a heading");
// JSX Heading
//jsx heading converted to React element by parcel <- babel does the the conversion which is inside the Parcel package  ==> HTML Element
const jsxHeading = (<h1> This is JSX Heading by Greek shark🦈</h1>); //() for multiple lines of code 

// Render the JSX element into the root
//Heading 1 here is the React component which return rect element(jsx)
let element=20;
const Name=()=>
{
    return (
    <h1> {element} {50*60} This Heading is from Other Component</h1>)    //React Element in Component
};
const Heading1=()=>{
return (
<div>
    <Name/>
    <h1> This is React Component</h1>
</div>)
};

root.render(<Heading1/>)
