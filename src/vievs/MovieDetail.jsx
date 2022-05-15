import {useEffect,useState} from 'react'
import {fetchMoviesDetails} from '../servises/ServisTMDB'
import {useParams,Outlet } from 'react-router-dom'
import { Section, Div,Information,Img } from '../component/Styles/MovieDetailStyles'
import { LinkViev } from '../component/Styles/link.styles'



const MovieDetail = () => {
    const [movies, setMovie] = useState(null);
    const {moviesId} = useParams()


    useEffect(() => {
        fetchMoviesDetails(moviesId).then(setMovie)
    }, [moviesId]);


    return (

        <>
            {movies &&(<Section>
                 <Img src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} alt={movies.title}  />
                <Div>
                <h1>{movies.title}</h1>
                <h2>overview</h2>
                <p>{ movies.overview}</p>
                <h2>Genrec</h2>
                {movies.genres.map(genr => <p key={genr.id}>{ genr.name}</p>)}

                </Div>
            </Section>)}
            <hr />
            <Information>
                 <h2>Additional information </h2>
            <LinkViev to="cast">Cast</LinkViev>
            <LinkViev to="revievs">Revievs</LinkViev>
         <Outlet />
       </Information>
        </>
    );
}

export default MovieDetail;