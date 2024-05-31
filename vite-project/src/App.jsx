import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, sortTodos, deleteTodo } from './actions';

function App() {
    const [inputValue, setInputValue] = useState('');
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddTodo = () => {
        if (inputValue.trim() !== '') {
            dispatch(addTodo(inputValue));
            setInputValue('');
        }
    };

    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id));
    };

    return (
        <div className="todo-list">
            <h1>Todo List</h1>
            <div>
                <button onClick={() => dispatch(sortTodos('completed'))}>Сортирувати по задачам</button>
                <button onClick={() => dispatch(sortTodos('alphabetical'))}>Сортирувати по алфавіту</button>
            </div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span
                            style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
                            onClick={() => dispatch(toggleTodo(todo.id))}
                        >
                            {todo.text}
                        </span>
                        <button onClick={() => handleDeleteTodo(todo.id)}>Видалити</button>
                    </li>
                ))}
            </ul>
            <div>
                <input type="text" value={inputValue} onChange={handleInputChange} />
                <button onClick={handleAddTodo}>Додати задачу</button>
            </div>
        </div>
    );
}

export default App;
