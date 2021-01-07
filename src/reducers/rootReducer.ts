import { combineReducers } from 'redux';
import { getReducer } from "./getReducer";
import { deleteReducer } from "./deleteReducer";
import { TodoInterfaceDel } from "./deleteReducer";
import { TodoInterfaceGet } from "./getReducer";

export interface StoreState{
  getReducer: TodoInterfaceGet[];
  deleteReducer: TodoInterfaceDel[];
}

export default combineReducers<StoreState>({
  getReducer,
  deleteReducer
});