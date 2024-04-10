import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
class About extends Component{
  constructor(props){
    super(props);
    //console.log("parent constructor");
  }
  componentDidMount(){
    //console.log("parent component did mount");
  }
  render(){
   // console.log("parent render");
  

  return (
    <div>
      <h1>About</h1>
      <h2>This is Namste React Webseries </h2>
      <UserClass name={"first"} location={"pune"}/>
    </div>
  )
}
}

export default About;
