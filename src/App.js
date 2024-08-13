import "./App.css";

//routers
import { Routes, Route } from "react-router-dom";

//React slick(copy paste in this website)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Pages
import PlayPage from './pages/Play.page';
import MoviePage from './pages/Movie.page';
import HomePage from './pages/Home.page';



function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MoviePage />} />
      <Route path="/plays" element={<PlayPage />} />
    </Routes>
  );
}

export default App;
