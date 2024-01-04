import {
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
} from "../actions/songActions";

const initialState = {
  songs: [],
  loading: false,
  error: null,
};

export default function songReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SONGS_REQUEST:
    case ADD_SONG_REQUEST:
    case UPDATE_SONG_REQUEST:
    case REMOVE_SONG_REQUEST:
    case CREATE_NEW_SONG_REQUEST:
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

    case UPDATE_SONG_SUCCESS:
      const updatedSong = action.payload;
      const updatedSongs = state.songs.map((song) =>
        song.id === updatedSong.id ? updatedSong : song
      );

      return {
        ...state,
        songs: updatedSongs,
        loading: false,
        error: null,
      };

    case REMOVE_SONG_SUCCESS:
      const removedSongId = action.payload;
      const filteredSongs = state.songs.filter(
        (song) => song.id !== removedSongId
      );

      return {
        ...state,
        songs: filteredSongs,
        loading: false,
        error: null,
      };

    case CREATE_NEW_SONG_SUCCESS:
      const newSong = action.payload;

      return {
        ...state,
        songs: [...state.songs, newSong],
        loading: false,
        error: null,
      };

    case FETCH_SONGS_FAILURE:
    case ADD_SONG_FAILURE:
    case UPDATE_SONG_FAILURE:
    case REMOVE_SONG_FAILURE:
    case CREATE_NEW_SONG_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
