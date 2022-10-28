import React, {useState, useContext, useEffect} from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import {Context} from "../Context/Context";

export default function NewTaskForm() {
    let [label, setLabel] = useState("")
    let {addItem} = React.useContext(Context);

    let onLabelChange = (e) => {
        setLabel(e.target.value)

    }

    let onSubmit = (e) => {
        e.preventDefault()
        addItem(label)
        setLabel('')
    }

    return (
        <Context.Provider value={label}>
            <form onSubmit={onSubmit} className="new-todo-form">
                <input
                    className="new-todo"
                    placeholder="What needs to be done?"
                    autoFocus
                    onChange={onLabelChange}
                    value={label}
                />

            </form>
        </Context.Provider>

    )
}