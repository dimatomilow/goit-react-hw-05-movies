import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { fetchSearchMoive } from '../servises/ServisTMDB'
import { Ul, Li, MovieLink, Img, Title } from '../component/Styles/filmList.styles'
import {Form,BtnSubmit} from '../component/Styles/form.styles'

const Movies = () => {
    const [form, setForm] = useState('iron man ');
    const [films, setFilms] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const filmQuvery = searchParams.get('film ') || ' ';
    const handleSubmit = e => {
        e.preventDefault();
        setForm(e.target.search.value)
        setSearchParams({ film:form})
    }
    useEffect(() => {
        fetchSearchMoive(form).then(setFilms)
    },[form])
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <input type=" search" name="search"/>
                <BtnSubmit type="submit" value= "Search"/>
            </Form>
            <Ul>
                {films && films.map(({ title, poster_path, id }) => <Li key={id}><MovieLink to={`/movies/${id}`}><Img src={` https://image.tmdb.org/t/p/w500/${poster_path} `} alt={title}></Img><Title>{title}</Title></MovieLink></Li>)}
            </Ul>
        </>
    );
}

export default Movies;