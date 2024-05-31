export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SORT_TODOS = 'SORT_TODOS';

export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: text,
});

export const toggleTodo = (index) => ({
    type: TOGGLE_TODO,
    payload: index,
});

export const sortTodos = (sortType) => ({
    type: SORT_TODOS,
    payload: sortType,
});
