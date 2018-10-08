// actions
let nextTodoId = 0;
export const addTodo = content => ({
  type: "todos/ADD_TODO",
  payload: {
    id: ++nextTodoId,
    content,
  },
});

export const toggleTodo = id => ({
  type: "todos/TOGGLE_TODO",
  payload: { id },
});

export const setFilter = filter => ({
  type: "visibilityFilter/SET_FILTER",
  payload: { filter },
});