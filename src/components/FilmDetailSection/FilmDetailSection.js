import {Col} from 'react-bootstrap';

function FilmDetailSection({title, description, director}) {
  return (
    <Col className="custom-movie-details-item">
    <h3>{title}</h3>
    <p>{description}</p>
    <p>Directed by {director}</p>
  </Col>
  );
}

export default FilmDetailSection;