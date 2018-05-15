import * as React from "react";
import * as ReactDOM from "react-dom";
import Disquaires from "./Disquaires";

import { createStore } from 'redux';
import { query } from './Reducers';
import { DisquairesState } from './State';
import { Provider } from 'react-redux';
import {  QueryAction } from "./Actions"


const store = createStore<DisquairesState, QueryAction, any, any>(query, {
  disquaires: [{
                  "id":1,
                  "name":"Pop Culture",
                  "image":"./img/pop.png"
                },
                {
                  "id":2,
                  "name":"Souffle Continu",
                  "image":"./img/souffle.jpg"
                }]
});

ReactDOM.render(
    <Provider store={store}>
        <Disquaires />
    </Provider>,
    document.getElementById("app")
);