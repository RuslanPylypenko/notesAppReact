import {ICreateNote, INote, NoteActionTypes} from "../interfaces";

export const deleteNoteAction = (payload: INote) => {
    return {type: NoteActionTypes.DELETE_NOTE, payload}
}

export const toggleStatusNoteAction = (payload: INote) => {
    return {type: NoteActionTypes.TOGGLE_STATUS_NOTE, payload}
}

export const toggleAllNotes = () => {
    return {type: NoteActionTypes.TOGGLE_ALL_NOTES}
}

export const deleteAllNotes = () => {
    return {type: NoteActionTypes.DELETE_ALL_NOTES}
}

export const createNote = (payload: ICreateNote) => {
    return {type: NoteActionTypes.CREATE_NOTE, payload}
}

export const updateNote = (payload: ICreateNote) => {
    return {type: NoteActionTypes.UPDATE_NOTE, payload}
}

export const setNoteForEdit = (payload: ICreateNote) => {
    return {type: NoteActionTypes.SET_NOTE_FOR_EDIT, payload}
}