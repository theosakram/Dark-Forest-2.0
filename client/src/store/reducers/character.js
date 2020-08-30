const initialState = {
  characters: [],
  oneCharacter: {},
  loading: false,
  error: null,
};

function character(state = initialState, action) {
  switch (action.type) {
    case "SET_CHARACTERS":
      return {
        ...state,
        characters: action.payload,
      };

    case "SET_ONE_CHARACTER":
      return {
        ...state,
        oneCharacter: action.payload,
      };

    case "SET_LOADING_TRUE":
      return {
        ...state,
        loading: true,
      };

    case "SET_LOADING_FALSE":
      return {
        ...state,
        loading: false,
      };

    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}

export default character;
