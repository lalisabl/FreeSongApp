// src/components/SongForm.js
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addSongRequest } from "../actions/songActions";

const SongForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch an action to add a new song
    dispatch(addSongRequest({ title }));

    // Clear the input field after submitting
    setTitle("");
  };

  return (
    <div>
      <h2>Add a Song</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Song Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <button type="submit">Add Song</button>
      </form>
    </div>
  );
};

export default SongForm;
