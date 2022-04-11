import {finished} from "stream";

export interface ICATEGORY_ICON {
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