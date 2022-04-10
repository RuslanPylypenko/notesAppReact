import React from "react";
import {NoteType} from "../../store/notes";
import {CATEGORY_ICONS} from "../../store/constants";

type NoteListPropsType = {
    notes: NoteType[]
}

export const NotesTable: React.FC<NoteListPropsType> = ({notes}) => {

    const getIcon = (category: string):string => {
        const idx = CATEGORY_ICONS.findIndex(i => i.name === category)
        return CATEGORY_ICONS[idx].icon
    }

    return (
        <table className="table">
            <thead className="thead-dark">
            <tr>
                <th></th>
                <th>Name</th>
                <th>Created</th>
                <th>Category</th>
                <th>Content</th>
                <th>Dates</th>
                <th>
                    <div className="btn-group">
                        <button type="button" className="btn btn-default">
                            <i className="fa fa-archive"></i>
                        </button>
                        <button type="button" className="btn btn-default">
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                </th>
            </tr>
            </thead>
            <tbody>

            {notes.map((note, i) => {
                return (
                    <tr key={i}>
                        <td><i className={"fa fa-2x fa-" + getIcon(note.category)}></i></td>
                        <td>{note.name}</td>
                        <td>{note.created_at}</td>
                        <td>{note.category}</td>
                        <td>{note.content}</td>
                        <td></td>
                        <td>
                            <div className="btn-group">
                                <button type="button" className="btn btn-default">
                                    <i className="fa fa-pencil"></i>
                                </button>
                                <button type="button" className="btn btn-default">
                                    <i className="fa fa-archive"></i>
                                </button>
                                <button type="button" className="btn btn-default">
                                    <i className="fa fa-trash"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                )
            })}

            </tbody>
        </table>
    )
}