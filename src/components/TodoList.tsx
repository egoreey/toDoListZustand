import React from 'react';
import {useTodoStore} from "../toDoStore.ts";

const TodoList: React.FC = () => {
    const todos = useTodoStore(state => state.todos);
    const removeTodo = useTodoStore(state => state.removeTodo);

    return (
        <div>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={() => removeTodo(todo.id)}>Удалить</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
