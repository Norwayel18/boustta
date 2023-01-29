const allTodos = {
  todos: [
    { id: 0, text: "JavaScript" },
    { id: 1, text: "PHP"},
    { id: 2, text: "Laravel"},
  ],
  filters: {
    status: "All",
    colors: [],
  },
};
export const Reducer = (state = allTodos, action) => {
  switch (action.type) {
    case "Add":
      console.log("addddd");
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos.length,
            text: action.payload,
          },
        ],
      };//case add

    case "Edit":
      console.log("Edit");
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.payload) {
            return todo;
          }
          return {
            ...todo,
            text: action.newTxt,
          };
        }),
      };//case edit

    case "Delete":
      console.log("del");
      return {
        ...state,
        todos: state.todos.map((todo) => {
            if (todo.id === action.payload) {
                return delete state.todos[todo.id];
            }
            console.log("del",state.todos[action.payload]);
          return todo
        }),
      };//case delete

  } //endSwitch
  console.log(state);
  return state;
};
