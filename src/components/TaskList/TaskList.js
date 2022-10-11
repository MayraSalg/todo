import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Task from '../Task/Task';


export default function TaskList (props){
        let taskList = props

        const taskNames = taskList.map((item) => {
            const onDelete = () => {
                document.getElementById(`${item.id}`).style.display = 'none';
                const index = taskList.indexOf(item);
                if (index !== -1) {
                    taskList.splice(index, 1);
                }
                props.counter.call();
            };

            const onComplete = (id) => {
                const index = taskList.findIndex((item) => item.id === id);
                taskList[index].completed = !taskList[index].completed;
                props.counter.call();
            }

            return (
                <section className="main" key={item.id} id={`${item.id}`}>
                    <ul className="todo-list">
                        <Task
                            {...item}
                            name={item.name}
                            id={item.id}
                            onDelete={onDelete}
                            onComplete={onComplete}
                            date={props.date}
                        />
                    </ul>
                </section>

            );
        });
        return <div>{taskNames}</div>;
}

TaskList.defaultProps = {
    date: Date.now(),
    taskList: [],
    oncomplete: false,
};
TaskList.propTypes = {
    taskList: PropTypes.array,
    onDelete: PropTypes.func,
    onComplete: PropTypes.func,
    date: PropTypes.func,
    id: PropTypes.number,
};