import './App.css';
import {useEffect, useState} from 'react';
import {Row, Col} from 'react-bootstrap';
import InputControl from './components/InputControl/InputControl';
import FilmListSection from './components/FilmListSection/FilmListSection';
import {fetchMovies} from './utlis';
import FilmDetailSection from './components/FilmDetailSection/FilmDetailSection';

function App() {
  const noMovieSelectedFragment = (
    <Col className="details d-flex flex-row justify-content-center align-items-center">
          <div>
            <h6>No movie selected</h6>
          </div> 
        </Col>
  );
  const [allMovies, setAllMovies] = useState(null);
  const [inFocusMovie, setInFocusMovie] = useState(null);
  useEffect(() => {
      fetchMovies().then((json) => {
        const movies = json.results;
        console.log(movies)
        setAllMovies(movies);
      })
  },[]);

  const handleMovieInFocus = (movieId) => {
    const inFocusId = allMovies.findIndex((movie) => movie.episode_id === movieId);
    const movie = allMovies[inFocusId];
    setInFocusMovie(movie);
  }

  const handleFilter = ({target}) => {
    switch(target.value){
      case 'year':
        setAllMovies((prev) => [...prev].sort((a,b) => new Date(b.release_date) - new Date(a.release_date)));
        break;
      case 'episode':
        setAllMovies((prev) => [...prev].sort((a,b) => b.episode_id - a.episode_id));
        break;
      default:
        break;
    }
  }

  return (
   <div>
    <InputControl movies={allMovies} handleFilter={handleFilter}></InputControl>
      <Row>
        <Col className="list-films">
        <FilmListSection handleFocus={handleMovieInFocus} movies={allMovies}></FilmListSection>
        </Col>
        {inFocusMovie ?
         <FilmDetailSection
         title={inFocusMovie.title}
         description={inFocusMovie.opening_crawl}
         director={inFocusMovie.director}
         >
         </FilmDetailSection>
         : noMovieSelectedFragment}
      </Row>
    
   </div>
  );
}

export default App;
