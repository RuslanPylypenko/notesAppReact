import {INote, NoteActionTypes} from "../interfaces";

export const deleteNoteAction = (payload: INote) => {
    return {type: NoteActionTypes.DELETE_NOTE, payload}
}

export const deleteToggleStatusNoteAction = (payload: INote) => {
    return {type: NoteActionTypes.TOGGLE_STATUS_NOTE, payload}
}