import React,{Component} from "react";
import Name from "./components/Name";
import Age from "./components/Age";
import Debug from "./components/Debug";

class App extends Component{
  state = {name: "shadman", age:20};
  render(){
    return(
      <div>
        <Name name={this.state.name} />
        <Age age={this.state.age} />
        <Debug info="Shadman Information" infoID={10} />
      </div>
    )
  }
}

export default App;

