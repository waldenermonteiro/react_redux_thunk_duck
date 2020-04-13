import axios from "axios";
//action types
const IS_FETCHING = "IS_FETCHING";
const FETCHED = "FETCHED";
const FETCHED_ERROR = "FETCHED_ERROR";
//action creators
export function isFetching(bool) {
  return {
    type: IS_FETCHING,
    isLoading: bool,
  };
}
export function fetchedError(err) {
  return {
    type: FETCHED_ERROR,
    error: err,
  };
}
export function fetched(data) {
  console.log(data);
  return {
    type: FETCHED,
    data,
  };
}
//reducers
const initialState = {
  isLoading: false,
  data: [],
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case IS_FETCHING:
      return { ...state, isLoading: action.isLoading };
    case FETCHED:
      return  { ...state, data: action.data };
    case FETCHED_ERROR:
      return action.error;
    default:
      return state;
  }
}
//thunks
export function thunkFetchData() {
  return async (dispatch) => {
    dispatch(isFetching(true));
    try {
      const { data } = await axios.get("http://api.icndb.com/jokes/");
      dispatch(fetched(data.value));
      dispatch(isFetching(false));
    } catch (error) {
      dispatch(fetchedError(error));
      dispatch(isFetching(false));
    }
  };
}
