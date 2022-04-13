import React, {useEffect} from "react";
import {CATEGORIES} from "../../store/constants";
import {useForm} from "react-hook-form";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";

interface IFormInputs {
    id: null | String,
    name: string,
    category: string,
    content: string
}

export const NoteForm: React.FC = () => {
    const {register, handleSubmit, formState: {errors}, getValues, setValue, reset} = useForm<IFormInputs>()
    const {createNote, updateNote} = useActions()
    const {noteForEdit} = useTypedSelector(state => state)

    useEffect(() => {
        reset()
        if (noteForEdit?.id) {
            setValue('name', noteForEdit.name);
            setValue('category', noteForEdit.category);
            setValue('content', noteForEdit.content);
        }
    }, [noteForEdit, setValue, reset])

    const formSubmitHandler = handleSubmit((data, e) => {
        const name = getValues('name')
        const category = getValues('category')
        const content = getValues('content')


        noteForEdit?.id
            ? updateNote({
                ...noteForEdit,
                name,
                category,
                content
            })
            : createNote({
                name,
                category,
                content
            })

        reset()
    })


    return (
        <form className="margin-bottom-0" onSubmit={formSubmitHandler}>
            <div className="form-row d-flex align-items-top">
                <div className="form-group col-md-3">
                    <label>Name</label>
                    <input type="text"
                           className={"form-control" + (errors.name ? " is-invalid" : "")}
                           {...register('name', {required: true})}
                    />
                    {errors.name && (<p className="text-danger">Name is required</p>)}

                </div>
                <div className="form-group col-md-3">
                    <label>Category:</label>
                    <div className="input-group">
                        <select  {...register('category', {required: true})}
                                 className={"form-control" + (errors.category ? " is-invalid" : "")}>
                            {CATEGORIES.map(category => (
                                <option value={category} key={category}>{category}</option>
                            ))}
                        </select>
                        {errors.category && (<p className="text-danger">Category is required</p>)}
                    </div>
                </div>
                <div className="form-group col-md-4">
                    <label>Content</label>
                    <input type="text"
                           {...register('content', {required: true})}
                           className={"form-control" + (errors.content ? " is-invalid" : "")}/>
                    {errors.content && (<p className="text-danger">Content is required</p>)}
                </div>
                <div className="form-group col-md-1 mt-4 pt-2">
                    <button type="submit" className="btn btn-light">Save</button>
                </div>
            </div>
        </form>
    )
}