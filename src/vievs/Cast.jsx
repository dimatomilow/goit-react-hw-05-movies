import {useParams} from 'react-router'
import {fetchMoviesCast} from '../servises/ServisTMDB'
import {useState,useEffect} from 'react'


const Cast = () => {
    const  [casts, setCast ] = useState(null);
    const { moviesId } = useParams();
console.log(casts)
useEffect(() => {
        fetchMoviesCast(moviesId).then(setCast)
},[moviesId]);

    return (
        <>
            <ul>
                {casts && casts.map(cast => <li key={cast.id}>
                    <img src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`} alt={ cast.name} width = '100'/>
                    <p>{cast.name}</p></li>)}
</ul>
    </>

    );
}

export default Cast;