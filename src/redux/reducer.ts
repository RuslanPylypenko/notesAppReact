import {NoteAction, NoteActionTypes, NoteListPropsType} from "../interfaces";
import {STATUS} from "../store/constants";
import {initialState} from "./db";

export const reducer = (state = initialState, action: NoteAction): NoteListPropsType => {
    switch (action.type) {
        case NoteActionTypes.CREATE_NOTE:
            return {
                ...state,
                notes: [...state.notes, action.payload]
            }
        case NoteActionTypes.DELETE_NOTE:
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.payload.id)
            }
        case NoteActionTypes.TOGGLE_STATUS_NOTE:
            return {
                ...state,
                notes: [
                    ...state.notes.filter(note => note.id !== action.payload.id),
                    {
                        ...action.payload,
                        status: action.payload.status === STATUS.ACTIVE ? STATUS.ARCHIVED : STATUS.ACTIVE
                    }
                ]
            }
        default:
            return state;
    }
}