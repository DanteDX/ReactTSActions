import { ActionTypes } from "../actions/types";
import { deleteDispatchInterface } from "../actions/deleteAction";

export interface TodoInterfaceDel{
  done: boolean;
}

export const deleteReducer = (state: TodoInterfaceDel[] = [{done:false}], action: deleteDispatchInterface):TodoInterfaceDel[] => {
  switch (action.type) {
    case ActionTypes.deletePosts:
      return []
    default:
      return state;
  }
}