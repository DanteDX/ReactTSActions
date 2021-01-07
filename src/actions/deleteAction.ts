import { Dispatch } from "redux";
import { ActionTypes } from "./types";

export interface deleteDispatchInterface{
  type: ActionTypes.deletePosts,
  payload: []
}

export const deleteAction = () => (dispatch: Dispatch) => {
  dispatch<deleteDispatchInterface>({
    type: ActionTypes.deletePosts,
    payload: []
  })
}