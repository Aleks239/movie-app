import './InputControl.css';
import { Navbar, Container, Nav, Form } from 'react-bootstrap';

function InputControl() {
  return (
   
 <Navbar className="custom-nav" bg="light" variant="light">
            <Nav.Item className="custom-cont-one">
            <Form.Select>
        <option>Sort By...</option>
        <option value="year">Year</option>
        <option value="episode">Episode</option>
      </Form.Select>
            </Nav.Item>
           <Nav.Item className="custom-cont">
           <Form.Control type="text" placeholder="Type to search..." />
           </Nav.Item>
      </Navbar>
  );
}

export default InputControl;