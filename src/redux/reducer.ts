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

const updateNote = (data: INote): INote => {
    return {
        ...data,
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
        case NoteActionTypes.UPDATE_NOTE:
            return {
                ...state,
                notes: state.notes.map(note => {
                    if(note.id == action.payload.id){
                        return updateNote(action.payload)
                    }else {
                        return note
                    }
                })
            }
        case NoteActionTypes.DELETE_NOTE:
            return {
                ...state,
                noteForEdit: null,
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
                noteForEdit: null,
                notes: []
            }
        case NoteActionTypes.SET_NOTE_FOR_EDIT:
            return {
                ...state,
                noteForEdit: action.payload
            }
        default:
            return state;
    }
}