import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Task from '../Task/Task';
import {Context} from "../Context/Context";


export default function TaskList (){
    let {taskList,Id,completed,setCompleted,counter,names,setDoneCounter,doneCounter} = React.useContext(Context);
        const taskNames = taskList.map((item,count) => {

           const onDelete = () => {
                document.getElementById(`${item.id}`).style.display = 'none';
                if(item.completed){
                    setDoneCounter(doneCounter = doneCounter + 1)
                }
                const index = taskList.indexOf(item);
                if (index !== -1) {
                 taskList.splice(index, 1)
                 setDoneCounter(doneCounter = doneCounter - 1)
                }

            };

            const onComplete = (id,completed) => {
                const index = taskList.findIndex((item) => item.id === id);
                taskList[index].completed = !taskList[index].completed;

                counter.call();
            }
            let counter = () => {
                /*const doneFilter = taskList.filter(
                    (item) => item !== item.completed
                ).length;

                console.log(taskList.length)
                console.log(doneFilter.length)
                setDoneCounter(doneCounter = taskList.length - doneFilter)*/
                if(item.completed){
                    setDoneCounter(doneCounter = doneCounter - 1)
                } else {
                    setDoneCounter(doneCounter = doneCounter + 1)
                }
            }

            return (
                <Context.Provider value={{ taskList,  completed,setCompleted,Id,names,item,onDelete,onComplete }}>
                <section className="main" key={count} id={`${item.id}`}>
                    <ul className="todo-list">
                        <Task/>
                    </ul>
                </section>

                </Context.Provider>

            );
        });
        return <div>{taskNames}</div>;
}

TaskList.defaultProps = {
    taskList: [],
    oncomplete: false,
};
TaskList.propTypes = {
    taskList: PropTypes.array,
    onDelete: PropTypes.func,
    onComplete: PropTypes.func,
    id: PropTypes.number,
};