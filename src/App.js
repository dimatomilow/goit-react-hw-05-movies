import { Route,Routes } from "react-router-dom";
import Layout from "./component/Layout/Layout";
import HomeView from "./vievs/HomeView";
import Movies from "./vievs/Movies";
import MovieDetail from './vievs/MovieDetail'
import Cast from './vievs/Cast'
import Revievs from './vievs/Revievs.jsx'
import NotFound from "./vievs/NotFound";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="movies" element={<Movies />}/>
        <Route path="movies/:moviesId" element={<MovieDetail />}>
          <Route path="Cast" element={<Cast />} />
          <Route path="revievs" element={<Revievs />}/>
        </Route>

        <Route path="*" element={<NotFound/>}/>
      </Route>
</Routes>
  );
}


