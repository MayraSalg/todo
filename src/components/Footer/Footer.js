import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TasksFilterItem from '../TaskFilter/TaskFilter';

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="footer">
                <span className="todo-count">{this.props.doneCounter}</span>
                <TasksFilterItem
                    filterCompleted={this.props.filterCompleted}
                    filterAll={this.props.filterAll}
                    filterActive={this.props.filterActive}
                />
                <button
                    onClick={() => this.props.deleteAllCompletedTask(this.props.name)}
                    className="clear-completed"
                >
                    Clear completed
                </button>
            </footer>
        );
    }
}
Footer.defaultProps = {
    doneCounter: 0,
};
Footer.propTypes = {
    doneCounter: PropTypes.number,
    deleteAllCompletedTask: PropTypes.func,
    name: PropTypes.object,
};