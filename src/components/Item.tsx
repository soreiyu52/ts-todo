import React, { useState } from 'react';
import { TodoProps } from '../data/TodoPropsDto';
import { Task } from '../data/TaskDto';

// TOdoPropsを継承してList用のPropsを作成
interface ItemProps extends TodoProps {
    task: Task;
}

const Item: React.FC<ItemProps> = ({ task, deleteTodo }) => {
    const [isDone, setIsDone] = useState(false);

    // delete時に実行する関数
    const handleDelete = () => {
        deleteTodo(task.id);
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
