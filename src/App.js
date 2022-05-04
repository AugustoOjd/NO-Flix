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

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Banner/>
      <BannerTop/>

      <Routes>
          <Route path="/" index element={<AllMovies/>}>
            
          </Route>
          <Route path="/:categoria" element={ <FiltroMovies/>}>
          
          </Route>
      </Routes>

      {/* SE tiene que agregar secciones:: home -- categorias/:categoria (accion, terror, animada) -- pelicula/info/:id  */}
      

      {/* Container info */}

      {/* <MovieInfoContainer/> */}

      <Footer/>

    </Router>
    </>
  );
}

export default App;
