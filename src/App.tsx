import React from "react";
import Name from "./components/Name";
import Age from "./components/Age";
import Debug from "./components/Debug";


export default function App():JSX.Element{
  return (
    <>
      <Name name="Shadman"/>
      <Age age={20} />
      <Debug info="informtion" infoID={10} />
    </>
  )
}

// class App extends React.Component{
//   state = {name: "shadman", age:20};
//   render(){
//     return(
//       <>
//         <Name name={this.state.name} />
//         <Age age={this.state.age} />
//         <Debug info="Shadman Information" infoID={10} />
//       <>
//     )
//   }
// }
// export default App;




