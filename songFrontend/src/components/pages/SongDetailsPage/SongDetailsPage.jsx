import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import SongForm from "./SongForm";
import { updateSong, removeSong } from "../../../actions/songActions";

const SongDetails = () => {
  const { songId } = useParams();
  const dispatch = useDispatch();
  const song = useSelector((state) =>
    state.songs.find((s) => s.id === parseInt(songId))
  );

  const handleUpdate = (updatedSong) => {
    // Dispatch an action to update the song
    dispatch(updateSong(updatedSong));
  };

  const handleRemove = () => {
    // Dispatch an action to remove the song
    dispatch(removeSong(songId));
  };

  if (!song) {
    return <p>Song not found.</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="song-details-container">
        <div className="sidebar">
          <h2>Song Actions</h2>
          <button onClick={handleRemove}>Remove Song</button>
        </div>
        <div className="main-content">
          <h1>Song Details</h1>
          <div>
            <h2>{song.title}</h2>
            {/* Display other song details here */}
          </div>
          <SongForm song={song} onUpdate={handleUpdate} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SongDetails;
