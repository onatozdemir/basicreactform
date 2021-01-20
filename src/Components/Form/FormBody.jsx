import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";


export default function FormBody({ addForm, formName, formLastName, formEmail, formNumber, formAge, formMessage, setFormName, setFormLastName, setFormEmail, setFormNumber, setFormAge, setFormMessage }) {

    function onSubmit(e) {
        e.preventDefault()

        addForm()
    }

  return (
    <Col>
      <Form onSubmit={onSubmit} >
        <Form.Row>
          <Form.Group as={Col} controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" 
            placeholder="Enter Name" 
            value={formName} 
            onChange={(e) => setFormName(e.target.value)} />
          </Form.Group>

          <Form.Group as={Col} controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Last Name"
            value={formLastName} 
            onChange={(e) => setFormLastName(e.target.value)} />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" 
            value={formEmail} 
            onChange={(e) => setFormEmail(e.target.value)} />
          </Form.Group>

          <Form.Group as={Col} controlId="formNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="phonenumber" placeholder="Enter Phone Number" 
            value={formNumber} 
            onChange={(e) => setFormNumber(e.target.value)} />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formAge">
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" placeholder="Enter your age" 
            value={formAge} 
            onChange={(e) => setFormAge(e.target.value)} />
          </Form.Group>
        </Form.Row>

        <Form.Group>
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} type="text" placeholder="Enter your message..." value={formMessage} 
            onChange={(e) => setFormMessage(e.target.value)} />
        </Form.Group>

        <Button block variant="primary" type="submit" >
          Submit
        </Button>
      </Form>
    </Col>
  );
}
