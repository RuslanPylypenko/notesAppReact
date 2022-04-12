import React from "react";
import {CATEGORY_ICONS} from "../../store/constants";
import {INote} from "../../interfaces";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {useForm} from "react-hook-form";


export const NotesTable: React.FC = () => {
    const notes = useTypedSelector(state => state.notes)
    const showNotesStatus = useTypedSelector(state => state.showNotesStatus)
    const {deleteNoteAction, toggleStatusNoteAction, toggleAllNotes, deleteAllNotes, setNoteForEdit} = useActions()

    const getIcon = (category: string): string => {
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
                <th className="text-right">
                    <div className="btn-group">
                        <button type="button"
                                onClick={() => toggleAllNotes()}
                                className="btn btn-default fa fa-archive">
                        </button>
                        <button type="button"
                                onClick={() => deleteAllNotes()}
                                className="btn btn-default fa fa-trash">
                        </button>
                    </div>
                </th>
            </tr>
            </thead>
            <tbody>

            {notes.filter(note => note.status === showNotesStatus).map((note, i) => {
                return (
                    <tr key={i}>
                        <td><i className={"fa fa-2x fa-" + getIcon(note.category)}></i></td>
                        <td>{note.name}</td>
                        <td>{note.created_at}</td>
                        <td>{note.category}</td>
                        <td>{note.content}</td>
                        <td>{note.dates?.join(', ')}</td>
                        <td>
                            <div className="btn-group">
                                <button type="button"
                                        onClick={() => setNoteForEdit(note)}
                                        className="btn btn-default fa fa-pencil">
                                </button>
                                <button type="button"
                                        onClick={() => toggleStatusNoteAction(note)}
                                        className="btn btn-default fa fa-archive">
                                </button>
                                <button type="button"
                                        onClick={() => deleteNoteAction(note)}
                                        className="btn btn-default fa fa-trash">
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