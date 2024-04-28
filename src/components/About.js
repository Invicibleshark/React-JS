import User from "./User";
import Userclass from "./Userclass";
import React from "react";

class About extends React.Component{
  constructor(props){
    super(props);
      this.state={
        value:0,
      }
  }
  componentDidMount(){
  
  }
  render(){
    return(
      <div>
        <Userclass/>
       </div>
    )
  }
}
export default About;