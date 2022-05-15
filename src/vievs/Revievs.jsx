import {useParams} from 'react-router'
import {fetchMoviesRevievs} from '../servises/ServisTMDB'
import {useState,useEffect} from 'react'


const Cast = () => {
    const  [revievs, setRevievs ] = useState(null);
    const { moviesId } = useParams();
console.log(revievs)
useEffect(() => {
        fetchMoviesRevievs(moviesId).then(setRevievs)
},[moviesId]);

    return (
        <>
            <ul>

                {revievs && revievs.map(({author,content,id}) => <li key={id}>
                    <h2>{author}</h2>
                    <p>{content}</p></li>)}
</ul>
    </>

    );
}

export default Cast;