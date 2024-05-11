import React, { useState } from 'react';

function App() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [sortBy, setSortBy] = useState(null);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddTodo = () => {
        if (inputValue.trim() !== '') {
            setTodos([...todos, { text: inputValue, completed: false }]);
            setInputValue('');
        }
    };

    const toggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    const sortTodos = (type) => {
        let sortedTodos = [...todos];
        if (type === 'completed') {
            sortedTodos.sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1));
        } else if (type === 'alphabetical') {
            sortedTodos.sort((a, b) => a.text.localeCompare(b.text));
        }
        setSortBy(type);
        setTodos(sortedTodos);
    };

    return (
        <div className="todo-list">
            <h1>Todo List</h1>
            <div>
                <button onClick={() => sortTodos('completed')}>Сортирувати по задачам</button>
                <button onClick={() => sortTodos('alphabetical')}>Сортирувати по алфавіту</button>
            </div>
            <ul>
                {todos.map((todo, index) => (
                    <li
                        key={index}
                        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                        onClick={() => toggleTodo(index)}
                    >
                        {todo.text}
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
