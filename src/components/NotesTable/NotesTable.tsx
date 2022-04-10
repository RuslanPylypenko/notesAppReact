import React from "react";

export const NotesTable:React.FC = () => {
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

            {/*row start*/}
            <tr>
                <td><i className="fa fa-2x fa-random"></i></td>
                <td>Shopping list</td>
                <td>April 20, 2021</td>
                <td>Task</td>
                <td>Tomatoes, bread</td>
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
            {/*row end*/}

            {/*row start*/}
            <tr>
                <td><i className="fa fa-2x fa-random"></i></td>
                <td>Shopping list</td>
                <td>April 20, 2021</td>
                <td>Task</td>
                <td>Tomatoes, bread</td>
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
            {/*row end*/}

            </tbody>
        </table>
    )
}