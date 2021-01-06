import React from "react";

interface NameInterface{
  name: string;
}

class Name extends React.Component<NameInterface>{
  state = {
    name: this.props.name
  }
  render(){
    return (
      <p>{this.state.name} is my name</p>
    )
  }
}

export default Name;