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

export interface ICreateNote {
    name: string,
    content: string,
    category: string,
}

export interface ISummary {
    category: string,
    active: number,
    archived: number
}


export type NoteListPropsType = {
    notes: INote[],
    showNotesStatus: string,
    noteForEdit: INote|null
}

export enum NoteActionTypes {
    CREATE_NOTE = 'CREATE_NOTE',
    UPDATE_NOTE = 'UPDATE_NOTE',
    DELETE_NOTE = 'DELETE_NOTE',
    TOGGLE_STATUS_NOTE = 'TOGGLE_STATUS_NOTE',
    TOGGLE_ALL_NOTES = 'TOGGLE_ALL_NOTES',
    DELETE_ALL_NOTES = 'DELETE_ALL_NOTES',
    SET_NOTE_FOR_EDIT = 'SET_NOTE_FOR_EDIT',
}


interface INoteAction {
    type: string
    payload: INote
}

export type NoteAction = INoteAction