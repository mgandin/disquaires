import { Reducer } from "redux"
import { DisquairesState} from "./State"
import {Actions} from "./Actions"

export const reducer: Reducer<DisquairesState> = (state: DisquairesState, action: Actions) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {...state, disquaires: action.payload};
    default:
      return state;
  }
}