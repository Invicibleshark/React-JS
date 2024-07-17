// import React,{useState} from 'react'
import React from "react";
// const User = (props) => {
//     let {name}=props;
//     let [count]=useState(0);
//   return (
//     <div>
//         <h1>This is from User Functional Component: {name} /count={count}</h1>
//     </div>
//   );
// };
class User extends React.Component{
  constructor(props){
    console.log("Constructor of child 1");
    super(props);
    this.state={
      name:"hello",
    }
  }
  componentDidMount(){
    console.log("Component of child 1");
  }
  render(){
    console.log("Render of child 1");
    return(
      <div>
        <h1>This is a user Class Component made after erasing functional component {this.state.name}</h1>
        <button onKeyDown={
          ()=>{
            this.setState(
              {
                name:this.state.name+"zero",
              }
            )
          }
        }>Click Me Please!!</button>
      </div>
    )
  }
}

export default User;