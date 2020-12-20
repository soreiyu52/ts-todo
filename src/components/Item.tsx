import React, { useState } from 'react';
import { Task } from '../data/TaskDto'

// propsで渡されるデータを宣言
type Props = {
    task: Task
    deleteTodo: (id: string) => void
}

const Item: React.FC<Props> = ({ task, deleteTodo }) => {
    const [isDone, setIsDone] = useState(false)

    const handleDelete = () => {
        deleteTodo(task.id)
    }

    return (
        <li>
            <input
                type='checkbox'
                onChange={() => { setIsDone(!isDone) }}
            />
            <span
                style={{ textDecoration: isDone ? 'line-through' : 'none' }}
            >
                {task.content}
            </span>
            <button onClick={handleDelete}>削除</button>
        </li>
    )
}

export default Item;
