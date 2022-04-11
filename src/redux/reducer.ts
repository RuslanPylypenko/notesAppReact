import {notesList} from "../store/notes";
import {NoteAction, NoteActionTypes, NoteListPropsType} from "../interfaces";
import {STATUS} from "../store/constants";

const initialState: NoteListPropsType = {notes: notesList};

export const reducer = (state = initialState, action: NoteAction): NoteListPropsType => {
    switch (action.type) {
        case NoteActionTypes.CREATE_NOTE:
            return {notes: [...state.notes, action.payload]}
        case NoteActionTypes.DELETE_NOTE:
            return {notes: state.notes.filter(note => note.id !== action.payload.id)}
        case NoteActionTypes.TOGGLE_STATUS_NOTE:
            return {
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