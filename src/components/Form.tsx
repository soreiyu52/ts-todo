import React, { useState, FormEvent } from "react"
import { Task } from "../data/TaskDto";

// propsで渡されるデータを宣言
type Props = {
    addTodo: (content: string) => void;
}

// Formコンポーネント
const Form: React.FC<Props> = ({ addTodo }) => {
    const [value, setValue] = useState<string>('');

    // submit時に実行する関数
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        addTodo(value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                onChange={e => {
                    setValue(e.target.value);
                }}
            />
            <button>submit</button>
        </form>
    )
}

export default Form;
