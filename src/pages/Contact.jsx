import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Contact.css"

export const Contact = () => {
    return (
        <Container className="col-sm-4 contactContainer">
            <Form className='contactForm custom'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Fullname:</Form.Label>
                    <Form.Control type="name" placeholder="Enter fullname" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address:</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We will never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Message:</Form.Label>
                    <Form.Control type="text" placeholder="Write your message here" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="info" type="submit">
                Submit
                </Button>
            </Form>
        </Container>
        );
}

export default Contact;