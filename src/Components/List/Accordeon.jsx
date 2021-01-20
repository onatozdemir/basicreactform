import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row"

import ListGroups from "./ListGroups";

export default function Accordeon({contactInfos, onDelete, editForm}) {
  
  return (
    <Col md={{ span: 10, offset: 1 }}>
      <Accordion>
        <Card>
          <Card.Header>
            <Row>
              <Col md={3} >
              <Accordion.Toggle block  as={Button} variant="info" eventKey="0">
              {contactInfos.formName} {contactInfos.formLastName}
            </Accordion.Toggle>
              </Col>
              <Col md={{ offset: 7}} >            
                  <Button variant="success"
                  onClick={() => editForm(contactInfos.id)}
                  
                  >Edit</Button> 
                  
                  <Button onClick={() => onDelete(contactInfos.id)} variant="danger">Delete</Button>    
              </Col>

            </Row>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <ListGroups contactInfos={contactInfos} editForm={editForm} />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Col>
  );
}
