import React, { useState } from 'react'
import { ListGroupItem, Button } from 'reactstrap'

const TaskItem = (props) => {

    const { task } = props  
    const [cSelected, setCSelected] = useState([]);

    const onCheckboxBtnClick = (selected) => {
        const index = cSelected.indexOf(selected);
        if (index < 0) {
          cSelected.push(selected);
        } else {
          cSelected.splice(index, 1);
        }
        setCSelected([...cSelected]);
    }

    return (
        <ListGroupItem>
            <input type="checkbox" onClick={() => onCheckboxBtnClick(task.id)}/>&nbsp;
            {task.title}
            <Button close />
        </ListGroupItem>
    )
}

export default TaskItem