import {Ul,Li,MovieLink,Img,Title} from '../component/Styles/filmList.styles'

import { popularMovies } from '../servises/ServisTMDB'

import {useEffect,useState} from 'react'
export default function HomeViev() {
const[movies,setMovies]=useState(null)

    useEffect(() => {
        popularMovies().then(setMovies);
    },[])
    return <Ul>
        {movies && movies.map(({ id, poster_path, title }) => <Li key={id}><MovieLink to={`/movies/${id}`}><Img src={`https://image.tmdb.org/t/p/w500/${poster_path} `} alt={title}  /><Title>{ title}</Title></MovieLink></Li>)}
</Ul>
}