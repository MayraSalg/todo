import React, { Component } from 'react';

export default class TasksFilterItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className="filters">
                <li>
                    <button onClick={() => this.props.filterAll()}>All</button>
                    {/* className="selected" */}
                </li>
                <li>
                    <button onClick={() => this.props.filterActive()}>Active</button>
                </li>
                <li>
                    <button onClick={() => this.props.filterCompleted()}>
                        Completed
                    </button>
                </li>
            </ul>
        );
    }
}