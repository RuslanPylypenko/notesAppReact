import {ICreateNote, INote, NoteAction, NoteActionTypes, NoteListPropsType} from "../interfaces";
import {STATUS} from "../store/constants";
import {initialState} from "./db";
import {Id} from "../utils/generator";
import moment from "moment";
import {dateParser} from "../utils/dateParser";


const createNote = (data: ICreateNote): INote => {
    return {
        ...data,
        id: Id(),
        created_at: moment().format('MMMM DD, YYYY'),
        status: STATUS.ACTIVE,
        dates: dateParser(data.content)
    }
}

export const reducer = (state = initialState, action: NoteAction): NoteListPropsType => {
    switch (action.type) {
        case NoteActionTypes.CREATE_NOTE:
            return {
                ...state,
                notes: [...state.notes, createNote(action.payload)]
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
        case NoteActionTypes.TOGGLE_ALL_NOTES:
            return {
                ...state,
                showNotesStatus: state.showNotesStatus === STATUS.ACTIVE ? STATUS.ARCHIVED : STATUS.ACTIVE
            }
        case NoteActionTypes.DELETE_ALL_NOTES:
            return {
                ...state,
                notes: []
            }
        default:
            return state;
    }
}