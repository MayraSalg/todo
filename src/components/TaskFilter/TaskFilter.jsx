import React from 'react';

export default function TasksFilterItem ({filterCompleted,filterActive,filterAll}) {

        return (
            <ul className="filters">
                <li>
                    <button onClick={() =>filterAll()}>All</button>
                </li>
                <li>
                    <button onClick={() => filterActive()}>Active</button>
                </li>
                <li>
                    <button onClick={() =>filterCompleted()}>Completed</button>
                </li>
            </ul>
        );

}