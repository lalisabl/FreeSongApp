import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SongList from "../../components/SongList/SongList";

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
