import Item from './Item';
import { Task } from '../data/TaskDto'

// propsで渡されるデータを宣言
type Props = {
    tasks: Task[]
    deleteTodo: (id: string) => void
}

// Listコンポーネント
const List: React.FC<Props> = ({ tasks, deleteTodo }) => {
    return (
        <ul>
            {tasks.map(task => (
                <Item
                    key={task.id}
                    task={task}
                    deleteTodo={deleteTodo}
                />
            ))}
        </ul>
    )
}

export default List;
