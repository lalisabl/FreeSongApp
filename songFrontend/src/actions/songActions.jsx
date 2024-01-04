export const FETCH_SONGS_REQUEST = "FETCH_SONGS_REQUEST";
export const FETCH_SONGS_SUCCESS = "FETCH_SONGS_SUCCESS";
export const FETCH_SONGS_FAILURE = "FETCH_SONGS_FAILURE";

export const ADD_SONG_REQUEST = "ADD_SONG_REQUEST";
export const ADD_SONG_SUCCESS = "ADD_SONG_SUCCESS";
export const ADD_SONG_FAILURE = "ADD_SONG_FAILURE";

export const fetchSongsRequest = () => ({
  type: FETCH_SONGS_REQUEST,
});

export const fetchSongsSuccess = (songs) => ({
  type: FETCH_SONGS_SUCCESS,
  payload: songs,
});

export const fetchSongsFailure = (error) => ({
  type: FETCH_SONGS_FAILURE,
  payload: error,
});

export const addSongRequest = (song) => ({
  type: ADD_SONG_REQUEST,
  payload: song,
});

export const addSongSuccess = (song) => ({
  type: ADD_SONG_SUCCESS,
  payload: song,
});

export const addSongFailure = (error) => ({
  type: ADD_SONG_FAILURE,
  payload: error,
});
