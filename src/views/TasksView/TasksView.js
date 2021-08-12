import React from 'react';
import { Tasks } from '../../components/Tasks/Tasks';
import { taskAPI } from '../../data/taskAPI';


export const TasksView = () => {
    return (
        <>
            {taskAPI.map(e =>
                <Tasks
                    id={e.value}
                    date={e.date}
                    value={e.value}
                />
            )}
        </>
    )
}