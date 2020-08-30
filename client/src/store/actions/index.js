import Axios from "axios";

const setCharacters = (data) => {
  return { type: "SET_CHARACTERS", payload: data };
};

const setOne = (data) => {
  return { type: "SET_ONE_CHARACTER", payload: data };
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

export const fetchCharacters = (url) => {
  return async (dispatch) => {
    dispatch(setLoadingTrue());
    dispatch(setCharacters([]));
    try {
      const config = {
        method: "get",
        url,
      };

      const { data } = await Axios(config);
      dispatch(setCharacters(data));
    } catch (err) {
      dispatch(setError(err.message));
    } finally {
      dispatch(setLoadingFalse());
    }
  };
};

export const fetchOne = (url) => {
  return async (dispatch) => {
    dispatch(setLoadingTrue());
    dispatch(setCharacters([]));
    try {
      const config = {
        method: "get",
        url,
      };

      const { data } = await Axios(config);
      dispatch(setOne(data));
    } catch (err) {
      dispatch(setError(err.message));
    } finally {
      dispatch(setLoadingFalse());
    }
  };
};
