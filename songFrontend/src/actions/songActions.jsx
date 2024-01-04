export const FETCH_SONGS_REQUEST = "FETCH_SONGS_REQUEST";
export const FETCH_SONGS_SUCCESS = "FETCH_SONGS_SUCCESS";
export const FETCH_SONGS_FAILURE = "FETCH_SONGS_FAILURE";

export const ADD_SONG_REQUEST = "ADD_SONG_REQUEST";
export const ADD_SONG_SUCCESS = "ADD_SONG_SUCCESS";
export const ADD_SONG_FAILURE = "ADD_SONG_FAILURE";

export const UPDATE_SONG_REQUEST = "UPDATE_SONG_REQUEST";
export const UPDATE_SONG_SUCCESS = "UPDATE_SONG_SUCCESS";
export const UPDATE_SONG_FAILURE = "UPDATE_SONG_FAILURE";

export const REMOVE_SONG_REQUEST = "REMOVE_SONG_REQUEST";
export const REMOVE_SONG_SUCCESS = "REMOVE_SONG_SUCCESS";
export const REMOVE_SONG_FAILURE = "REMOVE_SONG_FAILURE";

export const CREATE_NEW_SONG_REQUEST = "CREATE_NEW_SONG_REQUEST";
export const CREATE_NEW_SONG_SUCCESS = "CREATE_NEW_SONG_SUCCESS";
export const CREATE_NEW_SONG_FAILURE = "CREATE_NEW_SONG_FAILURE";

// Action Creators
export const createNewSongRequest = (newSong) => ({
  type: CREATE_NEW_SONG_REQUEST,
  payload: newSong,
});

export const createNewSongSuccess = (newSong) => ({
  type: CREATE_NEW_SONG_SUCCESS,
  payload: newSong,
});

export const createNewSongFailure = (error) => ({
  type: CREATE_NEW_SONG_FAILURE,
  payload: error,
});

// Action Creators
export const updateSongRequest = (updatedSong) => ({
  type: UPDATE_SONG_REQUEST,
  payload: updatedSong,
});

export const updateSongSuccess = (updatedSong) => ({
  type: UPDATE_SONG_SUCCESS,
  payload: updatedSong,
});

export const updateSongFailure = (error) => ({
  type: UPDATE_SONG_FAILURE,
  payload: error,
});

export const removeSongRequest = (songId) => ({
  type: REMOVE_SONG_REQUEST,
  payload: songId,
});

export const removeSongSuccess = (songId) => ({
  type: REMOVE_SONG_SUCCESS,
  payload: songId,
});

export const removeSongFailure = (error) => ({
  type: REMOVE_SONG_FAILURE,
  payload: error,
});

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
