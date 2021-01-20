import ListGroup from "react-bootstrap/ListGroup";
import Button from 'react-bootstrap/Button'

export default function item({ contactInfos }) {
  

  
    return (
    <>
      <ListGroup>
        <ListGroup.Item><strong>Name: </strong>
        {contactInfos.formName}
           
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Last Name: </strong> {contactInfos.formLastName}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>E-mail: </strong> {contactInfos.formEmail}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Age: </strong> {contactInfos.formAge}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Message: </strong> {contactInfos.formMessage}
        </ListGroup.Item>
      </ListGroup>

      
    </>
  );
}
