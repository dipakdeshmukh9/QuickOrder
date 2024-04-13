import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";



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
      <h1>About Class Component</h1>
      <div>
        loggedInUser
        <UserContext.Consumer>
          {({loggedInUser}) =>(
            <h1 className="text-xl font-bold">{loggedInUser}</h1>
          )}
        </UserContext.Consumer>
      </div>
      <h2>This is Namste React Webseries </h2>
      <UserClass name={"first"} location={"pune"}/>
    </div>
  )
}
}

export default About;
