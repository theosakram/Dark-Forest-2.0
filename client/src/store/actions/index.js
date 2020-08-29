import Axios from "axios";

const setCharacters = (data) => {
  return { type: "SET_CHARACTERS", payload: data };
};

const setLoadingTrue = () => {
  return { type: "SET_LOADING_TRUE" };
};

const setLoadingFalse = () => {
  return { type: "SET_LOADING_FALSE" };
};

const setError = (message) => {
  return { type: "SET_ERROR", payload: message };
};

export const fetchChracters = (url) => {
  return async (dispatch) => {
    dispatch(setLoadingTrue());
    dispatch(setCharacters([]));
    try {
      const result = await Axios.get(url);
      console.log(result);
    } catch (err) {
      dispatch(setError(err.message));
    } finally {
      dispatch(setLoadingFalse());
    }
  };
};
