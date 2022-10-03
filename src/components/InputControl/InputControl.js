import './InputControl.css';
import { Navbar, Nav, Form } from 'react-bootstrap';

function InputControl({handleFilter, movies, handleSearch}) {
  return (
   
 <Navbar className="custom-nav" bg="light" variant="light">
            <Nav.Item className="custom-cont-one">
            <Form.Select disabled={movies ? false : true} onChange={handleFilter}>
        <option>Sort By...</option>
        <option value="year">Year</option>
        <option value="episode">Episode</option>
      </Form.Select>
            </Nav.Item>
           <Nav.Item className="custom-cont">
           <Form.Control onChange={handleSearch} disabled={movies ? false : true} type="text" placeholder="Type to search..." />
           </Nav.Item>
      </Navbar>
  );
}

export default InputControl;