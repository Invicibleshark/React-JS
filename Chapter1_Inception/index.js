/* 
Note:
Here it is Not creating a "h1" tag but instead it is creating a React Element :React Object   
while rendering it convert the React Object into the html h1 tag then displays
*/
let heading=React.createElement("h1",{   
    id:"Heading",class:"Keshav"
},"Hello World Using React Js");   //{} used for giving attributes and its Values
let root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
console.log(heading);

/*
TO create :
<div id="parent">
    <div id="Child">
        <h1>I am Inside the child div which is inside the Parent div</h1>
    </div>
</div>
*/

let container1=React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child1"},
React.createElement("h1",{id:"heading1"}, "I am Inside the child div which is inside the Parent div"),
React.createElement("h1",{id:"heading2"},"This is Heading 2")
),
React.createElement("div",{id:"Child2"},
React.createElement("h1",{id:"heading 21"},"This is Heading 1 from Child 2"),
React.createElement("h1",{id:"heading 22"},"This is Heading 2 from the child 2")
)
)
root.render(container1);
console.log(container1);