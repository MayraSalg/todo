import React, { useState, useContext,useEffect } from 'react';
import TaskList from '../TaskList/TaskList';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
import Footer from '../Footer/Footer';
import {Context} from "../Context/Context";

export default function App () {

    let [Id,setId] = useState(0)
    let [doneCounter,setDoneCounter] = useState(0)
    let [taskList,setTaskList ]= useState([])
    let [completed,setCompleted]=useState(false)

    let addItem = (text) => {
    const newItem = {
        text,
        id: Id
    };
    setId(Id + 1);
    setTaskList([...taskList, newItem]);
    setDoneCounter(doneCounter = doneCounter + 1)

    }

    /*let deleteAllCompletedTasks = () => {
        //const arr = taskList.filter((item) =>!item.completed );
        //return setTaskList(taskList.filter((item) =>!item.completed ))
        console.log("I`m alive")
    }*/

    function deleteAllCompletedTask() {
        return setTaskList(taskList.filter((item) =>!item.completed ))
    }

    let filterCompleted = () => {
        filterAll();
        const c = taskList.filter((item) => !item.completed);
        c.map((it) => {
            return (document.getElementById(`${it.id}`).style.display = 'none');
        });
    }

    /*let date = () => {
        const date = new Date();
        return formatDistanceToNow(date, new Date(), { addSuffix: true });
    }*/

    let filterAll = () => {
       taskList.map((it) => {
            return (document.getElementById(`${it.id}`).style.display = "inline");
        });
    }

    let filterActive = () => {
        filterAll();
        const c = taskList.filter((item) => item.completed);
        c.map((it) => {
            return (document.getElementById(`${it.id}`).style.display = 'none');
        });
    }
    return (
        <Context.Provider value={{ taskList, addItem, deleteAllCompletedTask,Id,doneCounter,
                                    filterActive,filterAll,filterCompleted,setDoneCounter,
                                    completed,setCompleted}}>
        <section className="todoapp">
            <header className="header">
                <h1>todos</h1>
                <NewTaskForm/>
            </header>
            <TaskList />
            <Footer/>
        </section>
        </Context.Provider>
    )
}
