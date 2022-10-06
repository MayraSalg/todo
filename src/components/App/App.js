import React, { Component } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import TaskList from '../TaskList/TaskList';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
import Footer from '../Footer/Footer';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.maxId = 10;
        this.state = {
            taskList: [],
            doneCounter: 0,
        };
        this.addItem = this.addItem.bind(this);
        this.counter = this.counter.bind(this);
        this.deleteAllCompletedTasks = this.deleteAllCompletedTasks.bind(this);
        this.filterCompleted = this.filterCompleted.bind(this);
        this.filterAll = this.filterAll.bind(this);
        this.filterActive = this.filterActive.bind(this);
    }

    createTodoItem(name) {
        this.maxId += 1;
        return {
            name,
            completed: false,
            id: this.maxId,
        };
    }

    addItem(name) {
        const newItem = this.createTodoItem(name);
        this.setState(({ taskList, doneCounter }) => {
            const newArr = [...taskList, newItem];
            return {
                doneCounter: doneCounter + 1,
                taskList: newArr,
            };
        });
    }

    counter() {
        const doneFilter = this.state.taskList.filter(
            (item) => item.completed
        ).length;
        this.setState(() => ({
            doneCounter: this.state.taskList.length - doneFilter,
        }));
    }

    deleteAllCompletedTasks() {
        this.setState(({ taskList }) => {
            const arr = taskList.filter((item) => !item.completed);
            return { taskList: arr };
        });
    }

    filterCompleted() {
        this.filterAll();
        const c = this.state.taskList.filter((item) => !item.completed);
        c.map((it) => {
            return (document.getElementById(`${it.id}`).style.display = 'none');
        });
    }

    date() {
        const date = new Date();

        return formatDistanceToNow(date, new Date(), { addSuffix: true });
    }

    filterAll() {
        this.state.taskList.map((it) => {
            return (document.getElementById(`${it.id}`).style.display = "inline");
        });
    }

    filterActive() {
        this.filterAll();
        const c = this.state.taskList.filter((item) => item.completed);
        c.map((it) => {
            return (document.getElementById(`${it.id}`).style.display = 'none');
        });
    }

    render() {
        return (
            <section className="todoapp">
                <header className="header">
                    <h1>todos</h1>
                    <NewTaskForm addItem={this.addItem} />
                </header>
                <TaskList
                    taskList={this.state.taskList}
                    counter={this.counter}
                    date={this.date}
                />
                <Footer
                    doneCounter={this.state.doneCounter}
                    deleteAllCompletedTask={this.deleteAllCompletedTasks}
                    taskList={this.state.taskList}
                    filterCompleted={this.filterCompleted}
                    filterAll={this.filterAll}
                    filterActive={this.filterActive}
                />
            </section>
        );
    }
}