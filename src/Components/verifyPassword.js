import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function VerifyPassword(props){

    let forgetUser = async e => {
        e.preventDefault();

        props.onSubmit(e.target.elements.email.value);
    }

    return(
        <div>
            <section id="featured-services" className="featured-services">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-lg-6 col-md-6">
                            <Card>
                                <Card.Header>Forgot Your Password?</Card.Header>
                                <Card.Body>
                                <Form onSubmit={forgetUser}>
                                    <Form.Group className="mb-3 text-muted">
                                        <Form.Label>Enter the email associated with your account and we'll send you instructions to reset your password.</Form.Label>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Control name="email" type="email" placeholder="Enter email" required />
                                        
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                                </Card.Body>
                            </Card>
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    );

}

export default VerifyPassword;