import Card from 'react-bootstrap/Card'
import FormBody from './Form/FormBody'
import Col from 'react-bootstrap/Col'


export default function FormBorder({addForm, formName, formLastName, formEmail, formNumber, formAge, formMessage, setFormName, setFormLastName, setFormEmail, setFormNumber, setFormAge, setFormMessage}) {

return (

    <Col md={{ span:10, offset:1 }}>
        <Card>
            <Card.Body>
                    <Card.Title>Fill the form to contact Onat</Card.Title>
                    <FormBody 
                        addForm={addForm}
                        formAge={formAge} formName={formName} formLastName={formLastName} formEmail={formEmail} formNumber={formNumber} formMessage={formMessage}
                        setFormAge={setFormAge} setFormName={setFormName} setFormLastName={setFormLastName} setFormEmail={setFormEmail} setFormNumber={setFormNumber} setFormMessage={setFormMessage}
                        />
            </Card.Body>
        </Card>
    </Col>

);

}