import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import songReducer from "./reducers/songReducer";
import rootSaga from "./sagas/rootSaga";

// Combine reducers
const rootReducer = combineReducers({
  songs: songReducer,
  // Add other reducers here if needed
});

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create the Redux store with middleware
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Run the root saga if using sagas
sagaMiddleware.run(rootSaga);

export default store;
