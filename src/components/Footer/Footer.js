import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TasksFilterItem from '../TaskFilter/TaskFilter';

export default function Footer (props) {
    return (
        <footer className="footer">
            <span className="todo-count">{props.doneCounter}</span>
            <TasksFilterItem
                filterCompleted={props.filterCompleted}
                filterAll={props.filterAll}
                filterActive={props.filterActive}
            />
            <button
                onClick={() => props.deleteAllCompletedTask(props.name)}
                className="clear-completed"
            >
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