​import { Action } from 'redux';
import { Disquaire } from "./Disquaire"


export interface FetchPostsSuccess extends Action {
  type: 'FETCH_SUCCESS';
  payload: Disquaire[]
}

export type Actions = FetchPostsSuccess;

export function fetchDatas() : FetchPostsSuccess {
   return {type: 'FETCH_SUCCESS', payload : [{
                         "id":1,
                         "name":"Pop Culture",
                         "image":"./img/pop.png"
                       },
                       {
                         "id":2,
                         "name":"Souffle Continu",
                         "image":"./img/souffle.jpg"
                       }]}
}
