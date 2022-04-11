import {createStore} from "redux";
import {reducer} from "./reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {notesList} from "../store/notes";

export const store = createStore(
    reducer,
    {notes: notesList},
    composeWithDevTools()
);

export type RootState = ReturnType<typeof reducer>