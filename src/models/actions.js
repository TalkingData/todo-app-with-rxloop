// actions
let nextTodoId = 0;
export const addTodo2 = content => ({
  type: "todos/ADD_TODO",
  payload: {
    id: ++nextTodoId,
    content,
  },
});

export const toggleTodo2 = id => ({
  type: "todos/TOGGLE_TODO",
  payload: { id },
});

export const setFilter2 = filter => ({
  type: "visibilityFilter/SET_FILTER",
  payload: { filter },
});