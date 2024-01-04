// src/reducers/songReducer.js
import {
  FETCH_SONGS_REQUEST,
  FETCH_SONGS_SUCCESS,
  FETCH_SONGS_FAILURE,
  ADD_SONG_REQUEST,
  ADD_SONG_SUCCESS,
  ADD_SONG_FAILURE,
} from "../actions/songActions";

const initialState = {
  songs: [],
  loading: false,
  error: null,
};

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SONGS_REQUEST:
    case ADD_SONG_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_SONGS_SUCCESS:
      return {
        ...state,
        songs: action.payload,
        loading: false,
        error: null,
      };

    case ADD_SONG_SUCCESS:
      return {
        ...state,
        songs: [...state.songs, action.payload],
        loading: false,
        error: null,
      };

    case FETCH_SONGS_FAILURE:
    case ADD_SONG_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default songReducer;
