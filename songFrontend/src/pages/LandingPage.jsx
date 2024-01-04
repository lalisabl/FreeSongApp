import Navbar from "../Navbar/navbar";
import Footer from "../Footer/Footer";
import SongList from "../SongList/SongList";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Welcome to Your App</h1>
        <SongList />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
