import { ADD_TODO, TOGGLE_TODO, SORT_TODOS } from './actions';

const initialState = {
    todos: [],
    sortBy: null,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, { text: action.payload, completed: false }],
            };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, index) =>
                    index === action.payload
                        ? { ...todo, completed: !todo.completed }
                        : todo
                ),
            };
        case SORT_TODOS:
            let sortedTodos = [...state.todos];
            if (action.payload === 'completed') {
                sortedTodos.sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1));
            } else if (action.payload === 'alphabetical') {
                sortedTodos.sort((a, b) => a.text.localeCompare(b.text));
            }
            return {
                ...state,
                todos: sortedTodos,
                sortBy: action.payload,
            };
        default:
            return state;
    }
};

export default rootReducer;
