import React, { useState, useContext,useEffect } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';


export default function NewTaskForm(props){
    let [label,setLabel] = useState("")
    let addItem = props
    const [time, setTime] = useState({ min: '', sec: '' });

    let onLabelChange = (e) => {
        setLabel(label = e.target.value)

    }

    let onSubmit = (e) => {
        e.preventDefault()
        addItem(label)
        setLabel(label = '')
    }

    return (
        <form onSubmit={onSubmit} className="new-todo-form">
            <input
                className="new-todo"
                placeholder="What needs to be done?"
                autoFocus
                onChange={onLabelChange}
                value={label}
            />
            <input className="new-todo-form__timer" placeholder="Min" autoFocus />
            <input className="new-todo-form__timer" placeholder="Sec" autoFocus />
        </form>
    )
}