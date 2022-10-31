import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TasksFilterItem from '../TaskFilter/TaskFilter';
import {Context} from "../Context/Context";


export default function Footer () {
    let {doneCounter,filterCompleted,filterAll,filterActive,deleteAllCompletedTask} = React.useContext(Context);

    return (
        <footer className="footer">
            <span className="todo-count">{doneCounter}</span>
            <TasksFilterItem
                filterCompleted={filterCompleted}
                filterAll={filterAll}
                filterActive={filterActive}
            />
            <button className="clear-completed" onClick = {  deleteAllCompletedTask}>
                Clear completed
            </button>

        </footer>
    );
}
Footer.defaultProps = {
    doneCounter: 0,
};
Footer.propTypes = {
    doneCounter: PropTypes.number,
    deleteAllCompletedTask: PropTypes.func,
    name: PropTypes.object,
};