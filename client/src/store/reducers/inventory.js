const initalState = {
  inventory: [],
  loading: false,
  error: null,
};

function invents(state = initalState, action) {
  switch (action.type) {
    case "SET_INVENTORY":
      return {
        ...state,
        inventory: [...state.inventory, action.payload],
      };

    default:
      return state;
  }
}

export default invents;
