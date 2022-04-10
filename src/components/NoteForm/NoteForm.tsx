import React from "react";

export const NoteForm: React.FC = () => {
    return (
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
    )
}