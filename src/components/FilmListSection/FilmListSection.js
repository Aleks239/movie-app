import './FilmListSection.css';
import { ListGroup, Stack, Spinner } from 'react-bootstrap';

function FilmListSection({movies, handleFocus}) {

  const loadingIndicator = (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner> 
  )
    
  return (
    
    <ListGroup className="custom-list-film-items" variant="flush">
        {!movies ? loadingIndicator : movies.map((movie) => {
            return (
    <ListGroup.Item onClick={()=>{handleFocus(movie.episode_id)}} key={movie.episode_id} as="div" className="custom-item-film" action>
      <Stack direction="horizontal" gap={3}>
      <div className=""><small>Episode {movie.episode_id}</small></div>
      <div className=""><strong>{movie.title}</strong></div>
      <div className="ms-auto">{movie.release_date}</div>
    </Stack>
      </ListGroup.Item>
            )
        })}
      
    </ListGroup>
    
  );
}

export default FilmListSection;
