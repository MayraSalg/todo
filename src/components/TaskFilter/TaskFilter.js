import React, { Component } from 'react';

export default function TasksFilterItem (props) {

        return (
            <ul className="filters">
                <li>
                    <button onClick={() => props.filterAll()}>All</button>
                </li>
                <li>
                    <button onClick={() => props.filterActive()}>Active</button>
                </li>
                <li>
                    <button onClick={() => props.filterCompleted()}>Completed</button>
                </li>
            </ul>
        );

}