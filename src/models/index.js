import rxloop from "@rxloop/core";

const app = rxloop();

app.model({
  name: 'todos',
  state: {
    allIds: [],
    byIds: {},
  },
  reducers: {
    ADD_TODO(state, action) {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false
          }
        }
      };
    },
    TOGGLE_TODO(state, action) {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed
          }
        }
      };
    },
  }
});

app.model({
  name: 'visibilityFilter',
  state: 'all',
  reducers: {
    SET_FILTER(...args) {
      return args[1].payload.filter;
    },
  },
});

export default app;
