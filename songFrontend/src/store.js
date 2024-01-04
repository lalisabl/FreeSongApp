import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import songReducer from "./reducers/songReducer";
import rootSaga from "./sagas/rootSaga";
export {
  FETCH_SONGS_REQUEST,
  FETCH_SONGS_SUCCESS,
  FETCH_SONGS_FAILURE,
  ADD_SONG_REQUEST,
  ADD_SONG_SUCCESS,
  ADD_SONG_FAILURE,
  UPDATE_SONG_REQUEST,
  UPDATE_SONG_SUCCESS,
  UPDATE_SONG_FAILURE,
  REMOVE_SONG_REQUEST,
  REMOVE_SONG_SUCCESS,
  REMOVE_SONG_FAILURE,
  CREATE_NEW_SONG_REQUEST,
  CREATE_NEW_SONG_SUCCESS,
  CREATE_NEW_SONG_FAILURE,
} from "./actions/songActions";

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
