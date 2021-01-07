import { ActionTypes } from "../actions/types";
import { dispatchInterface } from "../actions/getAction";

export interface TodoInterfaceGet{
  userId:number;
  id:number;
  title:string;
  completed:boolean;
}

export const getReducer = (state: TodoInterfaceGet[] = [], action: dispatchInterface):TodoInterfaceGet[] => {
  switch (action.type) {
    case ActionTypes.getPosts:
      return [
        ...state,
        ...action.payload
      ]
    default:
      return state;
  }
}