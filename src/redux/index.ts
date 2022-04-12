import {createStore} from "redux";
import {reducer} from "./reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {initialState} from "./db";

export const store = createStore(
    reducer,
    initialState,
    composeWithDevTools()
);

export type RootState = ReturnType<typeof reducer>