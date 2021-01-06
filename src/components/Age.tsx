import React from "react";

interface AgeInterface{
  age: number;
}

const Age = (props:AgeInterface):JSX.Element =>{
  return(
    <p>{props.age} is my age</p>
  )
};

export default Age;