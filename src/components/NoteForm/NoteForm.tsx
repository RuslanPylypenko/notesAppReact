import React from "react";
import {CATEGORIES} from "../../store/constants";
import {useForm} from "react-hook-form";
import {useActions} from "../../hooks/useActions";

interface IFormInputs {
    id: null|String,
    name: string,
    category:string,
    content:string
}

export const NoteForm: React.FC = () => {
    const {register, handleSubmit, formState: {errors}, getValues} = useForm<IFormInputs>()
    const {createNote} = useActions()

    const formSubmitHandler = handleSubmit((data, e) => {
        const id = getValues('id')
        const name = getValues('name')
        const category = getValues('category')
        const content = getValues('content')

        createNote({
            name,
            category,
            content
        })

    })

    return (
        <form role="form" className="margin-bottom-0" onSubmit={formSubmitHandler}>
            <input type="text" {...register('id')}/>
            <div className="form-row d-flex align-items-end">
                <div className="form-group col-md-3">
                    <label>Name</label>
                    <input type="text"
                           className="form-control"
                           {...register('name', {required: true})}
                    />
                    {errors.name && "Name is required"}

                </div>
                <div className="form-group col-md-3">
                    <label>Category:</label>
                    <div className="input-group">
                        <select  {...register('category', {required: true})}
                                 className="form-control">
                            {CATEGORIES.map(category => (
                                <option value={category} key={category}>{category}</option>
                            ))}
                        </select>
                        {errors.category && "Category is required"}
                    </div>
                </div>
                <div className="form-group col-md-4">
                    <label>Content</label>
                    <input type="text"
                           {...register('content', {required: true})}
                           className="form-control"/>
                    {errors.content && "Content is required"}
                </div>
                <div className="form-group col-md-1">
                    <button type="submit" className="btn btn-light">Save</button>
                </div>
            </div>
        </form>
    )
}