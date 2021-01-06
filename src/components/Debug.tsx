import React from "react";

interface DebugInterface{
  info: string;
  infoID: number;
}

class Debug extends React.Component<DebugInterface>{
  state = {
    info: this.props.info,
    infoID: this.props.infoID
  }
  render(){
    return(
      <>
      <p>{this.state.info} is the info</p>
      <p>{this.state.infoID} is the infoID</p>
      </>
    )
  }
}

export default Debug;