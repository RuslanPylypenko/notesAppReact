import React from "react";

export const SummaryTable:React.FC = () => {
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

            {/*row start*/}
            <tr>
                <td><i className="fa fa-2x fa-random"></i></td>
                <td>Shopping list</td>
                <td>1</td>
                <td>1</td>
            </tr>
            {/*row end*/}

            {/*row start*/}
            <tr>
                <td><i className="fa fa-2x fa-random"></i></td>
                <td>Shopping list</td>
                <td>1</td>
                <td>1</td>
            </tr>
            {/*row end*/}

            </tbody>
        </table>
    )
}