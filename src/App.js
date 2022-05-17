import AllMovies from "./components/AllMovies";
import Banner from "./components/Banner";
import BannerTop from "./components/BannerTop";
import Footer from "./components/Footer";
import MovieInfoContainer from "./components/MovieInfoContainer";
import FiltroMovies from "./components/FiltroMovies";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Favorites from "./components/Favorites";



function App() {
  return (
    <>
    <Router>
      

      <Banner/>
      <BannerTop/>
      <Routes>
          <Route path="/" index element={<AllMovies/>} />
            

          <Route path="/:categoria" element={ <FiltroMovies/>}/>
          
          <Route path="/favoritas" element={ <Favorites/>}/>

          <Route path="/info/:id" element={ <MovieInfoContainer/>} />
      </Routes>
      <Navbar/>
      <Footer/>
      

    </Router>
    </>
  );
}

export default App;
