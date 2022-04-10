import React from "react";

export const Home: React.FC = () => {
    return (
        <div className="container pt-4">
            <h2>Notes App</h2>

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

            <div className="row pb-5 justify-content-end">
                <form role="form" className="margin-bottom-0">
                    <div className="form-row d-flex align-items-end">
                        <div className="form-group col-md-3">
                            <label>Name</label>
                            <input type="text" name="name" className="form-control"/>
                        </div>
                        <div className="form-group col-md-3">
                            <label>Category:</label>
                            <div className="input-group">
                                <select className="form-control" name="category">
                                    <option>Task</option>
                                    <option>Idea</option>
                                    <option>Quote</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group col-md-4">
                            <label>Content</label>
                            <input type="text" name="content" className="form-control"/>
                        </div>
                        <div className="form-group col-md-1">
                            <button className="btn btn-light">Save</button>
                        </div>
                    </div>
                </form>
            </div>


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
        </div>
    )
}