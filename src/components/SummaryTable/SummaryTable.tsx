import React from "react";
import {ISummary, NoteListPropsType} from "../../interfaces";
import {CATEGORIES, CATEGORY_ICONS, STATUS} from "../../store/constants";

export const SummaryTable: React.FC<NoteListPropsType> = ({notes}) => {

    const summary: ISummary[] = CATEGORIES.map(category => ({
        category,
        active: notes.filter(note => note.category === category && note.status === STATUS.ACTIVE).length,
        archived: notes.filter(note => note.category === category && note.status === STATUS.ARCHIVED).length,
    }))

    const getIcon = (category: string):string => {
        const idx = CATEGORY_ICONS.findIndex(i => i.name === category)
        return CATEGORY_ICONS[idx].icon
    }

    return (
        <table className="table">
            <thead className="thead-dark">
            <tr>
                <th></th>
                <th>Note Category</th>
                <th>Active</th>
                <th>Archived</th>
            </tr>
            </thead>
            <tbody>

            {summary.map((item, i) => {
                return (
                    <tr key={i}>
                        <td><i className={"fa fa-2x fa-" + getIcon(item.category)}></i></td>
                        <td>{item.category}</td>
                        <td>{item.active}</td>
                        <td>{item.archived}</td>
                    </tr>
                )
            })}

            </tbody>
        </table>
    )
}