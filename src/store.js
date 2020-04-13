import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import rootReducer from "./reducers";
export default () => {
  const enchanters = applyMiddleware(thunk);

  return createStore(rootReducer, enchanters);
};
// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import rootReducer from "./reducers";

// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

// const configureStore = (initialState) =>
//   createStoreWithMiddleware(rootReducer, initialState);
// export default configureStore;
