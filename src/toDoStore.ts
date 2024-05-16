import create from 'zustand';

export interface Todo {
    id: number;
    text: string;
}

interface TodoState {
    todos: Todo[];
    nextId: number;
    addTodo: (text: string) => void;
    removeTodo: (id: number) => void;
}

export const useTodoStore = create<TodoState>((set) => ({
    todos: [],
    nextId: 1,
    addTodo: (text: string) => {
        set((state) => ({
            todos: [...state.todos, { id: state.nextId, text }],
            nextId: state.nextId + 1,
        }));
    },
    removeTodo: (id: number) => {
        set((state) => ({
            todos: state.todos.filter(todo => todo.id !== id)
        }));
    }
}));
