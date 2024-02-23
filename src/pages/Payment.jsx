import Container from 'react-bootstrap/Container';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Stack from 'react-bootstrap/Stack';
import "../pages/payment.css"


export const Payment = () => {
    return (
        <Container fluid="md"className="payment_Container" >
            
                <Stack  gap={3}>
                    <Form>
                        <Form.Group className="mb-1">
                            <Form.Label className="text-light">Full Name</Form.Label>
                            <Form.Control type="name" placeholder="Name" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-1">
                            <Form.Label className="text-light">Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="text-light">Address</Form.Label>
                            <Form.Control type="text" placeholder="Enter Address" />
                        </Form.Group>
                        
                    </Form>
                    <Form>
                        <Form.Group className="mb-2">
                            <Form.Label className="text-light">Card Number</Form.Label>
                            <Form.Control type="number" placeholder="XXXX-XXXX-XXXX-XXXX" />
                            
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className="text-light">Card Name</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <InputGroup className="mb">
                        <InputGroup.Text>Date</InputGroup.Text>
                        <Form.Control aria-label="First name" />
                        <Form.Control aria-label="Last name" />
                        <InputGroup.Text>Security Number</InputGroup.Text>
                        <Form.Control aria-label="First name" />
                        <Form.Control aria-label="Last name" />
                        </InputGroup>
                        
                    </Form>
                    
                        
                    </Stack>
                    
            
        </Container>
    );
}

export default Payment;
