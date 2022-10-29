import React, {useState, useContext, useEffect} from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import {Context} from "../Context/Context";

export default function NewTaskForm() {
    const initialValues = {
        todo: '',
        min: 0,
        sec: 0
    };
    const [values, setValues] = useState(initialValues);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    let {addItem} = React.useContext(Context);

    let onSubmit = (e) => {
        console.log(values)
        e.preventDefault()
        addItem(values)
        setValues(initialValues)
    }

    return (
        <form className="new-todo-form">
            <input
                className="new-todo"
                placeholder="What needs to be done?"
                autoFocus
                onChange={handleInputChange}
                name="todo"
                value={values.todo}
                onKeyDown={
                    (e) => {
                        if (e.code == 'Enter') {
                            onSubmit(e)
                        }
                    }
                }
            />
            <input
                className="new-todo-form__timer"
                placeholder="Min"
                autoFocus
                onChange={handleInputChange}
                name="min"
                value={values.min}
                onKeyDown={
                    (e) => {
                        if (e.code == 'Enter') {
                            onSubmit(e)
                        }
                    }
                }
            />
            <input
                className="new-todo-form__timer"
                placeholder="Sec"
                autoFocus
                onChange={handleInputChange}
                name="sec"
                value={values.sec}
                onKeyDown={
                    (e) => {
                        if (e.code == 'Enter') {
                            onSubmit(e)
                        }
                    }
                }
            />
        </form>
    )
}