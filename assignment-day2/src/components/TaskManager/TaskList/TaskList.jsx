import React from 'react'
import { ListGroup } from 'reactstrap'

import TaskItem from './TaskItem/TaskItem.jsx'

const TaskList = (props) => {

    const { tasks } = props

    if (tasks.length === 0) {
        return <p>No Tasks to Show.</p>
    }

    return (
        <ListGroup>
            {tasks.map(t => <TaskItem key={t.id} task={t} />)}
        </ListGroup>
    )
}

export default TaskList