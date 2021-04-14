import React, { useState } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
const handleFormSubmit = (e) => {
   console.log("Hello");
   e.preventDefault()
   
  };
function ModalButton() {
 
  const [name,setname]=useState('');
  const [statecity,setstatecity]=useState(0);
  const [country,setcountry]=useState(0);
  const [developertype,setdevelopertype]=useState(0);
  const [balance,setbalance]=useState(0);
  const [rating,setrating]=useState(0);
  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
             <>
      <Button variant="primary" onClick={handleShow}>
        Create +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Raya Feel Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="name" >
      <Form.Label>Name</Form.Label>
      <Form.Control type="name" placeholder="Enter your name" 
      value={name}
      onChange={e => setname(e.target.value)}
      
      
      
      />
    </Form.Group>
     
  </Form.Row>
  <Form.Group controlId="state">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" defaultValue="Choose..."
      
      value={statecity}
            onChange={e => setstatecity(e.target.value)}
      
      >
        <option>Tamil Nadu</option>
        <option>Others</option>
      </Form.Control>
    </Form.Group>
    <Form.Group controlId="country">
      <Form.Label>Country</Form.Label>
      <Form.Control as="select" defaultValue="Choose..."
      
      value={country}
            onChange={e => setcountry(e.target.value)}
      >
        <option>India</option>
        <option>USA</option>
        <option>Others</option>
      </Form.Control>
    </Form.Group>
    <Form.Group controlId="developertype">
      <Form.Label>Developer Type</Form.Label>
      <Form.Control as="select" defaultValue="Choose..."
      value={developertype}
      onChange={e => setdevelopertype(e.target.value)}
      >
        <option>App Developer</option>
        <option>Web Developer</option>
        <option>Cloud Developer</option>
        <option>DevOps Developer</option>
      </Form.Control>
    </Form.Group>
  <Form.Group controlId="Balance">
    <Form.Label>Balance</Form.Label>
    <Form.Control type="number"  placeholder="$$$" 
    
    value={balance}
            onChange={e => setbalance(e.target.value)}
    />
  </Form.Group>
<Form.Group controlId="rating">
      <Form.Label>Rating</Form.Label>
      <Form.Control as="select" defaultValue="Choose..."
      
      value={rating}
            onChange={e => setrating(e.target.value)}
      >
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </Form.Control>
    </Form.Group>



  <Button variant="primary" type="submit" onSubmit={handleFormSubmit}>
    Submit
  </Button>
</Form>

 </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
        </div>
    )
}

export default ModalButton
