import React from "react";
import { getAction } from "../actions/getAction";
import { deleteAction } from "../actions/deleteAction";
import { connect } from "react-redux";
import { StoreState } from "../reducers/rootReducer";
import { TodoInterfaceGet } from "../reducers/getReducer";

interface PropsInterface{
  getAction: Function;
  deleteAction:Function;
  todos: TodoInterfaceGet[];
}


const Name = (props: PropsInterface):JSX.Element => {
  return (
    <div>
      <button onClick={e => props.getAction()}>Get Action</button>
      <button onClick={e => props.deleteAction()}>Delete Action</button>
      <button onClick={e => console.log(props.todos)}>Console Log Todos</button>
    </div>
  )
}

const mapStateToProps = (state: StoreState):{todos: TodoInterfaceGet[]} => {
  return {
    todos: state.getReducer
  }
}

export default connect(mapStateToProps, { getAction, deleteAction })(Name);

