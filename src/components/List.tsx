import Item from './Item';
import { TodoProps } from '../data/TodoPropsDto';
import { Task } from '../data/TaskDto';

// TOdoPropsを継承してList用のPropsを作成
interface ListProps extends TodoProps {
    tasks: Task[];
}

// Listコンポーネント
const List: React.FC<ListProps> = ({ tasks, deleteTodo }) => {
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
