import React, { useState } from 'react';

// propsで渡されるデータを宣言
type Props = {
    id: string
    content: string
    deleteTodo: (id: string) => void
}

const Item: React.FC<Props> = ({ id, content, deleteTodo }) => {
    const [isDone, setIsDone] = useState(false)

    const handleDelete = () => {
        deleteTodo(id)
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
                {content}
            </span>
            <button onClick={handleDelete}>削除</button>
        </li>
    )
}

export default Item;
