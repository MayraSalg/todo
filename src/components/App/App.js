import React, { useState, useContext,useEffect } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import TaskList from '../TaskList/TaskList';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
import Footer from '../Footer/Footer';


export default function App () {
    let [maxId,setMaxID] = useState(10)
    let [doneCounter,setDoneCounter] = useState(0)
    let [taskList,setTaskList ]= useState([])
    let completed = useState(false)
    let taskListContext = React.createContext(taskList)

    let createTodoItem = (name) => {
        setMaxID(maxId = maxId + 1)
        return {
            name,
            id : maxId,
        };
    }

    let addItem = (name) => {
        const newItem = createTodoItem(name);
        const newArr = [...taskList, newItem];
        return  setDoneCounter(doneCounter + 1);
    }

    let counter = () => {
        const doneFilter = taskList.filter(
            (item) => item !== completed
        ).length;
        /*this.setState(() => ({
            doneCounter: taskList.length - doneFilter,
        }));*/
        setDoneCounter(taskList.length - doneFilter)
    }

    let deleteAllCompletedTasks = () => {
        /*this.setState(({ taskList }) => {
            const arr = taskList.filter((item) => !item.completed);
            return { taskList: arr };
        });*/
        const arr = taskList.filter((item) => !item.completed);
        setTaskList(taskList = arr)

    }

    let filterCompleted = () => {
        filterAll();
        const c = taskList.filter((item) => !item.completed);
        c.map((it) => {
            return (document.getElementById(`${it.id}`).style.display = 'none');
        });
    }

    let date = () => {
        const date = new Date();
        return formatDistanceToNow(date, new Date(), { addSuffix: true });
    }

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
        <section className="todoapp">
        <taskListContext.Provider value={taskList}>
            <header className="header">
                <h1>todos</h1>
                <NewTaskForm addItem={addItem} />
            </header>
            <TaskList
                taskList={taskList}
                value={taskList}
                counter={counter}
                date={date}
            />
            <Footer
                doneCounter={doneCounter}
                deleteAllCompletedTask={deleteAllCompletedTasks}
                taskList={taskList}
                filterCompleted={filterCompleted}
                filterAll={filterAll}
                filterActive={filterActive}
            />
        </taskListContext.Provider>
        </section>
    )
}
