import {Suspense} from 'react'
import {HomeView,Movies,MovieDetail,Cast,Revievs,NotFound,} from './hooks/Lazy'
import { Route, Routes } from "react-router-dom";
import Layout from "./component/Layout/Layout";

export  function App() {
  return (
    <Suspense fallback={<div>Loading</div>}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="movies" element={<Movies />}/>
        <Route path="movies/:moviesId" element={<MovieDetail />}>
          <Route path="cast" element={<Cast />} />
          <Route path="revievs" element={<Revievs />}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Route>
      </Routes>
      </Suspense>
  );
}


