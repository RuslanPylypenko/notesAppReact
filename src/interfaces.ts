import {finished} from "stream";

export interface I_CATEGORY_ICON {
    name: string,
    icon: string,
}

export interface INote {
    id: string,
    name: string,
    created_at: string,
    content: string,
    dates: string[] | null,
    category: string,
    status: string
}

export interface ISummary {
    category: string,
    active: number,
    archived: number
}


export type NoteListPropsType = {
    notes: INote[]
}

export enum NoteActionTypes{
    CREATE_NOTE = 'CREATE_NOTE',
    EDIT_NOTE = 'EDIT_NOTE',
    DELETE_NOTE = 'DELETE_NOTE',
    SET_CURRENT_NOTE = 'SET_CURRENT_NOTE',
    TOGGLE_STATUS_NOTE = 'TOGGLE_STATUS_NOTE'
}


interface AddNoteAction {
    type: string
    payload: INote
}

interface EditNoteAction {
    type: string
    payload: INote
}

interface SetCurrentNoteAction {
    type: string
    payload: INote
}

interface DeleteNoteAction {
    type: string
    payload: INote
}

export interface ToggleStatusNoteAction {
    type: string
    payload: INote
}

export type NoteAction = AddNoteAction |
    EditNoteAction |
    SetCurrentNoteAction |
    DeleteNoteAction |
    ToggleStatusNoteAction