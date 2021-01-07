import { Dispatch } from "redux";
import axios from "axios";
import { ActionTypes } from "./types";
const url = "https://jsonplaceholder.typicode.com/todos";
interface TodoInterface{
  userId:number;
  id:number;
  title:string;
  completed:boolean;
}

export interface dispatchInterface{
  type: ActionTypes.getPosts,
  payload: TodoInterface[]
}

export const getAction = ():any => async (dispatch:Dispatch) => {
  try {
    const response = await axios.get<TodoInterface[]>(url);
    dispatch<dispatchInterface>({
      type: ActionTypes.getPosts,
      payload: response.data
    })
  } catch (err) {
    return [];
  }
}