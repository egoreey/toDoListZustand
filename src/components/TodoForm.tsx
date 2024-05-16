import React, { useState } from 'react';
import {useTodoStore} from "../toDoStore.ts";

const TodoForm: React.FC = () => {
    const [text, setText] = useState<string>('');
    const addTodo = useTodoStore(state => state.addTodo);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!text.trim()) return;
        addTodo(text);
        setText('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Добавить задание"
                />
                <button type="submit">Добавить</button>
            </form>
        </div>
    );
};

export default TodoForm;
